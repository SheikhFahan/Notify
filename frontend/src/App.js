import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'

import Header from './Components/Header'

import { AuthProvider } from './Context/AuthContext'

import PrivateRoutes from './Utils/PrivateRoutes'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='App'>
      {/* <p>This is the base home page</p> */}

      <Router>
        <AuthProvider>
        <Header/>
        <Routes>
              <Route element = {<PrivateRoutes/>}>
              <Route element = {<HomePage/>} path='/' exact/>
            </Route>
          <Route element = {<LoginPage/>} path = 'login/' />
        </Routes>
        </AuthProvider>
      </Router>

    </div>

    </>
  );
}

export default App;
