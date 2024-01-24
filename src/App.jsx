import './App.css'
import Button from './assets/Button/Button';
import Astros from './Navbar/Astros/Astros';
import Navbar from './Navbar/Navbar';

function App(){
  const btnText = "Login";

  const links = [
    { name: 'Home', href: "/" },
    { name: 'About', href: "/about" },
    { name: 'Astros', href: "/astros" },
  ]
  return(
    <>
    <Navbar links ={links}/>
    <Astros />
    <Button name={btnText}/>
    </>
  )
}

export default App
