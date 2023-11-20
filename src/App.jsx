import { } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
function App() {


  return (
    <div >
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
