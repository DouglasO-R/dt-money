import styled from "styled-components";

export const TransactionsContainer = styled.section`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto ;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td{
        padding: 1.25rem 2rem;
        background-color: ${({ theme }) => theme["gray-700"]};

        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`
interface PriceHighlightProps {
    variant: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${({ theme, variant }) => variant === "income" ? theme["green-300"] : theme["red-300"]};
`