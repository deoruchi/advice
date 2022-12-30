import { useEffect, useState } from "react"


export default function SubComp2(){

    const[data,sd]=useState([]);
    function ad(){
        fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => 
        {   
            sd(json.slip)
        })
    }
    console.log(data)
    useEffect(()=>{
        ad()
    },[])
    return(
        <>
                 <p id="adv">Advice #{data.id}</p>
                <h3 key={data.id}>{data.advice}</h3>
        </>
    )
}