const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const crypto = require('crypto');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect('mongodb://127.0.0.1:27017/encrypted_timeseries_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const MessageSchema = new mongoose.Schema({
    name: String,
    origin: String,
    destination: String,
    secret_key: String,
    timestamp: { type: Date, default: Date.now },
});

const MessageModel = mongoose.model('Message', MessageSchema);

io.on('connection', (socket) => {
    console.log('A user connected to database');

    socket.on('encryptedMessage', async (encryptedMessage) => {
        // Decrypt and validate the message

        // Save to MongoDB

        // Emit to frontend

    });
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});
