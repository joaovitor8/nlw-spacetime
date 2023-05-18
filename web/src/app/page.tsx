import { cookies } from 'next/headers'

import { Copyright } from '@/components/Copyright'
import { Decoretors } from '@/components/Decoretors'
import { Hero } from '@/components/Hero'
import { Memories } from '@/components/Memories'
import { Signin } from '@/components/Signin'
import { Profile } from '@/components/Profile'


export default function Home() {
  const isAuthen = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <Decoretors />
        {isAuthen ? <Profile /> : <Signin />}
        <Hero />
        <Copyright />
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <Memories />
      </div>
    </main>
  )
}
