import React, { useState, useEffect } from 'react';
import cheesy from "/workspaces/leilanta-traffic-light-with-hooks/src/img/Imagen_27-10-23_a_las_17.47-removebg-preview.png"
import smile from "/workspaces/leilanta-traffic-light-with-hooks/src/img/pngimg.com - mouth_smile_PNG6.png"


const Home = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [isAnimationStopped, setIsAnimationStopped] = useState(false);

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    // Verifica si el semáforo está en rojo y detiene la animación
    setIsAnimationStopped(selectedColor === "red");
  }, [selectedColor]);

  let movableClass = "movable";

  if (isAnimationStopped) {
    movableClass += " paused"; // Agrega la clase para detener la animación
  }

  return (
    
    <div className="background">
        
      <div className="trafficlight justify-content-left bg-dark p-5">
     
        <div
          onClick={() => changeColor("red")}
          className={"m-3 red light" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => changeColor("yellow")}
          className={"m-3 yellow light" + (selectedColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => changeColor("green")}
          className={"m-3 green light" + (selectedColor === "green" ? " glow" : "")}
        ></div>
      </div>
      
      <img className="cheesy" src={cheesy}/>
      <a className='uwu'></a>
      <img className="smile" src={smile}/>
      <a className='cheesy'>🧍🏼</a>
      <a className={movableClass}> 🛺 </a>
      <div className="highway">
      </div>
      </div>
    
  );
};

export default Home;
