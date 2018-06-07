/* 
    wrapper - do admin-lte
    <Header /> -- componente header.jsx
    <SideBar /> -- instancia do componente sidebar.jsx que faz referencia ao componente menu.jsx
    <Routes /> -- insere as rotas entre o header e footer
*/

import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'


export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>
)