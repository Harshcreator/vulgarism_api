import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$9"
            features={[
              "1,000 API calls/month",
              "Standard support",
              "1 language"
            ]}
          />
          <PricingCard
            title="Pro"
            price="$29"
            features={[
              "10,000 API calls/month",
              "Priority support",
              "5 languages"
            ]}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited API calls",
              "24/7 support",
              "All languages"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, features }: { title: string; price: string | number; features: string[] }) {
    return (
      <div className="flex flex-col p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
          <p className="text-4xl font-bold text-center">
            {price}<span className="text-sm font-normal">/month</span>
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-auto w-full">
          Choose Plan
        </Button>
      </div>
    )
  }