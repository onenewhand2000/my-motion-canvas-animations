import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Pointer } from "../../../components/Pointer";
import { YouTubeSearchBar } from "../../../components/YouTubeSearchBar";

export default makeScene2D(function* (view) {
    let ref = createRef<YouTubeSearchBar>();
    view.add(<YouTubeSearchBar ref={ref} />);
    view.add(<Pointer />);

    yield* ref().type("LLLLLLLLLLLLLLLLLLLLLLLL");

    yield* waitFor(5);
});
