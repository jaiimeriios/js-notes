const forma = document.getElementById('transaction-form');

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    let description = document.getElementById('trasaction-description');
    let title = document.getElementById('transaction-title');
    let transaction = {
        transactionDescription: description.value,
        transactionTitle: title.value,
    };
    transactionJSON = JSON.stringify(transaction);

    // reset form values
    description.value = '';
    title.value = '';

    fetch('http://localhost:666/transactions', {
        method: 'post',
        body: transactionJSON,
    });

    getDataTodos();
});

const getDataTodos = async () => {
    const response = await fetch('http://localhost:666/transactions');
    const data = await response.json();
    parseData(data);
};

const parseData = (data) => {
    const content = document.getElementById('content');

    const estosDatos = data.map((e, i) => {
        let template = `
        <div class="mt-3" id="section-${i}">
            <h3>${e.transactionTitle}</h3>
            <h4>${e.transactionDescription}</h4>
        </div>`;
        return template
    });

    content.innerHTML = estosDatos.join('')
};

getDataTodos();
