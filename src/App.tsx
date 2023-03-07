import {Routes, Route} from 'react-router-dom'
import { Layout } from './pages/layout'
import { Home } from './pages/home'
import { Shop } from './pages/shop'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Product } from './pages/product'
import { ConfirmAddress } from './pages/ConfirmAddress'
import { ConfirmData } from './pages/ConfirmData'
import { ConfirmPayment } from './pages/ConfirmPayment'
import { Page404 } from './pages/page404'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop/:id' element={<Product/>}/>
          <Route path='/confirmAddress' element={<ConfirmAddress/>}/>
          <Route path='/confirmData' element={<ConfirmData/>}/>
          <Route path='/confirmPayment' element={<ConfirmPayment/>}/>
          <Route path='/*' element={<Page404/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App