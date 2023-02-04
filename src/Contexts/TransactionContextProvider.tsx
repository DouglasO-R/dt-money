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
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType);

interface TransactionContextProviderProps {
    children: React.ReactNode
}


export function TransactionContextProvider({ children }: TransactionContextProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([]);


    const loadTransaction = async () => {
        const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();
        setTransaction(data);
    }

    useEffect(() => {
        loadTransaction();
    }, []);

    return (
        <TransactionContext.Provider value={{ transactions: transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}