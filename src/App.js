import './App.css';
import Cards from "./components/cards";
import CardData from "./components/cardsapi"
import Navbar from './components/navbar';

function handleCard(data){
  return (
    <Cards 
      key={data.id}
      img={data.image}
      url={data.link}
    />
  )
}

function App() {
  return (
    <>
      <div className='potfolio-heading'>
        <h1>PORTFOLIO</h1>
      </div>
      <Navbar />
      <div className='portfolio-cards'>
        {CardData.map(handleCard)}
      </div>
    </>
  );
}

export default App;
