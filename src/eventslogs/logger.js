// create a rolling file logger based on date/time that fires process events
const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:'roll-2021.01.06.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },
log = SimpleNodeLogger.createSimpleLogger( opts );

module.exports = {
  info: (event, dataToLog) => {
    log.info(event, dataToLog);
  },
};
