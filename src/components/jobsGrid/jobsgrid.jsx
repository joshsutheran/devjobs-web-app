import "./jobsgrid.css";
import Jobscard from "../jobsCard/jobscard";

const Jobsgrid = (props) => {
  let jobs;
  if (props.jobs.length > 12 && props.loadMore === true) {
    jobs = props.jobs.slice(0, 12)
  } else {
    jobs = props.jobs
  }

  function click(event) {
    console.log(event)
  }
  return (
    <div className="jobs__wrapper">
      {jobs.filter((job) => {
        if 
        ((job.company.toLowerCase().includes(props.search.toLowerCase()) || job.position.toLowerCase().includes(props.search.toLowerCase()))) {
          return job
        }})
        .filter((job) => {
          if((props.region === "no selection") || (job.location === props.region)) {
            return job
          }
        })
        .filter((job) => {
          if (props.contract) {
            if (job.contract === "Full Time") {
              return job
            }
          } else {
            return job
          }
        })
        .map((item) => (
        <Jobscard jobOpen={props.jobOpen} jobClick={props.jobClick} job={item} key={item.id} />
      ))}
    </div>
  );
};

export default Jobsgrid;
