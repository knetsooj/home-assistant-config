const urlMetadata = require('url-metadata');

const onMessage = async (msg) => {
        return urlMetadata(msg.payload);
}
module.exports = {
        onMessage: onMessage
}