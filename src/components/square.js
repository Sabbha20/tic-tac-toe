import React, {useState} from "react";

const Squares = (props) => {
    const [value, setValue] = useState(null);

    return <button onClick={() => setValue("X")} className="square">
        {value}
    </button>
}

export default Squares;