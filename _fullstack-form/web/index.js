const forma = document.getElementById('transaction-form');

forma.addEventListener('submit', (e) => {
    e.preventDefault();
    let description = document.getElementById('trasaction-description');
    let price = document.getElementById('transaction-price');
    let transaction = {
        transactionDescription: description.value,
        transactionPrice: price.value,
    };
    transactionJSON = JSON.stringify(transaction);

    // reset form values
    description.value = '';
    price.value = '';

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

    const estosDatos = data.map((e) => {
        let template = `
        <div class="mt-3">
            <h3>${e.transactionDescription} <span>${e.transactionPrice}</span></h3>
        </div>`;
        return template
    });

    content.innerHTML = estosDatos.join('')
};

getDataTodos();
