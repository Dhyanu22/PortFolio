import "../App.css";

function Cards(props) {
  return (
    <>
      <a href={props.url}>
        <div className="card">
          <img src={props.img} alt="nothing" />
          <div className="card-content">
            <img src="https://i.imgur.com/jYHuIWd.png" alt="Plus" />
            <h3>HTML/CSS/JAVASCIPT<br /></h3>
            <div className="emptybox"></div>
            <h1>{props.name}</h1>
          </div>
        </div>
      </a>
    </>
  );
}

export default Cards;
