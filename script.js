const ws = new WebSocket('ws://localhost:8765');
const status = document.getElementById('status');

ws.onopen = () => {
    status.textContent = 'Status: Connected to server';
};

ws.onmessage = (event) => {
    status.textContent = `Status: ${event.data}`;
};

ws.onclose = () => {
    status.textContent = 'Status: Disconnected from server';
};

function submitSchedule() {
    const onTime = document.getElementById('on-time').value;
    const offTime = document.getElementById('off-time').value;
    
    if (!onTime || !offTime) {
        status.textContent = 'Status: Please select both ON and OFF times';
        return;
    }

    const schedule = { onTime, offTime };
    ws.send(JSON.stringify(schedule));
    status.textContent = 'Status: Schedule sent';
}