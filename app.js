
const baseUrl = 'http://localhost:3000/results'
document.addEventListener('DOMContentLoaded',()=>{
    fetch(baseUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
    . catch(error => console.log(error))
})
    
