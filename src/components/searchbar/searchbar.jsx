import images from "../../constants/images";
import "./searchbar.css";

const Searchbar = (props) => {
  return (
    <div className="app__searchbar">
      <div className="app__searchbar_search">
        <img
          className="app__searchbar_search-icon"
          src={images.searchIcon}
          alt="Search Icon"
        />
        <input
        onChange={props.handleSearch}
          className="app__searchbar_searchinput"
          type="search"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div className="app__searchbar_location">
        <img
          className="app__searchbar_location-icon"
          src={images.locationIcon}
          alt="Location Icon"
        />
        <select onChange={props.handleRegion} className="app__searchbar_location-filter">
          <option className="app__searchbar-location-text" value="no selection">Filter By Location...</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Russia">Russia</option>
          <option value="Singapore">Singapore</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
        </select>
      </div>
      <div className="app__searchbar_go">
        <div className="app__searchbar_type">
          <label className="app__searchbar_type-checkbox">
            <input className="app__searchbar_type-checkbox" type="checkbox" id="isFullTime" checked={props.contract} onChange={props.handleChecked} />
            <label htmlFor="isFullTime" className="checkmark"></label>
            Full Time Only
          </label>
          <img className="app__searchbar_type-hidden" src={images.filter} alt="Filter Icon" />
        </div>
        <div className="app__searchbar_btn">
          <button className="app__searchbar_btn-live btn__style">Search</button>
          <img className="app__searchbar_btn-hidden btn__style-mobile" src={images.searchIconWhite} alt="Search Icon" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
