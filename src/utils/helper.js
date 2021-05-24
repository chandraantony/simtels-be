const moment = require('moment')

const dateFormat = (date) => {
    return moment(date).format('DD-MM-YYYY')
}

module.exports = {
    dateFormat
}