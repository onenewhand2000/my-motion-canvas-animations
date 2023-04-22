import { makeProject } from "@motion-canvas/core";

import main from "./projects/the-nights/scenes/main?scene";

export default makeProject({
    audio: "./src/projects/the-nights/audios/the-nights.wav",
    name: "The Nights",
    scenes: [main],
});
