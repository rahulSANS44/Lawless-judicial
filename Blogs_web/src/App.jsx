import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Post from './Pages/Post'

export default function App(){
  return(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element= {<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Signin" element= {<Signin />} />
            <Route path="/Signup" element= {<Signup />} />
            <Route path="/About" element= {<About />} />
            <Route path="/Post" element= {<Post />} />
        </Routes>
    </BrowserRouter>
  )
}