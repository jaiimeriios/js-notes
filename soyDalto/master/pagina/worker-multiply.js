onmessage = function (e) {
    console.log(e.data);
    console.log('1 Worker: Message received from main script');
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
        postMessage('2 Please write two numbers');
    } else {
        const workerResult = 'Result: ' + result;
        console.log('3 Worker: Posting message back to main script');
        postMessage(workerResult);
    }
}