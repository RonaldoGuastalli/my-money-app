/* 
    wrapper - do admin-lte
    <Header /> -- componente header.jsx
    <SideBar /> -- instancia do componente sidebar.jsx que faz referencia ao componente menu.jsx
*/

import React from 'react'

import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <h1>Conteudo</h1>
        </div>
        <Footer />
    </div>
)