import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { YouTubeSearchBar } from "../../../components/YouTubeSearchBar";

export default makeScene2D(function* (view) {
    let ref = createRef<YouTubeSearchBar>();
    view.add(<YouTubeSearchBar ref={ref} height={100} width={1000} />);
    // view.add(<Pointer />);

    yield* ref().type("新手去哪了？");

    yield* waitFor(5);
});
 