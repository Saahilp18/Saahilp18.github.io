
import './projects.scss'

export default function Projects(){
    
    return (
        <div className="projects" id = "project">
            <h1>Projects</h1>
            <br></br>
            <h2 className='projectName'>UPS Knowledge Base</h2>
            <h2 className='CScomponents'>C#, HTML, CSS, JavaScript, NodeJS, Razor Pages</h2>
            <h2 className='desc'>A dashboard for the WWS team to store the security vulnerabilities</h2>
            <br></br>
            <br></br>
            <h2 className='projectName'>Snack Track</h2>
            <h2 className='CScomponents'>Android Studio, HTML, Java, Google APIs, Firebase</h2>
            <h2 className='desc'>An application that stores the users eating habits. Firebase and Google APIs were implemented in this project to process images taken by the user
            and analyze the food item presented so that it could be stored in an accurate and efficient manor.</h2>
            <br></br>
            <br></br>
            <h2 className='projectName'>Athena</h2>
            <h2 className='CScomponents'>Python (NLTK), Google APIs -- Won best Google API application at the Rutgers Hackathon</h2>
            <h2 className='desc'>Created a project that would allow students to submit lengthy YouTube videos or articles and receive a short summary based of key words
            inputted by the user. This project utilized Google Cloud Speech Recognition to create a transcript of the YouTube videos and the NLTK Python library for natural language processing and world analysis</h2>
        </div>
    )
}
