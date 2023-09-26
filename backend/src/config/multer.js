const multer = require('multer');
const fs = require('fs');
const path = require('path');

const _baseStorage = "storage";

const _mimeTypeFilter = function (mimes) {
    return function (req, file, cb) {
        if (mimes.some((m) => m === file.mimeType?.toLowerCase()))
            return cb(null, true);
        if (
            mimes
                .map((m) => m.substring(m.indexOf("/") + 1))
                .some((ext) => "." + ext === path.extname(file.originalname).toLowerCase())
        )
            return cb(null, true);

        return cb(null, false);
    };
};

const rename = function (file, name) {
    let newPath = name + path.extname(file.path);
    fs.renameSync(file.path, path.join(path.dirname(file.path), newPath));
    return newPath;
};

module.exports = {
    rename: rename
};