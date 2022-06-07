import Header from "../../components/header/header";
import JobInfo from "../../components/jobInfo/jobInfo";

import Data from "../../data";

const Job = (props) => {
    return (
        <div>
            <Header />
            <JobInfo jobs={Data} selected={props.selected} />
        </div>
    )
}

export default Job;