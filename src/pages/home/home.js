import { useState } from 'react';

import "./home.css";
import Data from '../../data'

import Header from '../../components/header/header';
import Searchbar from "../../components/searchbar/searchbar";
import Jobsgrid from "../../components/jobsGrid/jobsgrid"
import Button from '../../components/button/button'

const Home = (props) => {
    const [jobs, setJobs] = useState(Data);
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("no selection")
    const [contract, setContract] = useState(false)
    const [loadMore, setLoadMore] = useState(true)
  
    function handleSearch(event) {
      setSearch(event.target.value)
    }
  
    function handleRegion(event) {
      setRegion(event.target.value)
    }
  
    function handleChecked() {
      contract ? setContract(false) : setContract(true);
    }
  
    function handleLoadMore() {
      loadMore ? setLoadMore(false) : setLoadMore(true)
    }

  return (
    <div className="main">
      <Header />
      <Searchbar
        handleChecked={handleChecked}
        contract={contract}
        handleRegion={handleRegion}
        handleSearch={handleSearch}
        jobs={jobs}
      />
      <Jobsgrid
      jobOpen={props.jobOpen}
      jobClick={props.jobClick}
        loadMore={loadMore}
        contract={contract}
        region={region}
        search={search}
        jobs={jobs}
      />
      <Button
        search={search}
        region={region}
        contract={contract}
        jobs={jobs}
        loadMore={loadMore}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Home;
