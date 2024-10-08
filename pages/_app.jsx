import '../styles/global.css'
import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600']
})

export default function MyApp({Component, pageProps}) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
            <div id={'modals'}></div>
        </main>
    )
}