// app.js
document.getElementById('fetchButton').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('/person/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        displayResult('Error fetching data. Check the console for details.');
    }
}

function displayResult(data) {
    const resultElement = document.getElementById('result');

    if (typeof data === 'object') {
        // If the data is an object, stringify it for display
        resultElement.textContent = JSON.stringify(data, null, 2);
    } else {
        // If the data is a string (e.g., an error message), display it directly
        resultElement.textContent = data;
    }
}
