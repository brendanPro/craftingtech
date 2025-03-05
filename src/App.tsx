import './App.css'
import ComingSoon from './components/commingSoon'
import OnePager from './components/onepager'

function App() {

  return (
    process.env.NODE_ENV === 'development' ? 
    <OnePager />
    :
    <ComingSoon />
  )
}

export default App
