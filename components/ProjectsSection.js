import { FaGithub } from "react-icons/fa";
import Image from "next/image"
import logo from "../public/images/logo-iso.png";
import bitcoin from "../public/images/bitcoin.png"
import crypt from "../public/images/crypt.png"
import currency from "../public/images/currency.png"
import bit from "../public/images/bit.png"
import jamk from "../public/images/jamk1.png"
import softrain from "../public/images/softrain.png"
import rock from "../public/images/rock-scissors-paper.png"
import journal from "../public/images/journal.png"


import Link from 'next/link'

export default function Projects() {
  return (
    <div className="projects-section">
      <hr className="horizontal-line"/>
      <div className="projects-title">
        <h3>Projects</h3>
      </div>

      <div className="projectboxes-container">

      <div className="project-box">
          <h2>Softrain project (<span className="frameworks"> React/Next js/Tailwind CSS </span>)</h2>
          
          <p>
          While working as trainee software developer at Softrain Blobs Oy, my main task was to rewrite the Logitar software using React
          and Node js. <br />
          For this task, my tools choice were Next js as react framework and tailwind css for styling. <br />
          For privacy reasons, I am not allowed to share my work here, but you can
          <span className="span"> <a href="https://www.softrain.fi/en/tuotteet/">follow this link</a></span> to read about Logitar software <br />

          <div className="project-image-div">
            <Image className="" src={softrain} alt="Here should be image"  />

          </div>



          </p>
        </div>

        <div className="project-box">
          <h2>Kivi-Paperi-Sakset (<span className="frameworks"> Nodejs/Express/MongoDB </span>)</h2>
          <a href="https://github.com/Jean198/rock-scissors-paper"><FaGithub className="text-2xl" /></a>
          <p>

            I built this app in attempt to solve a challenge that came with an internship position offer. I hope you enjoy this!
          

          <div className="project-image-div">
            <Image className="" src={rock} alt="Here should be image"  />

          </div>

          <span className="span"> 
                <a href="https://jean-kivi-paperi-sakset.herokuapp.com/">
                  <button className="project-button">See the App</button>
                </a>
              </span> 



          </p>
        </div>

        <div className="project-box">
          <h2>Journal-App (<span className="frameworks"> Nodejs/Express/MongoDB </span>)</h2>
          <a href="https://github.com/Jean198/Jeans-journal"><FaGithub className="text-2xl" /></a>
          <p>

            I build this app  as course's final project while studying at JAMK. This is an app someone can use
            as a personal journal to take notes. By building this App I learned the following: <br /> <br />

              <div className="whatIlearned">
                <ul>
                <li>Work with Nodejs and Express Framework</li>
                <li>Understood deeply HTTP Request Methods including GET, POST, PUT</li>
                <li>Understood deeply ExpressJS Routing</li>
                <li>Authentication and authorization in Expressjs</li>
                <li>Connect to a MongoDB Database from Nodejs environment</li>

                </ul>

              </div>
              
              
            
          

          <div className="project-image-div">
            <Image className="" src={journal} alt="Here should be image"  />

          </div>

          <span className="span"> 
                <a href="https://jeans-journal.herokuapp.com/">
                  <button className="project-button">See the App</button>
                </a>
              </span> 



          </p>
        </div>

        <div className="project-box">
        <h2>Crypto-currency tracker App (<span className="frameworks"> React/Next js </span>)</h2>
        <a href="https://github.com/Jean198/crypto-currency-tracker"><FaGithub className="text-2xl" /></a>
          <p>
            This app built with Next Js gives current overall information about crypto-currency values on the market.
            The following are the main things are learned by building this app: <br /> <br />

            <div className="whatIlearned">
                <ul>
                <li>Working with Nextjs Framework</li>
                <li>Understood what is an API and how to fetch data from an API</li>
                

                </ul>

              </div>

            <div className="project-image-div">
              <Image className="image" src={crypt} alt="Here should be image"  />


            </div>
            
              <span className="span"> 
                <a href="https://crypto-currency-tracker-tau.vercel.app/">
                  <button className="project-button">See the App</button>
                </a>
              </span> 
            

          </p>
        </div>
        <div className="project-box">
        <h2>Currency Converter (<span className="frameworks"> Node js/express </span>)</h2>
        <a href="https://github.com/Jean198/currency-converter"><FaGithub className="text-2xl" /></a>
          <p>
          This is another application I built for my own learning. Since I am using a free API,  The application has
          only one base currency and multiple target currencies. By building this app I:

             <div className="whatIlearned">
                <ul>
                <li>Practiced my skills working with Nodejs and Expresjs framework</li>
                <li>Practiced different methods to fetch data from an API</li>
                

                </ul>

              </div>
                

           <div className="project-image-div">

              <Image className="image" src={currency} alt="Here should be image"  />

           </div>

           <span className="span"> 
                <a href="https://jn-currency-converter.herokuapp.com/">
                  <button className="project-button">See the App</button>
                </a>
           </span> 

          </p>
        </div>
        <div className="project-box">
        <h2>JAMK Course Projects</h2>
        <a href="https://github.com/Jean198/Ohjelmisto-osaaja-koulutus-JAMK-2021-"><FaGithub className="text-2xl" /></a>


          <p>
          During the software expert intensive training at JAMK, different technologies for web development and 
          database management have been covered including HTML5, CSS3, JavaScript, PHP, 
          Python, React, Nodejs, SQL, Mongodb, CMS(Wordpress). I have also 
          been trained to use GitLab and the Linux command line. Here are some of the projects done in different courses.


           <div className="project-image-div">
             <Image className="image" src={jamk} alt="Here should be image"  />
             
           </div>

           <span className="span"> 
              <Link href="/jamk">
                <a >
                  <button className="project-button">Go to the projects</button>
                </a>
              </Link>
                
           </span>

          </p>
        </div>

      </div>
      
        
         
    </div>
  )
}
