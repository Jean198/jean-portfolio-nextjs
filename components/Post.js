import Link from 'next/link'

export default function Post({post}) {
  return (
    <div className='card'>
        <img src={post.frontmatter.cover_image}/>
        <div className='post-date'>Published on {post.frontmatter.date}</div>
        <h3 className='post-title'>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>

        <Link href={`/blog/${post.slug}`}>
            <a className='btn'>Read more...</a> 
        </Link>
      
    </div>
  )
}
