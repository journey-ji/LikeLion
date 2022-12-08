import styles from './Home.module.css'
export default function DiaryList({diaries}) {


  return (
    <>
      {diaries.map((item)=>{
        return (
          <li key = {item.id}>
            <strong className={styles}>{item.title}</strong>
            <p className={styles}>{item.text}</p>
          </li>
        )
      })}
    </>
  )
}

// 꼬막장 파스타
// 베이컨 마늘 먼저 볶고 꼬막장 떼려넣고 볶다가 면 면수 넣고 볶아
// 소금 후추로 마지막 간
// 마지막에 대파 썰어넣어

