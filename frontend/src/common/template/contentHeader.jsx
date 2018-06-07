/* 
    - ContentHeader deve receber do componente pai que instancia-la os
        parametros title e small
*/

import React  from 'react'

export default props => (
    <section className='content-header'>
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)