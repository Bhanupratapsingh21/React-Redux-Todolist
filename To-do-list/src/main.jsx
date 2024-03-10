import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import StaticContextprovider from './Context/StaticsContext.jsx'
import { Provider } from 'react-redux'
import { Store } from './Componets/App/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ChakraProvider>
      <StaticContextprovider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StaticContextprovider>
    </ChakraProvider>
  </Provider>
)
