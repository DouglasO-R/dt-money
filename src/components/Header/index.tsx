import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

import logoImage from "./assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

export function Header() {
    return (
        <HeaderContainer>

            <HeaderContent>
                <img src={logoImage} alt="" />

                <Dialog.Root>

                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>


                    <NewTransactionModal />

                </Dialog.Root>

            </HeaderContent>

        </HeaderContainer>
    )
}