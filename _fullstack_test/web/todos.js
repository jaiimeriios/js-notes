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

            // console.log(filteredUser[0].id);

            fetch(`http://localhost:666/todos/${userId}`, {
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

document.getElementById('users-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = document.getElementById('user-first-name');
    let lastName = document.getElementById('user-last-name');
    let age = document.getElementById('user-age');

    if (firstName.value === '' || lastName === '' || age === '') {
        return
    }

    let users = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
    };
    todoJSON = JSON.stringify(users);

    firstName.value = '';
    lastName.value = '';
    age.value = '';

    fetch('http://localhost:666/todos', {
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

const editable = (e, isEditable) => {
    
};

// editable
const editUser = (data) => {
    document.querySelectorAll('.edit-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {

            if(e.target.classList === 'd-auto'){
                e.target.classList.remove('d-auto');
            }
            e.target.classList.add('d-none');
            e.target.nextElementSibling.classList.remove('d-none');
            e.target.nextElementSibling.classList.add('d-auto');

            e.target.parentNode.children[0].contentEditable = true;
            e.target.parentNode.children[1].contentEditable = true;
            e.target.parentNode.children[2].contentEditable = true;
            e.target.parentNode.children[0].classList.add('bg-white', 'text-dark', 'p-1');
            e.target.parentNode.children[1].classList.add('bg-white', 'text-dark', 'p-1');
            e.target.parentNode.children[2].classList.add('bg-white', 'text-dark', 'p-1');
        });
    });
};

const saveUser = (data) => {
    document.querySelectorAll('.save-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {

            e.target.classList.remove('d-auto');
            e.target.classList.add('d-none');
            e.target.previousElementSibling.classList.remove('d-none');
            e.target.previousElementSibling.classList.add('d-auto');

            e.target.parentNode.children[0].contentEditable = false;
            e.target.parentNode.children[1].contentEditable = false;
            e.target.parentNode.children[2].contentEditable = false;
            e.target.parentNode.children[0].classList.remove('bg-white', 'text-dark', 'p-1');
            e.target.parentNode.children[1].classList.remove('bg-white', 'text-dark', 'p-1');
            e.target.parentNode.children[2].classList.remove('bg-white', 'text-dark', 'p-1');

            let newFirstName = e.target.parentNode.children[0].innerText
            let newLastName = e.target.parentNode.children[1].innerText
            let newAge = e.target.parentNode.children[2].innerText



            const userId = e.target.dataset.id;
            const updatedUser = {
                firstName: newFirstName,
                lastName: newLastName,
                age: newAge
            }

            fetch(`http://localhost:666/todos/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            setTimeout(() => {
                getData();
            }, 100);
        });
    });
};

const getData = async () => {
    const response = await fetch('http://localhost:666/todos');
    const data = await response.json();
    showData(data);
    deleteUser(data);
    editUser(data);
    saveUser(data);
};

getData();