const sampleweatherDataString="{\"location\":\"New York\",\"temperature\":25,\"condition\":\"Sunny\"}";
const parsedData=JSON.parse(sampleweatherDataString);
console.log(parsedData); // Output: { location: 'New York', temperature: 25, condition: 'Sunny' }
console.log(parsedData.location); // Output: New York
console.log(parsedData.temperature); // Output: 25
console.log(parsedData.condition); // Output: Sunny 
const weatherData={
    location: "Los Angeles",
    temperature: 30,
    condition: "Cloudy"
};
const weatherDataString=JSON.stringify(weatherData);
console.log(weatherDataString); // Output: {"location":"Los Angeles","temperature":30,"condition":"Cloudy"} 
