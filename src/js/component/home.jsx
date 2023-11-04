import React, {useState} from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState ("green");

//	el terniario: (selectedColor === "red") ? "glow" : "" ; es igual a:
//	let str = ""
//	if(selectedColor === "red"){
// str = "glow"}
//else ir(selectedColor)

	return (
		<div className="trafficlight container justify-content-center bg-dark p-5">
			<div
				onClick={()=> setSelectedColor("red")} 
				className={
				"m-3 red light" + (selectedColor === "red" ? " glow" : "")
				}></div>
			<div 
				onClick={()=> setSelectedColor("yellow")} 
				className={
				"m-3 yellow light" + (selectedColor === "yellow" ? " glow" : "")
				}></div>
			<div 
				onClick={()=> setSelectedColor("green")} 
				className={
				"m-3 green light" + (selectedColor === "green" ? " glow" : "")
			}></div>
		</div>
	);
};

export default Home;
