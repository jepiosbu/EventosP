import './App.css';
import * as componente from './Components/caballero.jsx';
import { useRef} from "react";

function App() {
    const cubo1=useRef(0);
    const img1= (e)=>{
        if(con==0)
        {
            cubo1.current.style.top="0vw";
            con++
        }
        else
        {
            cubo1.current.style.top="23.5vw";
            con--
        }
        
      };
      const img2= (e)=>{
        if(con==0)
        {
            cubo2.current.style.top="0vw";
            con++
        }
        else
        {
            cubo2.current.style.top="23.5vw";
            con--
        }
        
      };
      const img3= (e)=>{
        if(con==0)
        {
            cubo3.current.style.top="0vw";
            con++
        }
        else
        {
            cubo3.current.style.top="23.5vw";
            con--
        }
        
      };
      const img4= (e)=>{
        if(con==0)
        {
            cubo4.current.style.top="0vw";
            con++
        }
        else
        {
            cubo4.current.style.top="23.5vw";
            con--
        }
        
      };
  return (
    <main className="App">
      <componente.Caballero
    evento={img1}
    imagen="pegaso.jpg"
    imagen2="seiya.jpg"
    contain="containerCaballero1"
    />
    <componente.Caballero
    evento={img2}
    imagen="andromeda.jpg"
    imagen2="shun.jpg"
    contain="containerCaballero2"
    />
    <componente.Caballero
    evento={img3}
    imagen="shiriu.jpg"
    imagen2="shiryu.jpg"
    contain="containerCaballero3"
    />
    <componente.Caballero
    evento={img4}
    imagen="yoga.jpg"
    imagen2="hyoga.jpg"
    contain="containerCaballero4"
    />
    </main>
  );
}

export{App,cubo1};
