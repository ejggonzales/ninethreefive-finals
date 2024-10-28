fetch('/api/customerlist')
    .then(response => response.json())
    .then(users=> {
        const tableBody = document.querySelector('tbody');
        users.forEach(user => {
            const row =  
            `<tr class='user-search'>
                <td>${user.id}</td>
                <td class="user-name">${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
            </tr>`;
    
            tableBody.innerHTML += row;
        })
    })
    .catch(error => console.log('Error fetching users.', error));