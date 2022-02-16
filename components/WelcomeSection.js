import Image from "next/image"
import jeanprofile from "../public/images/jean-profile.JPG"






export default function WelcomeSection() {
  return (
    <div className="welcome-section">
        <div className="image-div">
            <Image className="image" src={jeanprofile} alt="Here should be image" />

        </div>

        <div className="introduction-div">
            <h2>I'm Jean Niyigaba,</h2>
            <p>
            I have a master’s degree in computational engineering and my passion
            is coding and developing Web Applications. <br />  
            I have worked as trainee software developer at Softrain Blobs Oy where I rewrote a big part of their transportation <br />
             software with modern web technologies  including React and Nodejs. <br /><br />
                I am looking for an internship or an entry level role to work and improve my skills.
            </p>
           
        
        </div> 
    
    </div>
    
  )
}
