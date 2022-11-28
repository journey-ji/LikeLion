import Posts from "./posts/Posts"
import About from "./about/About"
import { useContext, useState, useEffect } from "react"
import UserContext from "../../context/UserContext"
import axios from 'axios'
import './main.css'
export default function Main() {
  const {isLogin} = useContext(UserContext)
  const [posts,setPosts] = useState()

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json')
    .then(json=>{
      console.log(json.data)
      setPosts(json.data)
    })
  }, [])
  

  return (
    <main>
      {posts === undefined? <></>:(
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            <Posts posts={posts}/>
          </ul>
          {isLogin? <About/>: <></>}
        </div>
      )}
    </main>
  )
}
