import { Img } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, chain, loop, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import the_nights from "../images/Avicii_Nights_Artwork.png";
import sans_undertale from "../images/Sans_undertale.jpg";

export default makeScene2D(function* (view) {
    let the_nights_ref = createRef<Img>();
    let sans_undertale_ref = createRef<Img>();
    view.add(<Img src={the_nights} ref={the_nights_ref} />);
    view.add(<Img src={sans_undertale} ref={sans_undertale_ref} scale={0} />);

    yield* all(
        chain(
            loop(8, function* () {
                yield* the_nights_ref().scale(1.5, 1).to(1, 1);
            }),
            loop(14, function* () {
                yield* the_nights_ref().scale(1.5, 0.5).to(1, 0.5);
            }),
            waitFor(1),
            loop(30, function* () {
                yield* all(
                    the_nights_ref().scale(1.5, 0.25).to(1, 0.25),
                    sans_undertale_ref().scale(1, 0.25).to(0, 0.25)
                );
            }),
            the_nights_ref().opacity(0, 5)
        ),
        the_nights_ref().rotation(720, 47),
        sans_undertale_ref().rotation(18000, 47)
    );
});
