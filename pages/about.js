import Layout from '../components/Layout'
import Image from "next/image"
import jeanprofile from "../public/images/jean-about.JPG"

export default function about() {
  return (
    <div >
      
        <Layout>
          <div className="about-container">
            <div className="about-image-div">
                <Image className="image" src={jeanprofile} alt="Here should be image" />

            </div>
            <div className="about-para-container">
              <h1>About</h1>
              <p>
                
                  Hi there! <br />
                  I am Jean, and I am currently pursuing an intensive software development at Jyväskylän ammattikorkeakoulu (JAMK). During this training, I have been introduced to different technologies used in frond-end and back-end web development as well as database management. <br /> <br />

                  Despite having a background in applied mathematics, I always felt a passion for coding and developing web applications. My web development journey started couple years ago when I started a coffee business and didn’t have money to pay for a professional to build a website for my business. So I tought I should learn by myself. I started with HTML and CSS then I started to build my website. Although the Website never went online, my passion for web development kept growing until I decided to join the software expert intensive training from may 2021. <br /> <br />

                  As I am still in early stage of my developer journey, I am hoping to find a place to work , practice and develop my skills so that my dream to work as web developer would become true someday.

              </p>
            </div>

          </div>
        
       
          

        </Layout>

      
      
      
      
    </div>
  )
}
