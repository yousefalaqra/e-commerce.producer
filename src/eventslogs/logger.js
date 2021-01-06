// create a rolling file logger based on date/time that fires process events
const opts = {
    errorEventName:'error',
        logDirectory:'./generallogs', // NOTE: folder must exist and be writable...
        fileNamePattern:'roll-<DATE>.log',
        dateFormat:'YYYY.MM.DD'
};
const log = require('simple-node-logger').createRollingFileLogger( opts );

export const info = (event, dataToLog) => {
    log.info(event, dataToLog);
}