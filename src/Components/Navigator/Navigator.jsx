import "./navigator.scss"
import {Person,Mail,LinkedIn, GitHub} from "@material-ui/icons"


export default function Navigator({menuOpen, setMenuOpen}) {
    return (
        <div className={"navigator "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#intro" >Saahil Patel</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span ><a  href="tel:7328232978" class="contact-button no-print" itemprop="email">(732) 823-2978</a></span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span ><a  href="mailto:saahilp18@gmail.com" class="contact-button no-print" itemprop="email">saahilp18@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span ><a  href="https://linkedin.com/in/patelsaahil" class="contact-button no-print" itemprop="email">LinkedIn</a></span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <span ><a  href="https://github.com/saahilp18" class="contact-button no-print" itemprop="email">Github</a></span>
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


