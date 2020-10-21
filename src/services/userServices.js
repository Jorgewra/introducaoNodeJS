var { User } = require("../../models/index");
module.exports =  {
    save : (req, res) =>{
        try {
            User.create(req.body).then(respDB =>{
                res.json(respDB)
            }).catch(error=>{
                console.log(error)
                res.status(400).json(error)
            });
    
        } catch (error) {
            res.status(500).send("Error")
        }
    },
}
