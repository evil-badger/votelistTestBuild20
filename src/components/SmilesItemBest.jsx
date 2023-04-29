const SmilesItemBest = ({id,url,vote,title,onUpdate}) => {
    console.log(url)
    return (
        <div className="SmilesItem">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
        
    )
}

export default SmilesItemBest