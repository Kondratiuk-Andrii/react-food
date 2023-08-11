import { useState } from "react";

export const Search = ({ cb = Function.prototype }, props) => {
    const [value, setValue] = useState("");

    const handleKey = (event) => {
        event.key === "Enter" && handleSubmit();
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    className="search"
                    placeholder="Put here the name"
                    onKeyDown={handleKey}
                    onChange={handleChange}
                    value={value}
                />
                <button onClick={handleSubmit} className="btn">
                    Search
                </button>
            </div>
        </div>
    );
};
