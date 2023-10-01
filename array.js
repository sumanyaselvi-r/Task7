
//1. Solving problems using array functions on rest countries data

   //a.Get all the countries from Asia continent /region using Filter function



var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    var countries=result.filter((element)=>element.region === "Asia");
  console.log(countries);
}

//b. Get all the countries with a population of less than 2 lakhs using Filter function

var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var res = JSON.parse(request.response);
    
    var p  =res.filter((element)=>element<200000);
  console.log(p);
}

//c. Print the following details name, capital, flag using forEach function

var req1 = new XMLHttpRequest();
req1.open("GET", "https://restcountries.com/v2/all");
req1.send();
req1.onload=function(){
    var res1 = JSON.parse(request.response);
    
    res1.forEach(element => {
      console.log(element.name);
          console.log(element.capital);
          console.log(element.flag); 
  
     });
  }
  


//d.Print the total population of countries using reduce function

var req2 = new XMLHttpRequest();
req2.open("GET", "https://restcountries.com/v2/all");
req2.send();
req2.onload=function(){
    var res2 = JSON.parse(request.response);
    var p = res2.reduce((acc,ele)=>acc+ele.population,0);
console.log(p);
}

//e.Print the country which uses US Dollars as currency.

var req3 = new XMLHttpRequest();
req3.open("GET", "https://restcountries.com/v2/all");
req3.send();
req3.onload=function(){
    var res3 = JSON.parse(request.response);
    var p = res3.filter((element)=>{
      for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
      }
    });
console.log(p);
}