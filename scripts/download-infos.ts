// @ts-nocheck
import fs from "node:fs";
import { Readable } from "node:stream";
import path from "node:path";
import { glob } from "npm:glob";
import axios from "npm:axios";

glob("**/*.info").then((v) => {
    v.forEach((p) => {
        fs.readFile(p, (e, v) => {
            axios.get(v.toString(), { responseType: "stream" }).then((r) => {
                const writeStream = fs.createWriteStream(
                    path.join(path.dirname(p), path.basename(p, ".info"))
                );
                let stream: Readable = r.data;
                stream.pipe(writeStream);
            });
        });
    });
});
