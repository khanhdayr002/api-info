exports.name = '/video/gai';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./cache/gai.json');
        res.jsonp({
            url: image,
            author: ''
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}