/* 
    props.icon, props.label - recebe do componente pai atravez da tag <MenuTree />   
    props.children -- filhos deste menuTree
*/

import React from 'react'

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <i className='fa fa-angle-left pull-right-container'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)