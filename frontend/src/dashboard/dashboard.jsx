/* 
    - header do dashboard instaciando o componente ContentHeader (<ContentHeader/>),
        passando os parametros title e small atraves de props 
    - conteudo propriamente dito atravez da instancia do componente Content (<Content></Content>)
    - Este componentes (Content) é passado para o ContentHeader como props.children. 
*/

import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard