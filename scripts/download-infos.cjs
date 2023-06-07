// @ts-check

const fs = require("node:fs");
const { Readable } = require("node:stream");
const path = require("path");
const { glob } = require("glob");
const axios = require("axios").default;

glob("**/*.info").then((v) => {
    v.forEach((p) => {
        fs.readFile(p, (e, v) => {
            axios.get(v.toString(), { responseType: "stream" }).then((r) => {
                const writeStream = fs.createWriteStream(
                    path.join(path.dirname(p), path.basename(p, ".info"))
                );
                /** @type { Readable } */
                let stream = r.data;
                stream.pipe(writeStream);
            });
        });
    });
});
