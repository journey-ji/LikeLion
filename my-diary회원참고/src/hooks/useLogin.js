import { useState } from "react"
import { appAuth } from '../firebase/config'
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 서버와의 통신 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();


    const login = (email, password) => {
        setError(null);
        setIsPending(true);

        // 비밀번호 설정으로 유저정보를 등록합니다.
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: 'login', payload: user });
                setError(null);
                setIsPending(false);
                if (!user) {
                    throw new Error('로그인에 실패했습니다.');
                }
            })
            .catch((error) => {
              setError(error.message);
              setIsPending(false);
              console.log(error.message);
            });
    }

    return { error, isPending, login }
}
