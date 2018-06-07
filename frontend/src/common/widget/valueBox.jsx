import React from 'react'
import Grid from "../layout/grid"

export default props => (

    <Grid cols={props.cols}>

        <div className={`small-box bg-${props.color}`}>

            <div className='inner'>
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>

            <div className='icon'>
                <i className={`fa fa-${props.icon}`}></i>
            </div>
            
        </div>

    </Grid>
)

/* 
    este componente são as caixas coloridas dentro do dashboard (credito, debito e total)
    {props.cols} -- é uma propriedade que a filha (Grid) vai retornar para cols
*/