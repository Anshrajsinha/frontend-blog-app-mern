import { useEffect, useState } from "react"
import { Post } from "../post"

export const IndexPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://blog3-1bfq.onrender.com/post').then(response => {
      response.json().then(posts => {
        console.log(posts)
        setPosts(posts)
      })
    })
  }, [])
    return (
        <>
          {posts.length > 0 && posts.map(post => {
            return (
              <Post {...post} />
            )
          }) }


          {/* <Post/>
          <Post/>
          <Post/> */}
        </>
    )
}