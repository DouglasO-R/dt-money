import { Header } from "./components/Header"
import { Summary } from "./components/Summary"
import { StyleContextProvider } from "./Contexts/StyleContextProvider"


function App() {

  return (
    <StyleContextProvider>
      <Header />
      <Summary />
    </StyleContextProvider>
  )
}

export default App
