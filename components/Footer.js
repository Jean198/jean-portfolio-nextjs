import { FaGithub, FaLinkedin,FaGitlab } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-elem">
            <p>
                2021 Jean Niyigaba - All rights reserved
            </p>
        </div>
        <div className="footer-elem">
            <p>JN</p>
        </div>
        <div className="footer-elem">
            <p>
            <a href="" className="footer-icons"><FaGithub className="text-2xl" /> </a>
            <a href="" className="footer-icons"><FaGitlab className="text-2xl" /> </a>
            <a href="" className="footer-icons"> <FaLinkedin className="text-2xl" /></a>
            </p>
            

        </div>

        
      
    </div>
  )
}
