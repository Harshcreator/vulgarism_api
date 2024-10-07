import { CheckCircle } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Accurate Detection"
            description="Our advanced algorithms ensure high accuracy in detecting vulgar content."
          />
          <FeatureCard
            title="Multiple Languages"
            description="Support for various languages to cater to a global audience."
          />
          <FeatureCard
            title="Customizable Filters"
            description="Tailor the API to your specific needs with customizable filtering options."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <CheckCircle className="h-12 w-12 mb-4 text-green-500" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}