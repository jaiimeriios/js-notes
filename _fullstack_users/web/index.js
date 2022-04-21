const showData = (data) => {
    const content = document.getElementById('content');
    const userData = data.map((e) => {
        let template = `
        <div class="mt-3">
            <h3>${e.firstName}</h3>
            <h4>${e.lastName}</h4>
            <p>${e.age}</p>
            <button data-id="${e.id}" class="edit-button btn btn-xs btn-primary">Edit</button>
            <button data-id="${e.id}" class="save-button btn btn-xs btn-success d-none">Save</button>
            <button data-id="${e.id}" class="delete-button btn btn-xs btn-danger">Delete</button>
        </div>`;
        return template;
    });
    content.innerHTML = userData.join('');
};

const deleteUser = (data) => {
    document.querySelectorAll('.delete-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const userId = e.target.dataset.id;

            const filteredUser = data.filter((user) => {
                return userId === user.id;
            });

            console.log(filteredUser[0].id);

            fetch(`http://localhost:666/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filteredUser),
            });

            setTimeout(() => {
                getData();
            }, 100);
        });
    });
};

// const editUser = (data) => {
//     document.querySelectorAll('.edit-button').forEach((btn) => {
//         btn.addEventListener('click', (e) => {


//             e.target.parentNode.children[0].contentEditable = true
//             e.target.parentNode.children[1].contentEditable = true
//             e.target.parentNode.children[2].contentEditable = true


//             const successBtn = e.target.nextElementSibling

//             e.target.classList.add('d-none')
//             successBtn.classList.remove('d-none')
//             successBtn.classList.add('d-auto')


//             // e.target.classList.add('d-none')
//             // e.target.outerHTML.classList.add('d-block')
            

//             // const userId = e.target.dataset.id;

//             // const filteredUser = data.filter((user) => {
//             //     return userId === user.id;
//             // });

//             // console.log(filteredUser[0].id);

//             // fetch(`http://localhost:666/users/${userId}`, {
//             //     method: 'PUT',
//             //     headers: {
//             //         'Content-Type': 'application/json',
//             //     },
//             //     body: JSON.stringify(filteredUser),
//             // });

//             // setTimeout(() => {
//             //     getData();
//             // }, 100);
//         });
//     });
// };

document.getElementById('users-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = document.getElementById('user-first-name');
    let lastName = document.getElementById('user-last-name');
    let age = document.getElementById('user-age');

    let users = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
    };
    todoJSON = JSON.stringify(users);

    firstName.value = '';
    lastName.value = '';
    age.value = '';

    fetch('http://localhost:666/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: todoJSON,
    });

    setTimeout(() => {
        getData();
    }, 100);
});




const getData = async () => {
    const response = await fetch('http://localhost:666/users');
    const data = await response.json();
    showData(data);
    deleteUser(data);
    editUser(data)
};

getData();