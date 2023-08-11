import React, { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);

        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
        <button
            onClick={topFunction}
            id="myBtn"
            title="Go to top"
            className="scroll-btn"
            style={{
                display: showButton ? "block" : "none",
            }}
        >
            <i className="material-icons">arrow_upward</i>
        </button>
    );
};
