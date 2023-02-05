import { useContext } from 'react'
import { TransactionContext } from '../Contexts/TransactionContextProvider'

export function useTransactions() {
  const { transactions, fetchTransactions, createTransactions } =
    useContext(TransactionContext)

  return { transactions, fetchTransactions, createTransactions }
}
