import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import LayoutAdmin from './pages/admin/LayoutAdmin'
import LayoutClient from './pages/client/LayoutClient'
import { AuthContext } from './contexts/AuthProvider'

function App() {
  const { isLogin } = useContext(AuthContext);
    
  return (
    <>
      { isLogin?.role == "admin" || isLogin?.role == "moderator"  ? <LayoutAdmin /> : <LayoutClient />}
    </>
  )
}

export default App
