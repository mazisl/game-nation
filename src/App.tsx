// import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2">
      <div className="row-span-1 col-span-1 lg:col-span-2 bg-red-400">
        Nav
      </div>
      <div className="hidden lg:block lg:row-span-1 lg:col-span-1 bg-yellow-400">
        Aside
      </div>
      <div className="row-span-1 col-span-1 bg-blue-400">
        Main
      </div>
    </div>
  )
}

export default App
