import './App.css'
import Login from './components/Login/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <UserContextProvider>
       <h1>hello world</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
