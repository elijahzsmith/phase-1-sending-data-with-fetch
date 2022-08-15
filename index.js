// Add your code here
const submitData = (userName, userEmail) => {
    return fetch("http://localhost:3000/users", {
        method: "POST", // Post request to send data
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        }),
    }) .then(response => {
        return response.json()
    }) 
    .then(data => document.body.append(data.id))
    .catch(error => document.body.append(error.message)) 
}



// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// }) .then(response => {
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log("ERROR")
// );

