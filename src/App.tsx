import { Header } from "./components/Header"
import { Summary } from "./components/Summary"
import { TransactionList } from "./components/TransactionList"
import { StyleContextProvider } from "./Contexts/StyleContextProvider"
import { Transactions } from "./pages/Transactions"


function App() {

  return (
    <StyleContextProvider>

      <Transactions />

    </StyleContextProvider>
  )
}

export default App
