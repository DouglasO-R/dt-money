import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";


export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <p>Entradas</p>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>R$17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <p>Saídas</p>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>R$17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <p>Total</p>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>R$17.400,00</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}