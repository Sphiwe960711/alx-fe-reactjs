
import './App.css'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  

  return (
    <div>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
