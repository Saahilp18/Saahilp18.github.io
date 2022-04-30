
import './portfolio.scss'

export default function Portfolio(){
    
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Experiences</h1>
            <br></br>
            <h2 className='company'>Oracle</h2>
            <h2 className='location'>Austin, TX</h2>
            <h2 className='companyInfo'>This summer, I will be apart of the Enterprise Engineering and Developer Tools team at Oracle. 
            My time there will consist of working on cloud engineering and applications, endpoint and security and physical infrastructure</h2>
            <br></br>
            <br></br>
            <h2 className='company'>United Parcel Service (UPS)</h2>
            <h2 className='location'>Mahwah, NJ • June 2021 - May 2022</h2>
            <h2 className='companyInfo'>Windows Web Service (WWS) is a team that uses a Windows platform to administrate the ASP.Net and ColdFusion web applications. WWS manages BizTalk, Cambridge, and Search infrastructure and supports intranet and DMZ business-critical web applications. 
            For the summer of 2021 and fall of 2022, I assisted the team in writing automated scripts in PowerShell or CSharp to automate manual tasks that the team was performing. I also be worked on creating dashboards for the team to use EAM, these dashboards are being used to troubleshoot production problems and analyze the IIS and infrastructure unit components.</h2>
            <br></br>
            <br></br>
            <h2 className='company'>Learning Assistant Program</h2>
            <h2 className='location'>Rutgers University • September 2021 - Present</h2>
            <h2 className='companyInfo'>As an LA, I have led several classes of students learning computer science in topics regarding the basics of 
            data structures, object oriented programming, and searching/sorting methods</h2>
        </div>
    )
}
