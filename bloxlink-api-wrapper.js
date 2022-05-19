async function getBloxlinkUser(targetId){

    const axios = require('axios')

    const user = await axios.get(`https://api.blox.link/v1/user/${targetId}`)

    return user.data;
}

module.exports = {
    getBloxlinkUser: getBloxlinkUser
}