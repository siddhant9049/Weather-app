 import "./Main.css"
import React, { useState } from "react"
import axios from "axios"

 function Main(){
const [searchCity,setSearchCity]=useState("")
const [city,setCity]=useState("")
const [after,setAfter]=useState()
const [temp,setTemp]=useState("")
const [temprageh,setTempragehigh]=useState("")
const [tempragel,setTempragelow]=useState("")
const[humidity,setHumidity]=useState("")
const[sealevel,setSealevel]=useState("")
const [ground,setGround]=useState("")


let APIKEY="e11e291f71f76c5b4ac60c498655ea59"
// https://api.openweathermap.org/data/2.5/weather?lat=19.0785451&lon=72.878176
// &appid=e11e291f71f76c5b4ac60c498655ea59
// let API=`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${APIKEY}`
// let API2=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${APIKEY}`
let CountryCode="ISO 3166-2:IN"

const fetchApi = async () =>{
    const SEARCH = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity},${CountryCode}&appid=${APIKEY}`)
    // console.log(SEARCH.lon)
    setCity(SEARCH.data)
    let lon=SEARCH.data[0].lon
    let lat=SEARCH.data[0].lat
    console.log(lon,lat)
    // const SEARCHCITY1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
//    console.log(city)

// const fetchApicity= async () =>{
    const SEARCHCITY1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    // console.log(SEARCH.lon)
    setAfter(SEARCHCITY1.data.weather)
    setTemp(SEARCHCITY1.data.main.temp)
    setTempragehigh(SEARCHCITY1.data.main.temp_max)
    setHumidity(SEARCHCITY1.data.main.humidity)
    setSealevel(SEARCHCITY1.data.main.sea_level)
    setGround(SEARCHCITY1.data.main.grnd_level)
    setTempragelow(SEARCHCITY1.data.main.temp_min)
    console.log(SEARCHCITY1.data.main.temp)
    console.log(SEARCHCITY1.data.weather[0])
   
// }


}

const oninputchange=(e)=>{
    setSearchCity(e.target.value)
    // setSearchCity(e.target.value)
    // fetchApi()
    // setSearchCity(e.target.value)
    
    // setAfter()
    // setCity()
    // // console.log(e.target.value)
    // console.log(city)
}
const onSubmit=(e)=>{
    
    e.preventDefault()
    fetchApi()
    // setSearchCity("")
    // fetchApi()
    // setAfter()
    // setCity()
}

    return <>
    <div className="background">

    <div className="internal">

    <h1 className="h1">Weather App</h1>
    
   
    <input className="input" value={searchCity} onChange={oninputchange} type="search" placeholder="  E N T E R    C I T Y    N A M E"/>
    <input className="button" value="SELECT" type="button" onClick={onSubmit}/>
        <h1>Weather Details of City: {searchCity}</h1>
        <h1>Current Temperature: {temp}F</h1>
        <h1>Temperature Range: {temprageh} To {tempragel}</h1>
        <h1>humidity: {humidity}</h1>
        <h1>Sea Level: {sealevel}</h1>
        <h1>Ground Level: {ground}</h1>
    </div>
   
   </div>

    
    </>
 }
 export default Main