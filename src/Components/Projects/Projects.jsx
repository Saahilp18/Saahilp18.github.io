
import './projects.scss'

export default function Projects(){
    
    return (
        <div className="projects" id = "project">
            <h1>Projects</h1>
            <br></br>
            <h2 className='projectName'>UPS Knowledgebase</h2>
            <h2 className='CScomponents'>C#, HTML, CSS, JavaScript, NodeJS, Razor Pages</h2>
            <h2 className='desc'>A dashboard for the WWS team to store the security vulnerabilities</h2>
            <br></br>
            <br></br>
            <h2 className='projectName'>Snack Track</h2>
            <h2 className='CScomponents'>Android Development, HTML, Java, Google APIs, Firebase</h2>
            <h2 className='desc'>An application that stores the users eating habits. Firebase and Google APIs were implemented in this project to process images taken by the user
            and analyze the food item presented so that it could be stored in an accurate and efficient manor.</h2>
            <br></br>
            <br></br>
            <h2 className='projectName'>Athena</h2>
            <h2 className='CScomponents'>Python, Google APIs -- Won best Google API application at the Rutgers Hackathon</h2>
            <h2 className='desc'>As an LA, I have led several classes of students learning computer science in topics regarding the basics of 
            data structures, object oriented programming, and searching/sorting methods</h2>
        </div>
    )
}
