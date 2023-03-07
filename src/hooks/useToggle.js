import { useState } from "react"

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(valueToggle) {
        setValue(currentValue =>
            typeof valueToggle === "boolean" ? valueToggle : !currentValue
        )
    }

    return [value, toggleValue]
}
