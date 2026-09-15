import './globals.css';
export const metadata={title:'Animal X Gym',description:'Simple weekly workout tracker'};
export const viewport={width:'device-width',initialScale:1,themeColor:'#111111'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}