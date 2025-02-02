import MenuItem from "./menu-item";
import PropTypes from "prop-types"

export default function MenuList({list=[]}) {
    
    return (
        <ul className="menulist-container">
            {
                list && list.length ?
                list.map((listItem) => <MenuItem key={listItem.id || listItem.label} item={listItem} />) 
                : null
            }
        </ul>
    )
}

MenuList.propTypes = {
    list : PropTypes.array
}