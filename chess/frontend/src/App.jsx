import { Routes, Route,  BrowserRouter } from 'react-router-dom'
import { Navbar, Alert, Footer } from './components/'
import { Chess, Rooms, Profile, Practice } from './pages/'
import SocketHandler from './socket/SocketHandler'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <SocketHandler>
                <Navbar />
                <Alert />
                <Routes>
                    <Route path='/' element={<Rooms />} />
                    <Route path='/chess' element={<Chess />} />
                    <Route path='/practice' element={<Practice />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
                <Footer />
            </SocketHandler>
        </BrowserRouter>
    )
}

export default App
