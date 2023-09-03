
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Button variant='ghost' size='lg'>
       <ChevronRightIcon className="h-4 w-4" />

       </Button>


    </main>
  )
}
