# Light Scheduler IoT Dashboard
![image](https://github.com/user-attachments/assets/06191da5-ad8f-4ea9-92c3-611841097ab5)


This project implements a web-based IoT dashboard to schedule a light using WebSocket and MQTT communication. The frontend allows users to set ON and OFF times, which are sent to a WebSocket server, published to an MQTT broker, and processed by a subscriber that sends commands to an Arduino via serial.
Features

    Frontend: HTML/CSS/JS interface for scheduling light ON/OFF times.

    WebSocket Server: Receives schedules and publishes to MQTT using mosquitto_pub.

    MQTT Subscriber: Subscribes to MQTT topic and sends '1' (ON) or '0' (OFF) to Arduino via serial.

    Arduino: Pre-programmed to act on serial input to control a relay.

Tech Stack

    Frontend: HTML, CSS, JavaScript

    Backend: Python (websockets, paho-mqtt, pyserial)

    MQTT: Mosquitto (mosquitto_pub, mosquitto_sub)

    Hardware: Arduino UNO

Prerequisites

    Python 3.8+

    Mosquitto MQTT broker installed and running

    Arduino UNO connected via USB

    Required Python libraries:
    

    pip install websockets paho-mqtt pyserial

Setup Instructions

    Clone the repository:
    

    git clone <your-repo-url>
    cd light-scheduler

    Install dependencies:
   
    pip install -r requirements.txt

    (Create requirements.txt with: websockets, paho-mqtt, pyserial)

    Start Mosquitto broker:
    

    mosquitto

    Update serial port:

        In subscriber.py, update SERIAL_PORT to match your Arduino's port (e.g., /dev/ttyACM0 or COM3).

    Run the WebSocket server:
  

    python server.py

    Run the MQTT subscriber:
  

    python subscriber.py

    Serve the frontend:

        Use a local server (e.g., Python's http.server):
        

        python -m http.server 8000

        Open http://localhost:8000 in a browser.

Usage

    Open the web interface in a browser.

    Select ON and OFF times for the light.

    Click "Submit Schedule".

    The schedule is sent via WebSocket, published to MQTT, and processed by the subscriber, which sends '1' or '0' to the Arduino based on the current time.

Demo

![image](https://github.com/user-attachments/assets/e7014255-94e0-4937-bffa-4e8a67096a37)


    Ensure the Arduino is programmed to read serial input ('1' for ON, '0' for OFF).

    The subscriber compares the current time with the schedule to send commands.

    If the Mosquitto broker is not on localhost, update MQTT_BROKER in subscriber.py and the mosquitto_pub command in server.py.

