import { createContext } from "react"
import { AppRouter } from "./AppRouter"


export const AppContext = createContext<any>({})

function App() {
  
  return (
    <main className='App relative overflow-x-hidden d-flex w-full bg-gradient-to-l from-secondary via-primary to-secondary'>
    <AppRouter />
  </main>
  )
}



export default App
