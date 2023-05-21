import { NodeProps, Rect, Txt } from "@motion-canvas/2d/lib/components";
import { createSignal, SimpleSignal } from "@motion-canvas/core/lib/signals";
import "../styles/NotoSans.css";

interface YouTubeSearchBarProps extends NodeProps {
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
            layout: true,
            lineWidth: 10,
            minWidth: 1000,
            radius: 100,
            stroke: "#ffffff",
        });

        this.text(props.text);

        this.add(
            <>
                <Txt fill="#ffffff" grow={1} text={() => this.text()} justifyContent="start" />
            </>
        );
    }

    public *type(string: string) {
        yield* this.text(string, string.length / 5);
    }
}
