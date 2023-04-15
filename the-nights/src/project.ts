import { makeProject } from "@motion-canvas/core";

import main from "./scenes/main?scene";

export default makeProject({
    audio: "./public/the-nights.wav",
    scenes: [main],
});
