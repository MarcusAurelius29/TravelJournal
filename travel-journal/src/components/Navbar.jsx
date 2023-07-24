import globe from '../assets/globe.png'

function Navbar() {

    return(
          <nav className="navigator">
            <img src={globe} alt='globe' className='globe'></img>
            <h1>My Travel Journal</h1>
          </nav>
    )
}

export default Navbar