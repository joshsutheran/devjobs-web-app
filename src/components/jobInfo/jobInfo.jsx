import "./jobInfo.css";

import Footer from '../footer/footer'

const JobInfo = (props) => {
  let selectedJob;
  props.jobs.map((job) => {
    if (props.selected == job.id) {
      selectedJob = job;
    }
  });
  return (
    <div>
      <div className="jobinfo">
        <div className="jobinfo__header">
          <div
            className="jobinfo__header-logo"
            style={{ backgroundColor: selectedJob.logoBackground }}
          >
            <img
              className="jobinfo__header-logo-image"
              src={selectedJob.logo.default}
            ></img>
          </div>
          <div className="jobinfo__header-text">
            <h1>{selectedJob.company}</h1>
            <p>{selectedJob.website}</p>
          </div>
          <div className="jobinfo__header-btn">
            <a onClick={() => alert("Company Website Would Open Here!")}>
              <button>Company Site</button>
            </a>
          </div>
        </div>
        <div className="jobinfo__profile">
          <div className="jobinfo__profile-banner">
            <div className="jobinfo__profile-banner-left">
              <div className="jobinfo__keystats">
                <span className="jobinfo__keystats-added">
                  {selectedJob.postedAt}
                </span>
                <span className="jobinfo__keystats-period">·</span>
                <span className="jobinfo__keystats-contract">
                  {selectedJob.contract}
                </span>
              </div>
              <h3 className="jobinfo__keystats-title">
                {selectedJob.position}
              </h3>
              <h6 className="jobinfo__keystats-location">
                {selectedJob.location}
              </h6>
            </div>
            <div className="jobinfo__profile-banner-right">
              <div className="jobinfo__apply-btn">
                <button
                  onClick={() => alert("Job Application would open!")}
                  className="btn__style jobinfo__btn"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="jobinfo__profile-overview jobinfo__text">
            <p>{selectedJob.description}</p>
          </div>
          <div className="jobinfo__profile-requirements-title jobinfo__heading">
            <h4>Requirements</h4>
          </div>
          <div className="jobinfo__profile-requirements-info jobinfo__text">
            <p>{selectedJob.requirements.content}</p>
          </div>
          <div className="jobinfo__profile-requirements-list jobinfo__text jobinfo__list">
            <ul>
              {selectedJob.requirements.items.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="jobinfo__profile-jobspec-title">
            <h4 className="jobinfo__heading">What Will You Do</h4>
          </div>
          <div className="jobinfo__profile-jobspec-info jobinfo__text">
            <p>{selectedJob.role.content}</p>
          </div>
          <div className="jobinfo__profile-jobspec-list jobinfo__text jobinfo__list">
            <ul>
              {selectedJob.role.items.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer job={selectedJob} />
    </div>
  );
};

export default JobInfo;
