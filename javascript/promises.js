/*
let prm = new Promise((resolve, reject) => {
    console.log("Promise is being executor function...");
    reject("failure");
    //resolve("success");
});

prm
.then((result) => {
    console.log("Promise resolved with result: " + result);
})
.catch((error) => {
    console.log("Promise rejected with error: " + error);
});
*/


function step1() {
    return new Promise((resolve, reject) => {
        console.log("Step 1 execution started...");
        setTimeout(() => {
            console.log("Step 1 execution completed.");
            resolve("Step 1 result");
        }, 3000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        console.log("Step 2 execution started...");
        setTimeout(() => {
            console.log("Step 2 execution completed.");
            resolve("Step 2 result");
        }, 2000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        console.log("Step 3 execution started...");
        setTimeout(() => {
            console.log("Step 3 execution completed.");
            reject("Step 3 error");
        }, 1000);
    });
}

//promise chaining

step1()
    .then((result) => step2(result))
    .then((result) => step3(result))
    .then((result) => {
        console.log("all the steps completed ");
    })
    .catch((error) => {
        console.log("Error occurred: " + error);
    });

//asyn await

async function executeSteps() {
    try {
        const result1 = await step1();
        const result2 = await step2(result1);
        const result3 = await step3(result2);
        console.log("all the steps completed ");
    } catch (error) {
        console.log("Error occurred: " + error);
    }
}
executeSteps();