import { useState } from "react"

const CityInput = () => {

    const[city,setcity] = useState("");

    const handleCheck = () => {
        if(!city.trim()){
            alert("please enter a city");
            return;
        }
        alert(`city : ${city}`)
    };

    return(

    
        <form onSubmit={(e) =>{
            e.preventDefault();
            handleCheck();
        }}>
            <input 
            type="text" 
            placeholder="enter city name"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            />

            <button type="submit">Check Weather</button>
        </form>    
    )
}