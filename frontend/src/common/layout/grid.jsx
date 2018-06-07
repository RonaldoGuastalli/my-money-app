import React, { Component } from 'react';

export default class Grid extends Component {

    //monta as classes css atravez de um number ('12 5 4') - resultado col-xs-12, col-xs-5 ...
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        if (cols[0]) classes += `col-xs-${cols[0]}`
        if (cols[1]) classes += ` col-sm-${cols[1]}`
        if (cols[2]) classes += ` col-md-${cols[2]}`
        if (cols[3]) classes += ` col-lg-${cols[3]}`
        return classes
    }

    //render obrigatório
    render() {
        const gridClasses = this.toCssClasses(this.props.cols || '12')

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }

    /* 
        1) dashboard.jsx usa o componente - ValueBox - passando os parâmetros paras seu filho (ValueBox)
            <ValueBox cols = '12 4' />

        2) valueBox.jsx usa o componente Grid
            <Grid cols = {props.cols}> </Grid>
                *onde: props.cols -> vem do "pai"
        
        3) grid.jsx e a filha no nível mais baixo da relação recebendo parametros dos componetes "pais-ValueBox" e "avós-Dashboard"
            <div className={gridClasses}>{this.props.children}</div>
                *onde:  gridClasses é o metodo -> gridClasses = this.toCssClasses(this.props.cols || '12') recebe o parâmetro e faz o serviço
                        {this.props.children} -> retorno do renderizado entre as div (col-xs-12 e col-sm-4).
    */
    


}