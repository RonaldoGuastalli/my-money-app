/* 
    o webpack começa por este arquivo
    reactDom -- para interagir com a pagina
    <App /> -- vem do app.jxs
    'app' -- é justamente o app que esta na div (<div id="app"></div>) em /frontend/public/index.html
    gerou o bundle app.js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

ReactDOM.render(<App />, document.getElementById('app'))