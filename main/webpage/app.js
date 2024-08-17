/**
 * Add gobals here
 */


let outputStates = {
    OUT1: 0,
    OUT2: 0,
    OUT3: 0,
    OUT4: 0,
};


function toggleOUT(outNumber) {
    console.log(`Button OUT${outNumber} clicked`); // Add this line

    const outputKey = `OUT${outNumber}`;
    
    // Toggle the state (0 to 1 or 1 to 0)
    outputStates[outputKey] = outputStates[outputKey] === 0 ? 1 : 0;

    // Update button appearance (for example, change color)
    const button = document.getElementById(`out${outNumber}`);
    button.style.backgroundColor = outputStates[outputKey] ? "green" : "grey";

    // Create JSON object
    const jsonData = JSON.stringify(outputStates);

    // Send JSON to ESP32
    fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
