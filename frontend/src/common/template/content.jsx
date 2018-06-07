/* 
    - o que estiver entre a tag <Content></Content> será renderizado
*/

import React  from 'react';

export default props => (
    <section className = 'content'>
        {props.children}
    </section>
)