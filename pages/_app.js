import "../styles/globals.sass"
import { NavigationContextProvider } from "../context/Navigation"
import { LanguageContextProvider } from "../context/Language"
import { YouTubeContextProvider } from "../context/YouTube"
import { MusicContextProvider } from "../context/Music"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationContextProvider>
        <LanguageContextProvider>
          <MusicContextProvider>
            <YouTubeContextProvider>
              <Component {...pageProps} />
            </YouTubeContextProvider>
          </MusicContextProvider>
        </LanguageContextProvider>
      </NavigationContextProvider>
    </>
  )
}

export default MyApp
