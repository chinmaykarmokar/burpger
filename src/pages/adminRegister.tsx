import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Import components
import AdminRegistrationComponent from '../components/AdminRegistration/adminRegistrationComponent'

const AdminRegistration: React.FC = () => {
  return (
    <>
      <AdminRegistrationComponent/>
    </>
  )
}
