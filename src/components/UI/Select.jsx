import react from "react";

export const Select = ({options, defaultValue, value, onChange}) => {
    return(
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option>{defaultValue}</option>
            {options.map(option =>
                <option key={option} value = {option}>
                    {option}
                </option>
            )}
        </select>
    )
}