import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Isaac Tomz Services Ltd',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
