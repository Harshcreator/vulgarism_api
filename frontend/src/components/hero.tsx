import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Vulgarism API
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Detect and filter vulgar content with ease. Protect your users and maintain a clean environment.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#api-test">Try it Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}