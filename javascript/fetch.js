//fetch api usinn promise chaining
/*
fetch("https://catfact.ninja/fact")
//.then((res) =>res.text())
.then((res) => res.json())
.then((txt) => console.log(txt))
.catch(() => console.log("api failed"))*/

/*
//fetch api using async await

async function fetchCatFact() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("API failed: " + error);
    }
}
fetchCatFact(); */

let exmp = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
};

async function testRestApi() 
{
    let data = await fetch ("https://api.restful-api.dev/objects",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },  
        body: JSON.stringify(exmp)
    });
    let txt = await data.json();
    console.log(txt);
}
testRestApi();