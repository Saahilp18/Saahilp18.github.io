import "./intro.scss"
import {KeyboardArrowDown} from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
export default function Intro() {
    
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true, strings:["Software Engineer", "Information Technology", "Web Applications"], backspeed: 60, backDelay: 1500,
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

                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="arrowDown"/>
                </a>
            </div>
        </div>
    )
}
