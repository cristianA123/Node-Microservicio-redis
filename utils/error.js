const error = (message, code) => {
    let e = new Error(message);
    console.log(e)
    if (code) {
        e.statusCode = code;
    }
    return e;
}

module.exports = {
    error,
};