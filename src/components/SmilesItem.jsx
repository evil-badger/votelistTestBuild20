const SmilesItem = ({id,url,vote,title,onUpdate}) => {
    console.log(id)
    return (
        <div className="SmilesItem">
            <img src={url} alt={title}/>
            <p>{title}</p>
            <button onClick={()=>onUpdate(id)}>+</button>
            <p>{vote}</p>
        </div>
        
    )
}

export default SmilesItem 