import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionList } from "../../components/TransactionList";


export function Transactions() {
    return (
        <>
            <Header />
            <Summary />
            <TransactionList />
        </>
    )
}