import { Header } from "./components/Header"
import { Summary } from "./components/Summary"
import { TransactionList } from "./components/TransactionList"
import { StyleContextProvider } from "./Contexts/StyleContextProvider"


function App() {

  return (
    <StyleContextProvider>

      <Header />
      <Summary />
      <TransactionList />

    </StyleContextProvider>
  )
}

export default App
