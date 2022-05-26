const express = require('express');
const bodyParser = require('body-parser'); // process json data
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const config = require('./config');
const fs = require('fs');
const socketio = require('socket.io');
const scenario = require('../scenario/scenario-service');

const imports = {
    express: express,
    bodyParser: bodyParser,
    cors: cors,
    morgan: morgan,
    config: config,
    multer: multer,
    fs: fs,
    socketio: socketio,
    scenario: scenario
};

module.exports = imports;
