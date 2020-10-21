var { User } = require("../../models/index");
exports =  {
    save : (req, res) =>{
        try {
            User.create(req.body).then(res =>{
                res.json(res)
            }).catch(error=>{
                res.status(400).send(error)
            });
    
        } catch (error) {
            res.status(500).send("Error")
        }
    },
}
