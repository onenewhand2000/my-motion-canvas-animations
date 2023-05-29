import { Img, Rect, RectProps, Txt } from "@motion-canvas/2d/lib/components";
import { SimpleSignal, createSignal } from "@motion-canvas/core/lib/signals";
import search from "../images/search.svg";
import "../styles/NotoSans.css";

interface YouTubeSearchBarProps extends RectProps {
    text?: string;
}

export class YouTubeSearchBar extends Rect {
    public readonly text: SimpleSignal<string> = createSignal<string>("", (from, to, value) => {
        return to.substring(0, Math.floor(to.length * value));
    });

    public constructor(props: YouTubeSearchBarProps) {
        super({
            alignItems: "start",
            fill: "#121212",
            height: 100,
            justifyContent: "center",
            layout: true,
            lineWidth: 5,
            radius: 5,
            stroke: "#ffffff",
            width: 1000,
            ...props,
        });

        this.text(props.text);

        this.add(
            <>
                <Img height={this.getHeight() * 0.8} src={search} width={this.getHeight() * 0.8} />
                <Txt fill="#ffffff" grow={1} text={() => this.text()} justifyContent="start" />
            </>
        );
    }

    public *type(string: string) {
        yield* this.text(string, string.length / 5);
    }
}
