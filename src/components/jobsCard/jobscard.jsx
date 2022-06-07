import "../jobsCard/jobscard.css";

const Jobscard = (props) => {
  return (
    <div onClick={props.jobClick} className="job__item" id={props.job.id} key={props.job.id}>
      <div className="job__image" style={{backgroundColor: (props.job.logoBackground)}} >
        <img src={props.job.logo.default} alt="Company Logo" />
      </div>
      <div className="job__info">
        <div className="job__time">
          <p className="job__time-greytext">{props.job.postedAt}</p>
          <p className="job__time-greytext job__time-period">·</p>
          <p className="job__time-greytext">{props.job.contract}</p>
        </div>
        <p className="job__position">{props.job.position}</p>
        <p className="job__company">{props.job.company}</p>
        <p className="job__location">{props.job.location}</p>
      </div>
    </div>
  );
};

export default Jobscard;
