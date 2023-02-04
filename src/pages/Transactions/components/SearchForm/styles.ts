import styled from "styled-components";


export const SearchFormContainer = styled.form`
    width: 100%;
    max-width: 70rem;
    margin: 4rem auto 0;
    padding: 0 1.5rem;

    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        padding: 1rem;
        border: none;

        background-color: ${({ theme }) => theme["gray-900"]};
        color: ${({ theme }) => theme["gray-300"]};

        &::placeholder{
            color: ${({ theme }) => theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: 6px;
        cursor: pointer;

        border: 1px solid ${({ theme }) => theme["green-300"]};
        color: ${({ theme }) => theme["green-300"]};
        background-color: transparent;

        font-weight: bold;

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover{
            background-color: ${({ theme }) => theme["green-500"]};
            border-color: ${({ theme }) => theme["green-500"]};

            color: ${({ theme }) => theme["white"]};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`