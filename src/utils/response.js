const responseSuccesSingle = (data) => {
    const res = {
        success  : true,
        data : data
    }
    return res
}

const responseSuccesList = (data) => {
    const res = {
        success  : true,
        data : data
    }
    return res
}


const resSuccessNotFound = () => {
    const res = {
        success  : true,
        message : "Data not Found"
    }
    return res
}


const resFailNotFound = (msg) => {
    const res = {
        success  : false,
        message : msg
    }
    return res
}


const resSuccess = (msg) => {
    const res = {
        success  : true,
        message : msg
    }
    return res
}

module.exports = {
    resSuccessNotFound,
    responseSuccesList,
    responseSuccesSingle,
    resSuccess,
    resFailNotFound
}