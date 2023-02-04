import { useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionList } from '../../components/TransactionList'
import { useTransactions } from '../../hooks/useTransactions'
import { SearchForm } from './components/SearchForm'

export function Transactions() {
  const [filter, setFilter] = useState('')
  const { transactions } = useTransactions()

  const handleFilter = (data: string) => {
    setFilter(data.charAt(0).toUpperCase())
  }

  const filtered =
    filter.length <= 0
      ? transactions
      : transactions.filter((item) => item.category.includes(filter))

  return (
    <>
      <Header />
      <Summary transactions={filtered} />
      <SearchForm handleFilter={handleFilter} />
      <TransactionList transactions={filtered} />
    </>
  )
}
