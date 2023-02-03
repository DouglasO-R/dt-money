import { Header } from "./components/Header"
import { StyleContextProvider } from "./Contexts/StyleContextProvider"


function App() {

  return (
    <StyleContextProvider>
      <Header />
    </StyleContextProvider>
  )
}

export default App
