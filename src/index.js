import React from "react"
import ReactDOM from 'react-dom'
import App from "./App"
import {myStore} from './redux.js'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Provider store={myStore}>
            <App/>
        </Provider>
)  