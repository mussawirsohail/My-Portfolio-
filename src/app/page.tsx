import Image from "next/image";
import Header from "./components/header";
  
export default function Home() {
  return (
    <body>
      <Header/>
      <div className="Parents-Container">
        <div className="Child-Container">
        Hello <span className="blue">Everyone</span> 
        <br></br>
        My Name is <span className="blue">Mussawir</span>
        <br></br>
        I am a <span className="blue">Next JS</span> Developer
        </div>
        <div>
        <img src="myphoto.jpg" className="picture"></img>
        </div>
      </div>
      <h1 className="Heading"> There are some Skills </h1>
            <br></br>
        <div className="SkillAdding">HTML</div>
        <div className="SkillAdding">CSS</div>
        <div className="SkillAdding">TYPESCRIPT</div>
        <div className="SkillAdding">CIT</div>
        <div className="SkillAdding">DIT</div>
        <div className="SkillAdding">AMAZON VA</div>
        <div className="SkillAdding">GERMAN LANGUAGE</div>
        <h1 className="aboutus"> About Us?</h1>
        <h1 className="About">Hello! I'm Mussawir Sohail Welcome to my portfolio! I'm a passionate FrontEnd web developer with a keen eye for design and functionality. I am pursuing an IT course of Generative AI, Web3 and Metaverse at Governor House Sindh. Where we are currently learning advanced technologies like Next JS. With a strong foundation in HTML, CSS, and TypeScript/Javascript, I enjoy creating beautiful, user-friendly websites. Over the past few months, I've worked on diverse projects, from building simple Calculator to static Student Management System. I specialize in responsive design, ensuring that every user has the best experience, no matter what device they're using.</h1>
        <h1 className="project"> Projects</h1>
        <div className="parentspics">
            <div>
                <img src="ATM.jpg"alt="ATM" className="leftpicture"/>
                <a href="https://github.com/mussawirsohail/ATM-Project-"className="left"> ATM Machine </a>
            </div>
            <div>
                <img src="calculator.jpg" alt="Calculator" className="CenterPicture"/>
                <a href="https://github.com/mussawirsohail/Caculator" className="center">Calculator </a>
            </div>
            <div>
                <img src="System.jpg" alt="management" className="Rightpicture"/>
                <a href="https://github.com/mussawirsohail/Student-Management-system-application-" className="right">Student Management System</a>
            </div>
            
        
        </div>
        <div>
                <img src="guess.jpg" alt="Guessing Game" className="Downpicture"/>
                <a href="https://github.com/mussawirsohail/Number-Guessing-Game" className="down">Number Guessing Game</a>
                </div>
                <h1 className="contact">GET IN TOUCH</h1>
                <br></br>
                <h1 className="phoneno">Phone:0312345678</h1>
                <br></br>
                <h1 className="email">Email:mussawirsoomro5@gmail.com</h1>
             <div className="maincontainer">
                <div className="smallcontainer">
                <input type="text" placeholder="YOUR NAME" className="design"/>
                <br></br>
                <input type ="text" placeholder="YOUR EMAIL" className="design2"/> 
                <br></br>
                <input type="number" placeholder="YOUR PHONR"className="design3" />
                </div>
                <div className="2nd small container">
                <input type="text" placeholder="YOUR MESSAGE"className="design4" />
             </div>
             </div>
             <button className="buttons">send message</button>
    </body>
    
  );
};
