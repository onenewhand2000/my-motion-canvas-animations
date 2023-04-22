import { Img, RectProps } from "@motion-canvas/2d/lib/components";
import pointer from "../images/pointer.png";

interface PointerProps extends RectProps {}

export class Pointer extends Img {
    public constructor(props: PointerProps) {
        super({ scale: 3, smoothing: false, ...props, src: pointer });
    }
}
