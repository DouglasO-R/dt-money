import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionList } from '../../components/TransactionList'
import { useTransactions } from '../../hooks/useTransactions'
import { SearchForm } from './components/SearchForm'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <>
      <Header />
      <Summary transactions={transactions} />
      <SearchForm />
      <TransactionList transactions={transactions} />
    </>
  )
}
