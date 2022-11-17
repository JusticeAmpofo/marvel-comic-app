const MD5 = require('crypto-js/md5')

const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString()
}

module.exports = { getHash }