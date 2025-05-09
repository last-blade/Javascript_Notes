//API fetch using async-await

async function fetchApi() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error)
    }
}

fetchApi();

// API fetch using promises (i.e., .then .catch)
fetch("https://jsonplaceholder.typicode.com/users")
.then((apiResponse) => {
    return apiResponse.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})