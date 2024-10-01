import Header from "../components/header";
export default function Projects(){
    return(
        <div>
            <Header/>
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
        </div>

    )
}