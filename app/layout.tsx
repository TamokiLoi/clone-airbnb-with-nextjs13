import { Nunito } from 'next/font/google';
import './globals.css';

import ClientOnly from './components/ClientOnly.component';
import RegisterModal from './components/modals/RegisterModal.component';
import Navbar from './components/navbar/Navbar.component';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb Clone App',
}

const font = Nunito({
    subsets: ["latin"],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <RegisterModal />
                    <Navbar />
                </ClientOnly>
                {children}
            </body>
        </html>
    )
}
