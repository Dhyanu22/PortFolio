import '../App.css';

function Cards(props){
    return (
        <>
            <div className="card">
                <a href={props.url}>
                    <img src={props.img} alt="nothing"/>
                </a>
            </div>
        </>
    )
}

export default Cards;