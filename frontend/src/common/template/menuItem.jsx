/* 
    {props.icon}, {props.label} -- recebe do componente pai esta props, por exemplo Dashboard e dashboard
        em <MenuItem path='#/' label='Dashboard' icon='dashboard' />
*/

import React from 'react'

export default props => (
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
    </li>
)