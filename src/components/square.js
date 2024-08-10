import React, {useState} from "react";

const Squares = (props) => {
    // const [value, setValue] = useState(null);

    // return <button onClick={() => setValue("X")} className="square">
    return <button onClick={props.onClickEvent} className={props.class}>
        {props.value}
    </button>
}

export default Squares;