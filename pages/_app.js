import '../styles/globals.sass'
import { NavigationContextProvider } from '../context/Navigation'
import { LanguageContextProvider } from '../context/Language'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavigationContextProvider>
                <LanguageContextProvider>
                    <Component {...pageProps} />
                </LanguageContextProvider>
            </NavigationContextProvider>
        </>
    )
}

export default MyApp
