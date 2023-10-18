import { Route, Routes } from 'react-router-dom'
import PostPage from './pages/Topic'
import SignInPage from './pages/Topic/SignInPage'
import SignUpPage from './pages/Topic/SignUpPage'

function App() {
  
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App