const Client = require('./Client')
const Pet = require('./Pet')
const Turn = require('./Turn')

Client.hasMany(Pet)
Client.hasMany(Turn)
Pet.belongsTo(Client)
Turn.belongsTo(Client)


module.exports = {
    Client,
    Pet,
    Turn
}