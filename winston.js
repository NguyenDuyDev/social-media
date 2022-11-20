const winston = require('winston');

const appLevel = {
    levels: {
        emerg: 0,
        alert: 1,
        crit: 2,
        error: 3,
        warning: 4,
        notice: 5,
        info: 6,
        debug: 7
    },
    colors: {
        emerg: '',
        alert: '',
        crit: '',
        error: 'red',
        warning: 'yellow',
        notice: '',
        info: 'green',
        debug: ''
    }
}

// const {Writable} = require('stream')
// const stream = new Writable({
//     objectMode: false,
//     write: raw => console.log('stream msg>>>', raw.toString()) // phat trực tiếp log tại đây
// })

// const http = require('http')
// http.createServer((req, res) => {
//     const arr = []
//     req
//         .on('data', chunk => arr.push(chunk))
//         .on('end', () => {
//             const msg = Buffer.concat(arr).toString()
//             console.log('http msg', msg)// push log qua một hệ thông khác http://localhost:8080
//             res.end(msg)
//         })
// }).listen(8080)

const path = require('path');
module.exports = winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json(),
        winston.format.colorize(),
        winston.format.printf(
            log => {
                // nếu log là error hiển thị stack trace còn không hiển thị message của log 
                if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
                return `[${log.timestamp}] [${log.level}] ${log.message}`;
            },
        ),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            level: 'error',
            filename: path.join(__dirname, 'app.log'),
            maxsize: 5242880,
        }),
        new winston.transports.Http({host: 'localhost', port: 8080}),
        // new winston.transports.Stream({ stream })
    ],
    exitOnError: false
})