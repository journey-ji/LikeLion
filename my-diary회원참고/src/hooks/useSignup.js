import { useState } from "react"
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 서버와의 통신 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);


    // dispatch 함수를 통해 유저정보 업데이트 할 수 있도록...
    const {dispatch} = useAuthContext()


    const signup = (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        // 비밀번호 설정으로 유저정보를 등록합니다.
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                if (!user) {
                    throw new Error('회원가입에 실패했습니다.');
                }

                // 회원가입이 정상적으로 완료되면, 유저정보에 닉네임 업데이트
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {

                        dispatch({type:'login',payload:user})
                        // 정상적으로 끝나면 error와 pending state false 처리
                        setError(null);
                        setIsPending(false);
                    }).catch((error) => {
                        console.log(error.message);
                        setError(error.message);
                        setIsPending(false);
                    });

            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            });
    }

    return { error, isPending, signup }
}
