import fs from 'fs'
import path from 'path'
import Layout from "../components/Layout"
import matter from 'gray-matter'
import Post from "../components/Post"
import {sortByDate} from '../utils'





export default function blog({posts}) {
  
  return (
    <Layout>
       

        <div className="Blog-container">

        <p className='blog-intro'>
         On this page, I have decided to start writting articles about concepts I am learning during Software Development journey. These are the articles I've written so far.
        </p>

            
          <div className='posts'>
             {posts.map((post, index)=>
              <Post post={post}/>
             )}
          </div>
      
        </div>

    </Layout>
    
  )
}


export async function getStaticProps(){
  // Get files from the posts directory
  const files= fs.readdirSync(path.join('posts'))
  
  // Get slug and frontmatter from posts

  const posts =files.map(filename =>{
    // Create slug
    const slug= filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data: frontmatter}=matter(markdownWithMeta)
    return{
       slug,
       frontmatter,
    }
  })

  

  return{
    props:{
      posts:posts.sort(sortByDate),
    }
  }
}
