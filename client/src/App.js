import {useRoutes} from './routes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useAuth } from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext'
import Header from './components/Header';

function App() {
  const {login, logout, token, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <div className="App">
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
      <BrowserRouter>
        {isAuthenticated ? <Header/> : ""}
        <div className='blog'>
        {routes}
        </div>
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
