import { SessionProvider } from "next-auth/react"
import {WLayout} from '../components/wSections'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
    console.log("session",session)
  return (
    <SessionProvider session={session}>
        <WLayout>
            <Component {...pageProps} />
        </WLayout>
    </SessionProvider>
  )
}