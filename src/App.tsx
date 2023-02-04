import { StyleContextProvider } from './Contexts/StyleContextProvider'
import { TransactionContextProvider } from './Contexts/TransactionContextProvider'
import { Transactions } from './pages/Transactions'

function App() {
  return (
    <StyleContextProvider>
      <TransactionContextProvider>
        <Transactions />
      </TransactionContextProvider>
    </StyleContextProvider>
  )
}

export default App
