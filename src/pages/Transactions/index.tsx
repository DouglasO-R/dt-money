import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionList } from "../../components/TransactionList";
import { SearchForm } from "./components/SearchForm";


export function Transactions() {
    return (
        <>
            <Header />
            <Summary />
            <SearchForm />
            <TransactionList />
        </>
    )
}