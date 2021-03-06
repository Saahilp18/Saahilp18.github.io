import "./navigator.scss"
import {Mail,LinkedIn, GitHub,Attachment} from "@material-ui/icons"


export default function Navigator({menuOpen, setMenuOpen,darkMode,setDarkMode}) {
    return (
        <div className={"navigator "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#intro" >Saahil Patel</a>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span ><a  href="mailto:saahilp18@gmail.com" class="contact-button no-print" target="_blank" rel="noreferrer" itemprop="email">saahilp18@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span ><a  href="https://linkedin.com/in/patelsaahil" target="_blank" rel="noreferrer" class="contact-button no-print" itemprop="email">LinkedIn</a></span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <span ><a  href="https://github.com/saahilp18" class="contact-button no-print" target="_blank" rel="noreferrer" itemprop="email">Github</a></span>
                    </div>
                    <div className="itemContainer">
                        <Attachment className="icon"/>
                        <span ><a  href="assets/Resume.pdf" class="contact-button no-print" target="_blank" rel="noreferrer" itemprop="email">Resume</a></span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>                
            </div>
        </div>
    );
}


