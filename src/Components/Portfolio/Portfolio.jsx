
import './portfolio.scss'

export default function Portfolio(){
    
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Experiences</h1>
            <br></br>
            <h2 className='company'>Oracle</h2>
            <h2 className='location'>Austin, TX</h2>
            <h2 className='companyInfo'>This summer, I will be apart of the Enterprise Engineering and Developer Tools team at Oracle. 
            My time there will consist of working on business operations, cloud engineering and apps, collaborations services, corporate apps, endpoint and security, internal builder tools, and physical infrastructure.</h2>
            <br></br>
            <br></br>
            <h2 className='company'>United Parcel Service (UPS)</h2>
            <h2 className='location'>Mahwah, NJ • June 2021 - May 2022</h2>
            <h2 className='companyInfo'>At UPS, I utilized RSA Encryption to scale the encryption of 70 applications and their clear text passwords to
             reduce security vulnerabilities. I also audited the UPS load balancers, fixing and cleaning entries that needed to have their listening 
             ports changed or shut down in order for the servers to be recycled and reused. 
             Among the plethora of tasks I've completed at UPS I also used Grafana Dashboards and Prometheus to analyze the CPU, 
             memory, and storage usage of 180 servers across 12 web farms which has prevented server outages during times of 
             peak performance.</h2>
            <br></br>
            <br></br>
            <h2 className='company'>Learning Assistant Program - Data Structures</h2>
            <h2 className='location'>Rutgers University • September 2021 - Present</h2>
            <h2 className='companyInfo'>As an LA, I have led several classes of students learning computer science in topics regarding
            data structures, object oriented programming, graph theory, trees, and searching/sorting methods.</h2>
        </div>
    )
}
