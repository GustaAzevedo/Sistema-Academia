// create
exports.post = function (req, res) {
    // req.query 
    // req.body

    const keys = Object.keys(req.body)

    for (key of keys) {
        //req.body.key == ""
        if (req.body[key] == "") {
            return res.send("Please, fill all fills")
        }
    }

    return res.send(req.body)
}

//update

//delete