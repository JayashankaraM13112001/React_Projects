import PropTypes from 'prop-types'
import MenuList from './menu-list'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { useState } from 'react'

export default function MenuItem({ item }) {
    
    const [currentChildren, setCurrentChildren] = useState({})

    const handleToggleChildren = (currentLabel) => {
        setCurrentChildren({ ...currentChildren,[currentLabel] : !currentChildren[currentLabel]} )
    }
    console.log(currentChildren)
    
    return (
        <li>
            <div className='menu-item'>
            <p>{item.label}</p>
                {
                    item.children && item.children.length && (
                        <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            currentChildren[item.label] ? <FaMinus color='#fff' size={20}/> : <FaPlus color='#fff' size={20}/>        
                        }   
                        </span>
                    )
                }
            </div>
            {
                item.children && item.children.length > 0 && currentChildren[item.label] && <MenuList list={item.children} />
            }
        </li>
    )
}

MenuItem.propTypes = {
    item : PropTypes.object
}