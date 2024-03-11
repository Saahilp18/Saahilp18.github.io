import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Experiences</h1>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="datadog"
        src="assets/company_logos/datadog.png"
        alt=""
      ></img>
      {/* <h2 className='company'>Amazon</h2> */}
      <br></br>
      <h2 className="location">New York City, NY • July 2024</h2>
      <h2 className="companyInfo">
        I'm excited to announce that I beginning my career as a Software
        Engineer at Datadog!
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="amazon"
        src="assets/company_logos/amazon_logo.png"
        alt=""
      ></img>
      {/* <h2 className='company'>Amazon</h2> */}
      <br></br>
      <h2 className="location">Austin, TX • May 2023 - August 2023</h2>
      <h2 className="companyInfo">
        At Amazon, I was a part of the Fulfillment Resource Optimization Group
        (FROG) team, whose service involves helping select the cheapest and most
        efficient shipping option to get a shipment to the customer on or before
        the promised delivery date. My task was to reduce internal team
        expenditure on expensive API calls to store eligible routes for a
        shipment. By intelligently refactoring the method of storing routes, I
        saved a projected $1,833,000 annually for the team. I was also able to
        assist in removing redundant capacity caps, causing the
        under-utilization of Amazon-owned trucks and planes when determining
        viable ship options during Prime Day events. This enabled Amazon's
        first-party resources to be able to receive a higher volume of shipments
        while staying under the max capacity. In addition, I was also able to
        document a critical code deployment process with steps and explanations
        of tooling, such as creating a custom dependency graph, building code
        changes, and deploying code in a production-simulated environment.
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="colgate"
        src="assets/company_logos/colgate_logo.png"
        alt=""
      ></img>
      {/* <h2 className='company'>Colgate-Palmolive</h2> */}
      <br></br>
      <h2 className="location">Piscataway, NJ • January 2023 - December 2023</h2>
      <h2 className="companyInfo">
        At Colgate, I developed an internal tool to automate the audit and
        management of users and employees. I restructured the output of
        statistician reports for dental studies and strategically updated the
        GUI to make it more user friendly and accessible. In addition, I also
        created triggers on various internal dashboards to update and
        conditionally display information. I have also created a service to
        validate and update internal employee departments using the Veeva API,
        BigQuery API, and PostgreSQL.
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="oracle"
        src="assets/company_logos/oracle_logo.jpeg"
        alt=""
      ></img>
      {/* <h2 className='company'>Oracle</h2> */}
      <br></br>
      <h2 className="location">Austin, TX • May 2022 - August 2022</h2>
      <h2 className="companyInfo">
        At Oracle, I was tasked to develop a script that collected telemetry
        data from an Oracle machine through an agent installed on all Oracle
        Issued Laptops and Personal Computers. The script was used by the
        Enterprise Engineering team to analyze usage and see usage if a
        machine's specifications matched the user's needs. Also, I led the
        research for a subsection of the Oracle Cloud Infrastructures' new
        endpoint management tool, which was created to cut costs for third-party
        software and create a centralized hub for endpoint management. The
        research involved a java framework called Helidon, which is used for
        micro profiling microservices and to develop internal micro profiling
        software instead of third-party software.
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img className="ups" src="assets/company_logos/ups_logo.png" alt=""></img>
      {/* <h2 className='company'>United Parcel Service (UPS)</h2> */}
      <br></br>
      <h2 className="location">Mahwah, NJ • June 2021 - May 2022</h2>
      <h2 className="companyInfo">
        At UPS, I utilized RSA Encryption to scale the encryption of 70
        applications and their clear text passwords to reduce security
        vulnerabilities. I also audited the UPS load balancers, fixing and
        cleaning entries that needed to have their listening ports changed or
        shut down in order for the servers to be recycled and reused. Among the
        plethora of tasks I've completed at UPS I also used Grafana Dashboards
        and Prometheus to analyze the CPU, memory, and storage usage of 180
        servers across 12 web farms which has prevented server outages during
        times of peak performance.
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="rutgers"
        src="assets/company_logos/rutgers_logo.png"
        alt=""
      ></img>
      <h2 className="company">Learning Assistant Program - Data Structures</h2>
      <h2 className="location">
        Rutgers University • September 2021 - Present
      </h2>
      <h2 className="companyInfo">
        As an LA, I have led several classes of students learning computer
        science in topics regarding data structures, object oriented
        programming, graph theory, trees, and searching/sorting methods.
      </h2>
    </div>
  );
}
