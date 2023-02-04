import { createContext, useEffect, useState } from "react";

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
        const url = new URL('http://localhost:3000/transactions');

        if (query) {
            url.searchParams.append('q', query);
        }

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        setTransaction(data);
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