import Header from "../components/header";
export default function Contact(){
    return(
        <div >
        
            <Header/>
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
        </div>

)

}