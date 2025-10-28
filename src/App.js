import logo from './logo.svg';
import './App.css';
import { useState,useRef } from 'react';
const plh = ' > wprowadź hasło do gry  <'
//const plh2 = '> Podaj literkę do hasła <'
const alfabetPL = [
  'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M',
  'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'
];




function App() {
  
  let [haslo, setHaslo] = useState([]);
  const [formHidden, setFormHidden] = useState(false);
  const [fromShown, setFormShown] = useState(false);


  const inputRef = useRef();
  const inputRef2 = useRef();
  const formRef = useRef();
  const formRef2 = useRef();

  const handleClick = (e) =>{
    e.preventDefault();
    haslo = (inputRef.current.value)
    setHaslo(haslo)
    console.log(haslo)
    hideform()
  }

  const updlength = (e) =>{
    e.preventDefault();
    const noweHaslo = inputRef.current.value;
    setHaslo(noweHaslo);

  }

  const hideform = () =>{
      formRef.current.classList.add('displayform')
    setFormHidden(true)
    showform()
  }

  const showform = () =>{
      formRef2.current.classList.remove('displayform')
    setFormHidden(true)
    for(let i = 0; i < haslo.length; i++){
        if(haslo[i] == " "){

        }else{
          "_"
        }
    }
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Wisielec</h1>
        <table>
           {alfabetPL.map((litera) => (<button className='litera'>{litera}</button>))}           
        </table>
        <h3>hasło ma: {haslo.length} cyfr</h3>
        
        <form ref={formRef}  onSubmit={handleClick} >
          <label>Wprowadź hasło: </label>
          <input ref={inputRef} className='input' type="text" placeholder={plh}></input><br></br>
          <button className='zatwPass'>Zatwierdź hasło!</button>
        </form>

        <form ref={formRef2} className='displayform'>
          
        </form>
      </header>
    </div>
  );
}

export default App;
