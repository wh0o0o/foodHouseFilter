function MenuItem({onChangeSelectedCategory, item}) {

    return (
        <div className="menu-item-object" onClick={() => onChangeSelectedCategory(item.type)}>
            <div className="menu-item" id={item.active}>
                <img src={item.src} alt={item.text}/>
                <p className="menu-item__name">{item.name}</p>
            </div>
        </div>
    )

}

export default MenuItem