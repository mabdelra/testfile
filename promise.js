
// Promises are used to prevent callback hell

// const myPromise = new Promise((resolve, reject) => {

//     // Resolve when successful - returns I have succeeded
//     setTimeout(() => {
//         // resolve("I have succeeded")
//     }, 1000)

//     // Reject when unsuccessful
// })

// To run javascript using node: node index.js

// When we make an api call we dont know if its gonna work 100% of the time so we use promises to throw you nack an error if it doesnt work


// .then can only be called on a resolved promise
// // 
// .then(value => console.log(value + '!!!'))

// // New resolved promise
// .then(newValue => console.log(newValue))

// .catch(rejectValue => console.log(rejectValue))


// Async await is a way to write asynchronous code that looks synchronous

// fetch('https://jsonplaceholder.typicode.com/users/')
// // Response.json gives us back a promise
//  .then(response => response.json())
// //  Array of users
//  .then(users => {
//     const firstUser = users[0]
//     // console.log(firstUser);

//     // Returns posts for the first user
//     return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id)
//  })

//  .then(response => response.json())
//  .then(posts => console.log(posts));

// To make this code look synchronous we can use async await
// To instantiate an async function we use the async keyword


// CODE IS NOW SYNCHRONOUS

const myAsyncFunction = async () => {


    // .catch is used to catch any errors that may occur
    // With async await we can use try catch blocks to catch errors

    try{
        // Await pauses the execution of the function until the promise is resolved 
        // Code down here will wait until fetch comes back with a value

        // userResponse is the response from the fetch (awaited promise)
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/');

        // users is the json data from the response
        const users = await userResponse.json()

        // secondUser is the second user in the array from the json data
        const secondUser = users[1];
        console.log(secondUser);

        // postsResponse is the response from the fetch (awaited promise) and we pass in the second users id
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id)

        // posts is the json data from the response
        const posts = await postsResponse.json()
        console.log(posts);
        
    } catch(err) {
        console.log('there was an error')
    }
}

myAsyncFunction()



