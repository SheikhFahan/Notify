import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'

import Header from './Components/Header'
import NavbarComp from './Components/NavbarComp'
import AboutPage from './Pages/AboutPage'
import Branches from './Pages/Branches'
import NoPage from './Pages/NoPage'
import Hero from './Pages/Hero'
import { AuthProvider } from './Context/AuthContext'

import PrivateRoutes from './Utils/PrivateRoutes'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='App'>
      <NavbarComp/>
      <Router>
        <AuthProvider>
        <Header/>
        <Routes>
          <Route element = {<PrivateRoutes/>}>
            <Route element = {<Hero />} path='/' exact/>
          </Route>
          <Route element = {<LoginPage/>} path = 'login/' />
          {/* <Route path="/" element=/> */}
          <Route index element={<Hero />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/branches" element={<Branches />}/>
          {/* <Route path="/login" element={<LoginForm />}/> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
        </AuthProvider>
      </Router>

    </div>

    </>
  );
}

export default App;
