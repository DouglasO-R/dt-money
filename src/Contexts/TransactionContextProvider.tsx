import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Transaction {
    id: number;
    description: string;
    type: "income" | "outcome";
    category: string;
    price: number;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType);

interface TransactionContextProviderProps {
    children: React.ReactNode
}


export function TransactionContextProvider({ children }: TransactionContextProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([]);


    const fetchTransactions = async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                q: query
            }
        });



        setTransaction(response.data);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                fetchTransactions
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}