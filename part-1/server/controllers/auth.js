const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      console.log(users)
      
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passwordHash)
        
        if(existing){
          // users[i].username === username && users[i].password === password
          // users[i].password.push(password)

          let usersToReturn = {...users[i]}
          delete usersToReturn.passwordHash
          res.status(200).send(users[i])
          
        }else {
          res.status(400).send("User not found.")
        }
      }
    },
    
    
    register: (req, res) => {
      const {firstName, lastName, username, email, password} = req.body
      
      let salt = bcrypt.genSaltSync(5)
      let passwordHash = bcrypt.hashSync(password, salt)
      console.log(password, passwordHash)
      
      let user = {
        firstName,
        lastName, 
        username,
        email,
        passwordHash

      }
        console.log('Registering User')
        console.log(user)
        users.push(user)
        res.status(200).send(req.body)
    }
}