

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    users.forEach(user => {
        const row = document.createElement('tr')
        
    });
})