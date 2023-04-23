import './App.css'
import Chat from './components/chat/Chat'
import Emotion from './components/emotion/Emotion'

function App () {
  return (
    <div className='bg-slate-950 h-screen flex flex-col md:flex-row'>
      <div className='basis-full md:basis-1/4 md:block hidden'>
        <Emotion />
      </div>
      <div className='basis-full md:basis-3/4'>
        <Chat />
      </div>
    </div>
  )
}

export default App
