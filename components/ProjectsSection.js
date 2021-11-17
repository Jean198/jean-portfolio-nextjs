import { FaGithub } from "react-icons/fa";
import Image from "next/image"
import logo from "../public/images/logo-iso.png";
import bitcoin from "../public/images/bitcoin.png"
import weather from "../public/images/weather.png"
import currency from "../public/images/currency.png"
import bit from "../public/images/bit.png"

export default function Projects() {
  return (
    <div className="projects-section">
      <hr className="horizontal-line"/>
      <div className="projects-title">
        <h3>Projects</h3>
      </div>
      
        <div className="project-box">
          <h2>Softrain project (<span className="frameworks"> React/Next js/Tailwind CSS </span>)</h2>
          <a href=""><FaGithub className="text-2xl" /></a>
          <p>
          While working as trainee software developer at Softrain Blobs Oy, my main task is to rewrite the logitar software using React
          and Node js. <br />
          For this task, I have chose to use Next js as react framework and tailwind css for styling. <br />
          <span className="span"> <a href="">follow this link</a></span> to see what I have achieved so far! <br />

          <div className="project-image-div">
            <Image className="" src={logo} alt="Here should be image"  />

          </div>



          </p>
        </div>
        <div className="project-box">
        <h2>Crypto-currency tracker App (<span className="frameworks"> React/Next js </span>)</h2>
        <a href=""><FaGithub className="text-2xl" /></a>
          <p>
            This app built with Next Js gives current overall information about crypto-currency values on the market.

            <div className="project-image-div">
              <Image className="image" src={bit} alt="Here should be image"  />


            </div>
            
              <span className="span"> 
                <a href="https://crypto-currency-tracker-tau.vercel.app/">
                  <button className="project-button">Go to the App</button>
                </a>
              </span> 
            

          </p>
        </div>
        <div className="project-box">
        <h2>Currency Converter (<span className="frameworks"> Node js/express </span>)</h2>
        <a href=""><FaGithub className="text-2xl" /></a>
          <p>
          survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
           Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
           of Lorem Ipsum.

           <div className="project-image-div">

              <Image className="image" src={currency} alt="Here should be image"  />

           </div>

           <span className="span"> 
                <a href="https://jn-currency-converter.herokuapp.com/">
                  <button className="project-button">Go to the App</button>
                </a>
           </span> 

          </p>
        </div>
        <div className="project-box">
        <h2>Lorem Ipsum</h2>
        <a href=""><FaGithub className="text-2xl" /></a>


          <p>
          survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
           Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
           of Lorem Ipsum.

           <div>
             
           </div>

           <span className="span"> 
                <a href="">
                  <button className="project-button">Go to the App</button>
                </a>
           </span>

          </p>
        </div>
        
      


      
    </div>
  )
}
