//synchronous programming means that the code is executed line by line, and each line of code must wait for the previous one to finish before it can execute. This can lead to blocking behavior, where the program becomes unresponsive while waiting for a long-running operation to complete.

//asynchronous programming allows multiple operations to run concurrently without blocking the main thread. This is achieved through callbacks, promises, or async/await syntax, which enable the program to continue executing other tasks while waiting for an operation to complete. Asynchronous programming is particularly useful for tasks that involve I/O operations, such as fetching data from a server or reading files, as it allows the program to remain responsive and efficient.
function fetchLeaderBoard() {
    console.log("fetchLeaderBoard execution starts....");
    let startTime = Date.now();
    let delay = 2000; // 
    let endTime = startTime + delay; // Simulating a 2-second operation
    console.log("fetchLeaderBoard executing....");
    while (Date.now() < endTime) {
        console.log("fetchLeaderBoard execution completed.");
    }


}
function fetchBannerImages() {
    console.log("fetchBannerImages execution starts....");
    let startTime = Date.now();
    let delay = 2000; // 
    let endTime = startTime + delay; // Simulating a 2-second operation
    console.log("fetchBannerImages executing....");
    while (Date.now() < endTime) {
        console.log("fetchBannerImages execution completed.");
    }
}
function fetchCourseProgress() {
    console.log("fetchCourseProgress execution starts....");
    let startTime = Date.now();
    let delay = 2000; // 
    let endTime = startTime + delay; // Simulating a 2-second operation
    console.log("fetchCourseProgress executing....");
    while (Date.now() < endTime) {
        console.log("fetchCourseProgress execution completed.");
    }
}

console.log("Dashboard loading started....");
fetchLeaderBoard();
fetchBannerImages();
fetchCourseProgress();
console.log("Dashboard loading completed....");

function func1() {
    console.log("func1 execution started....");
    console.log("func1 execution completed....");
}
function func2() {
    console.log("func2 execution started....");
    console.log("func2 execution completed....");
}   
function func3() {
    console.log("func3 execution started....");
    console.log("func3 execution completed....");
}
function func4() {
    console.log("func4 execution started....");
    console.log("func4 execution completed....");
}

func1();
setTimeout(func2, 5000); // Schedule func2 to run after the current call stack is clear
setTimeout(func3, 2000); // Schedule func3 to run after the current call stack is clear
func4();


//timeout and interval
function func5() {
    console.log("fetching data from server....");
}
let intervalId = setInterval(func5, 2000); // Schedule func5 to run every 2 seconds
setTimeout(() => {
    clearInterval(intervalId); // Stop the interval after 10 seconds            
}, 10000);
