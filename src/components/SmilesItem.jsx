const SmilesItem = (props) => {
    return (
        <div className="SmilesItem">
            <p>{props.title}</p>
            <button onClick={props.onClick}>{props.buttonName}</button>
            <p>{props.result}</p>
        </div>
    )
}

export default SmilesItem