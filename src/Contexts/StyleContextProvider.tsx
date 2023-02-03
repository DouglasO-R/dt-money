import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { defaultTheme } from "../styles/themes/defaultTheme"

interface StyleContextProviderProps {
    children: React.ReactNode
}


export function StyleContextProvider({ children }: StyleContextProviderProps) {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}