import './globals.css'

export const metadata = {
  title: 'Notes App',
  description: 'A simple notes application with Next.js and MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}