import HomeContainer from '@/containers/HomeContainer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomeContainer />
  )
}
