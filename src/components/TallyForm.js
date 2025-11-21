import { useEffect } from "react";

export default function TallyForm({ embedUrl, height = 673, title = "Tally Form" }) {
    useEffect(() => {
        const d = document;
        const w = "https://tally.so/widgets/embed.js";

        const v = () => {
            if (typeof Tally !== "undefined") {
                Tally.loadEmbeds();
            } else {
                d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(e => {
                    e.src = e.dataset.tallySrc;
                });
            }
        };

        if (typeof Tally !== "undefined") {
            v();
        } else if (!d.querySelector(`script[src="${w}"]`)) {
            const s = d.createElement("script");
            s.src = w;
            s.onload = v;
            s.onerror = v;
            d.body.appendChild(s);
        }
    }, []);

    return <iframe data-tally-src={embedUrl} loading="lazy" width="100%" height={height} frameBorder="0" marginHeight="0" marginWidth="0" title={title} />;
}
