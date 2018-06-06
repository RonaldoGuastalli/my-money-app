/* 
    wrapper - do admin-lte
    <Header /> -- componente header.jsx
    <SideBar /> -- instancia do componente sidebar.jsx que faz referencia ao componente menu.jsx
*/

import React from 'react'

import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
    </div>
)