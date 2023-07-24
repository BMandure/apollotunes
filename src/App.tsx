import './App.css'
import Sidebar from './components/Sidebar'
import SongList from './components/SongList'

function App() {

  return (
    <main className="grid grid-cols-12 gap-1 h-screen w-100 bg-black">
      <Sidebar/>
      <SongList/>
      <div className="absolute bottom-0 h-[10%] w-full">asdfasdfS</div> 
    </main>
  )
}

export default App
