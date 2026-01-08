const fetchData=async(cityname)=>{
    const apikey='******************************'
    const error=document.getElementById("error");
    const output=document.getElementById("output");
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`);
    if(!response.ok){
        error.textContent="failed to fetch"
        return
    }
    const data=await response.json()
    console.log(data)
    const temperature = Math.floor(data.main.temp)
}


const callerfun=()=>{
    const searchinput=document.getElementById("searchInput").value.trim();
    const error=document.getElementById("error")
    error.style.color="red"
    if(!searchinput){
        error.textContent="enter city name"
        return
    }
    console.log(searchinput)
    fetchData(searchinput)
}