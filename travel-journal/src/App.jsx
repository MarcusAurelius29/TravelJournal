import './App.css'
import Navbar from './components/Navbar'
import CardData from './components/CardData'
import Card from './components/Card'

function App() {


  const cardElement = CardData.map((card1) => {
    return <Card key = {card1.id} name={card1} />
  })

  return (
   <div>
       <Navbar />
       <div className='card-array'>
        {cardElement}
       </div>
   </div>
  )
}

export default App
