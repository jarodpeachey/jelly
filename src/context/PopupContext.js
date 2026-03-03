import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext({ popupShown: false, setPopupShown: () => {} });

export const PopupProvider = ({ children }) => {
    const [popupShown, setPopupShownState] = useState(() => {
        if (typeof window !== "undefined") {
            return !!localStorage.getItem("exit-popup-shown");
        }
        return false;
    });

    const setPopupShown = () => {
        setPopupShownState(true);
        if (typeof window !== "undefined") {
            localStorage.setItem("exit-popup-shown", "true");
        }
    };

    return (
        <PopupContext.Provider value={{ popupShown, setPopupShown }}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => useContext(PopupContext);
