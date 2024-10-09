import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/App/NavBar/page'
import Footer from './components/App/Footer/page'
import { Toaster } from 'react-hot-toast'
import Menu from './components/App/Menu/page'

function App() {
  return (
    <>
      <Toaster 
        position='top-center'
        reverseOrder={false}
      />
      <NavBar/>
      
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </>
  )
}

export default App
