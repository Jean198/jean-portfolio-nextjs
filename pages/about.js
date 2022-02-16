import Layout from '../components/Layout'
import Image from "next/image"
import jeanprofile from "../public/images/jean-about.jpg"

export default function about() {
  return (
    <div >
      
        <Layout>
          <div className="about-container">
            <div className="about-image-div">
                <Image className="image" src={jeanprofile} alt="Here should be image" />

            </div>
            <div className="about-para-container">
              <h1>About Me</h1>
              <p>
                
                  Hi there! <br />
                  I am Jean, a master of science in computational engineering and software developer.
                   
                     <br /> <br />

                   My web development journey started couple years ago when I started a coffee business and didn’t have money to pay 
                   for a professional to build a website for my business. So I tought I should learn by myself. 
                   I started with HTML and CSS then I started to build my website. As I was building my website, my passion for coding and deloping web applications started rigth there! 
                   <br /> Although the Website never went online, 
                   my passion for web development kept growing until I decided to join the software expert intensive training at Jyväskylän ammattikorkeakoulu (JAMK) from may 2021. 
                   During This training I was introduced to many software development technologies and worked on many interesting projects. At the end of the training, I knew I really wanted to become a developer but also I 
                   realised it requires passion, patience and active learning. <br /> <br />

                  As I am  in middle stage of my developer journey, I am hoping to find a place to work , 
                  practice and develop my skills so that my dream to work as web developer would become true someday.

              </p>
            </div>

          </div>
        
        </Layout>
  
    </div>
  )
}
