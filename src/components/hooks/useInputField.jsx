import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);
    function handleFieldChange(event){
        setFieldValue(event.target.value);
    }
    return [fieldValue, handleFieldChange];
}

export default useInputField;