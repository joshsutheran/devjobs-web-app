import "./button.css";

const Button = (props) => {
  if (props.contract || props.region !== "no selection" || props.search !== "") {
    return <div></div>;
  } else {
    return (
      <div className="button">
        <button onClick={props.handleLoadMore} className="btn">
          {props.loadMore ? `Load More` : `Load Less`}
        </button>
      </div>
    );
  }
};

export default Button;
