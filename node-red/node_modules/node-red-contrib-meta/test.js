const logic = require('./logic.js');
(async () => {
    var data = await logic.onMessage({
        payload: 'https://apple.com'
    });
    console.log(data);
})().catch(err => console.error)