
// Promises are used to prevent callback hell

const myPromise = new Promise((resolve, reject) => {

    // Resolve when successful - returns I have succeeded
    setTimeout(() => {
        resolve("I have succeeded")
    }, 1000)

    // Reject when unsuccessful
})

// To run javascript using node: node index.js

// When we make an api call we dont know if its gonna work 100% of the time so we use promises to throw you nack an error if it doesnt work


// .then can only be called on a resolved promise
// 
.then(value => console.log(value + '!!!'))

// New resolved promise
.then(newValue => console.log(newValue))

.catch(rejectValue => console.log(rejectValue))

