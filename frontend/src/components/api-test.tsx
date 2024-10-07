'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ApiTest() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This is a mock API call. Replace with your actual API endpoint.
    setResult(`API Response: ${input.split(' ').map(word => word.replace(/[aeiou]/g, '*')).join(' ')}`)
  }

  return (
    <section id="api-test" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Test Our API</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Textarea
            placeholder="Enter text to test for vulgarisms..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full">Test API</Button>
        </form>
        {result && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <h3 className="font-bold mb-2">Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </section>
  )
}