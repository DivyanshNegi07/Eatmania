import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Cart from './pages/Cart'

import SearchResults from './pages/SearchResults'
import Footer from './components/Footer'
import {Provider} from 'react-redux'
import Store from './redux/Store'
import BrowseRestaurants from './pages/BrowseRestaurants'
import SearchRestaurants from './pages/SearchRestaurant'
import Checkout from './pages/Checkout'
import AddRestaurant from './pages/AddRestaurant'
import CookiesPolicy from './pages/CookiesPolicy'
import GetHelp from './pages/GetHelp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SignUpToDeliver from './pages/SignUpToDeliver'
import TermsAndConditions from './pages/TermsAndConditions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={Store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurantSearch' element={<SearchRestaurants/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/search' element={<SearchResults />} />
          <Route path='/browserestaurants' element={<BrowseRestaurants />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cookiespolicy' element={<CookiesPolicy />} />
          <Route path='/gethelp' element={<GetHelp />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/signuptodeliver' element={<SignUpToDeliver />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
        </Routes>
        <Footer/>
    </Provider>
  )
}

export default App
