import '../styles/global.css'
import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400']
})

export default function MyApp({Component, pageProps}) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    )
}