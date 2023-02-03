import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function TransactionList() {
    return (
        <TransactionsContainer>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Salario</td>
                        <td>
                            <PriceHighlight variant="income">R$1200,00</PriceHighlight>
                        </td>
                        <td>Remuneração</td>
                        <td>15/01/2023</td>
                    </tr>

                    <tr>
                        <td width="50%">Gasto</td>
                        <td>
                            <PriceHighlight variant="outcome">- R$1000,00</PriceHighlight>
                        </td>
                        <td>Conta</td>
                        <td>15/01/2023</td>
                    </tr>
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    )
}