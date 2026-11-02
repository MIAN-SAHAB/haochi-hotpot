import type { Metadata } from 'next';
import { Shell } from '@/components/shell';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Haochi Hotpot — Warm & Fresh, After Dark', template: '%s | Haochi Hotpot' }, description: 'Small-batch hotpot and handcrafted momos. Fresh from our home kitchen, 6 PM–2 AM. Build your bowl and order on WhatsApp.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" data-scroll-behavior="smooth"><body><Shell>{children}</Shell></body></html>; }
