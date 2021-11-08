import { FaGithub } from "react-icons/fa";
import Image from "next/image"
import logo from "../public/images/logo-iso.png";

export default function Projects() {
  return (
    <div className="projects-section">
      <hr className="horizontal-line"/>
      <div className="projects-title">
        <h3>Projects</h3>
      </div>
      
        <div className="project-box">
          <h2>Softrain project (React/Node js)</h2>
          <a href=""><FaGithub className="text-2xl" /></a>
          <p>
          While working as trainee software developer at Softrain Blobs Oy, my main task is to rewrite the logitar software using React
          and Node js. <br />
          For this task, I have chose to use Next js as react framework and tailwind css for styling. <br />
          <span className="span"> <a href="">follow this link</a></span> to see what I have achieved so far! <br />

          <div className="logo-image">
            <Image className="" src={logo} alt="Here should be image"  />

        </div>



          </p>
        </div>
        <div className="project-box">
        <h2>Software expert Training (JAMK)</h2>
        <a href=""><FaGithub className="text-2xl" /></a>
          <p>
          Since may 2021, I have attend a software expert training at JAMK. During the training, 
          I have been taking different courses which included some projects

          </p>
        </div>
        <div className="project-box">
        <h2>Softrain project</h2>
        <a href=""><FaGithub className="text-2xl" /></a>
          <p>
          survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
           Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
           of Lorem Ipsum.

          </p>
        </div>
        <div className="project-box">
        <h2>Softrain project</h2>
        <a href=""><FaGithub className="text-2xl" /></a>

          <p>
          survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
           Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
           of Lorem Ipsum.

          </p>
        </div>
        
      


      
    </div>
  )
}
