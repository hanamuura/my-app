import react from "react";

export let CustomSelect = ({options, defaultValue, value, onChange}) => {

//for 2 options
    return(
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option>{defaultValue}</option>
            {options.map(option =>
                <option key={option.id} value = {option.data}>
                    {option.data}
                </option>
            )}
        </select>
    )
}