import logoImage from "./assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage} alt="" />
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}