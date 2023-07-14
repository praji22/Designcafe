import React from 'react'
import './App.css'
import { Header, Footer} from './Containers'
import { About, Contact, Navbar, Process, Solutions, Work} from './Components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>  
        <About/>
        <Solutions/>
        <Work/>
        <Process/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App



