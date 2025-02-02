import MenuList from "./menu-list"
import PropTypes from "prop-types"
import './tree-view.css'


export default function TreeView({ menus = [] }) {
    
    return (
        <div className="treeview-container">
            <MenuList list={menus} />
        </div>
    )
}

TreeView.propTypes = {
    menus : PropTypes.array
}