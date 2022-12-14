import { useAuthContext } from '../../hooks/useAuthContext'
import useCollection from '../../hooks/useCollection'
import DiaryFrom from './DiaryFrom'
import styles from './Home.module.css'
import DiaryList from './DiaryList'

export default function Home() {
    const {user} = useAuthContext()
    const {documents, error} = useCollection('myDiary',["uid","==",user.uid])
    return (
        <main className='{styles.cont}'>
            <aside className='{styles.side_menu}'>
                <DiaryFrom  uid={user.uid}/>
            </aside>
            <ul className='{styles.content_list}'>
                {error && <strong>{error}</strong> }
                {documents && <DiaryList diaries={documents}/> }
            </ul>
        </main>
    )
}