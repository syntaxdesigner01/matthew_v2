import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import DashboardNav from '@/components/DashboardComponents/DashboardNav'
import SideMenu from '@/components/DashboardComponents/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardNav/>
        <div className='flex flex-row gap-10 w-full'>
            <SideMenu/>
          <main className='w-full'>
          {children}
          </main>
        </div>
        </body>
    </html>
  )
}
