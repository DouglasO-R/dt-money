import { useContext } from "react";
import { TransactionContext } from "../Contexts/TransactionContextProvider";

export function useTransactions() {
    const { transactions, fetchTransactions } = useContext(TransactionContext);
    return { transactions, fetchTransactions };
}