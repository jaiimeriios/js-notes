const forma = document.getElementById('todo-form');

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    let description = document.getElementById('trasaction-description');
    let title = document.getElementById('todo-title');
    let todos = {
        todoDescription: description.value,
        todoTitle: title.value,
    };
    todoJSON = JSON.stringify(todos);

    // reset form values
    description.value = '';
    title.value = '';

    fetch('http://localhost:666/todos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: todoJSON,
    });

    getDataTodos();
});

const getDataTodos = async () => {
    const response = await fetch('http://localhost:666/todos');
    const data = await response.json();
    parseData(data);
};

const parseData = (data) => {
    const content = document.getElementById('content');

    const estosDatos = data.map((e, i) => {
        let template = `
        <div class="mt-3" id="${i}">
            <h3>${e.todoTitle}</h3>
            <h4>${e.todoDescription}</h4>
            <button class="delete-section btn btn-xs btn-danger">Delete</button>
        </div>`;
        return template;
    });

    content.innerHTML = estosDatos.join('');

    // Delete
    let deleteButtons = document.querySelectorAll('.delete-section');
    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            // const id = btn.parentElement.id
            // const filteredTodos = data.filter((todo) => {
            //     return todo.todoTitle !== data[id].todoTitle
            // })

            // filteredTodosJSON = JSON.stringify(filteredTodos);
            
            // console.log(filteredTodos)
            // console.log(filteredTodosJSON)

            // fetch('http://localhost:666/todos', {
            //     method: 'DELETE',
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: filteredTodosJSON,
            // });
        })
    });
};

getDataTodos();
