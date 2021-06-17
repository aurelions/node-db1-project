
const accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  if(!req.body.name || !req.body.budget) {
    return res.status(400).json({message: 'Name and Budget field required'})
  }else if(typeof req.body.budget !== "string"){
    return res.status(400).json({message: 'Name of account should return a STRING'})
  }else if(typeof req.body.budget !== 'number'){
    return res.status(400).json({message: 'Budget must be a NUMBER'})
  }else if(req.body.budget < 0) {
    return res.status(400).json({message: "Budget can't be a negative NUMBER"})
  }
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  accounts.getAll()
    .then(accounts => {
      if(accounts.find({
        username: req.body.name.trim()
      })) {
        return res.status(400).json({message: 'username taken'})
      }
      next()
    })

}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  accounts.getById(req.params.id)
    .then(account => {
      if(account){
        req.account = account
        next()
      }else{
        res.status(404).json({message: 'could not find'})
      }
    })
    .catch(next)
}
