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
                A Fullstack Developer based in Lappeenranta, Finland
                <br />I have a passion for coding and developing Web Applications.
            </p>
            <p>
                <a href="mailto:jeandedieu.niyigaba@gmail.com" className="underline">
                    Send me email
                </a>{"  "}
                if you are interrested in working together.
            </p>
        
        </div> 
    
    </div>
    
  )
}
