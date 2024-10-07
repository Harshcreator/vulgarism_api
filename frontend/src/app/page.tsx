import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features from '../components/features'
import ApiTest from '../components/api-test'
import Pricing from '../components/pricing'
import Footer from '../components/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ApiTest />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}