/* 
   - Barra lateral
   - componente que utizila outro componentes (menuItem.jsx, menuTree.jsx) para criar o menu
   - <MenuItem /> -- componente menuItem.jsx
   - passa como parametro label='Dashboard' icon='dashboard' para o componente filho
        <MenuItem />
   - icon='usd' -- parametro enviado para componente menuItem.jsx atravez da instancia <MenuItem />
   - path='#billingCycles' -- http://localhost:8080/#billingCycles
*/

import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>

        {/* item que esta dentro da barra lateral - Dashboard */}
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />

        {/* item que esta dentro da barra lateral em forma de arvore de menus - Cadastro */}
        <MenuTree label='Cadastro' icon='edit'>

            {/* filhos da árvore, ficam abaixo - Ciclos de Pagamentos */}
            <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />

        </MenuTree>

    </ul>
)
