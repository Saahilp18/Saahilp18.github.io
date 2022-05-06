import "./intro.scss"
import {KeyboardArrowDown} from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import {Mail,LinkedIn, GitHub,Attachment} from "@material-ui/icons"

export default function Intro() {
    
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true, strings:["Software Engineer", "Information Technology", "Web Applications", "Developer"], backspeed: 60, backDelay: 1500,
        });
    },[]);

    return (
        <div className="intro" id = "intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/Headshot.png" alt=""></img>
                </div>
            </div>

             <div className="right">
                <div className="wrapper">

                    <h2>Hey there, I'm</h2>
                    <h1>Saahil Patel</h1>
                    <h3 ><span ref = {textRef}></span></h3>
                    <div className="iconContainer">
                    <div className="itemContainer">
                    <a  href="mailto:saahilp18@gmail.com" class="contact-button no-print" target="_blank" rel="noreferrer" itemprop="email">
                    <div className="col">
                        <Mail className="icon"/>
                        <span>Email</span>
                    </div>
                    </a>
                    </div>
                    <div className="itemContainer">
                    <a  href="https://linkedin.com/in/patelsaahil" target="_blank" rel="noreferrer" class="contact-button no-print" itemprop="email">
                        <div className="col">
                        <LinkedIn className="icon"/>
                        <span>LinkedIn</span>
                        </div>
                        </a>
                    </div>
                    <div className="itemContainer">
                    <a  href="https://github.com/saahilp18" class="contact-button no-print" target="_blank" rel="noreferrer" itemprop="email">
                            <div className="col">
                            <GitHub className="icon"/>
                                <span>GitHub</span>
                        </div>
                        </a>
                    </div>
                    <div className="itemContainer">
                    <a  href="assets/Resume.pdf" class="contact-button no-print" target="_blank" rel="noreferrer" itemprop="email">
                        <div className="col">
                        <Attachment className="icon"/>
                        <span>Resume</span>
                    </div>
                    </a>
                    </div>
                    </div>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="arrowDown"/>
                </a>
            </div>
        </div>
    )
}
