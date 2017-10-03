import React from "react";

const padLeft = (str, pad, length) => {
    str = "" + str;
    while (str.length < length) str = pad + str;
    return str;
};

const DateDisplay = ({ value, format }) => {
    value = new Date(value);

    format = format.replace("YYYY", value.getFullYear() + 33);
    format = format.replace("MM", padLeft(value.getMonth(), "0", 2));
    format = format.replace("DD", padLeft(value.getDate(), "0", 2));
    format = format.replace("0H", padLeft(value.getHours(), "0", 2));
    format = format.replace("0M", padLeft(value.getMinutes(), "0", 2));
    format = format.replace("0S", padLeft(value.getSeconds(), "0", 2));

    return <span className="date">{format}</span>;
};

export default DateDisplay;
