exports.handler = function(event, context, callback) {
    const secretContent = `
    <h3>Welcome to the super secret area</h3>
    Yada, Yada, <strong>Yada!</strong>
    `
    
    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.password === "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })

    }
}