import { Transaction } from "../../Contexts/TransactionContextProvider";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface TransactionListProps {
    transactions: Transaction[]
}

export function TransactionList({ transactions }: TransactionListProps) {

    const renderTransaction = (transaction: Transaction) => (
        <tr key={transaction.id}>
            <td width="50%">{transaction.description}</td>
            <td>
                <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
        </tr>
    )


    return (
        <TransactionsContainer>
            <TransactionsTable>
                <tbody>
                    {transactions?.map(renderTransaction)}

                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    )
}