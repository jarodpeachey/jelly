import React, { useEffect } from "react";

export default function JotForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://form.jotform.com/jsform/253618514085156";
        script.type = "text/javascript";
        script.async = true;
        document.getElementById('jotform-wrapper').appendChild(script);

        return () => {
            document.getElementById('jotform-wrapper').removeChild(script);
        };
    }, []);

    return <div id="jotform-container" />;
}
