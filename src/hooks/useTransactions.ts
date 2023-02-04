import { useContext } from "react";
import { Transaction, TransactionContext } from "../Contexts/TransactionContextProvider";

export function useTransactions(): Transaction[] {
    const { transactions } = useContext(TransactionContext);
    return transactions;
}