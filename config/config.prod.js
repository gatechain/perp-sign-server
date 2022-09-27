'use strict';

const path = require('path')
const filePath = path.join(__dirname, '../logs/prod')

module.exports = () => {
    const config = {};

    config.cluster = {
        listen: {
            port: 3000,
            hostname: '0.0.0.0',
        }
    };
    config.logger = {
        level: 'INFO',
        dir: filePath
    };
    config.perpContract = {
        85: {
            GateChain: '0xCf8751cD1346149030Eca079EFBf8a73BEd45abc',
        }
    }
    return config;
};