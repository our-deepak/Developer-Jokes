async function getjoke() {
    const apiUrl= `https://official-joke-api.appspot.com/random_joke`;
  try{
  const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    
     document.querySelector('.joke').textContent= data.setup +" "+ data.punchline;
}catch(error){
   document.querySelector('.joke').textContent= "🚦 You’ve reached the joke limit (100 jokes per 15 minutes). Please take a short break and refresh after 15 minutes to unlock more laughs! 😄";   
}  
}

document.querySelector('.get-joke').addEventListener("click",getjoke);

getjoke();
