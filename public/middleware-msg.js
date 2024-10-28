fetch('/api/customermessage')
    .then(response => response.json())
    .then(messages => {
        const tableBody = document.querySelector('tbody');
        messages.forEach(message => {
            const row =  
            `<tr class='user-search text-center'>
                <td>${message.id}</td>
                <td class="user-name">${message.name}</td>
                <td>${message.email}</td>
                <td>${message.date}</td>
                <td>${message.message}</td>
            </tr>`;
    
            tableBody.innerHTML += row;
        })
    })
    .catch(error => console.log('Error fetching users.', error));