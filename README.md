# SYOOK_TASK_ASSIGNMENT
# For frontend parts I have explain in different readme file here I have explain only backend part
<ul>
<li> Encrypted Time Series Project</li>

This project demonstrates a small backend application for generating, emitting, and processing an encrypted data stream over sockets. The data stream is decrypted, validated, and saved to a MongoDB database before being displayed in a real-time frontend application.

<li>Getting Started</li> 

These instructions will help you set up and run the project on your local machine for development and testing purposes.

<li>Prerequisites</li> 

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

<li>Installation</li> 

1. Clone the repository:

   ```bash
   git clone https://github.com/ezio-24/encrypted-timeseries-project.git


<li>Navigate to the project directory:</li> 
>cd encrypted-timeseries-project

<li>Install the backend and frontend dependencies:</li> 
>cd backend
>npm install

>cd ../frontend
>npm install


<li>Configuration</li> 
1.Open the config.js file in the root directory and replace 'your-encryption-key' with your actual encryption key.

2.Make sure your MongoDB server is running and accessible on localhost:27017.

<li> Running the Application</li>
1.Start the backend server:
>cd backend
>npm start

The backend server will start and listen on port 3000.

2.Start the frontend server:
>cd frontend
>npm start

The frontend development server will start and open a browser window with the application.

3.Generate encrypted messages:
The backend will periodically generate encrypted messages and emit them to the frontend. The frontend will display the received messages in real-time.

<li>Built With</li> 
<ul>
<li>Node.js - Backend server runtime</li>
<li>Express - Web application framework</li>
<li>Socket.io - Real-time communication library</li>
<li>MongoDB - Database for storing time-series data</li>
<li>React - Frontend library for building user interfaces</li>
</ul>

<li>Authors</li> 
<ul><li>Ahmad reza</li></ul>

</ul>


