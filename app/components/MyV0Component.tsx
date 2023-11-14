/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qtOeDyvbcx8
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="shadow-lg rounded-lg transition-colors duration-300 hover:bg-[#ff88cc]">
            <div className="px-4 py-5 bg-[#ff66bb] rounded-t-lg">
              <h3 className="text-2xl font-semibold text-white">Basic</h3>
              <p className="mt-2 text-white text-opacity-80">$29/month</p>
            </div>
            <div className="px-4 py-5 bg-white">
              <ul className="space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
              </ul>
              <Button className="mt-5 bg-[#ff66bb] hover:bg-[#ff88cc]">Buy Now</Button>
            </div>
          </div>
          <div className="shadow-lg rounded-lg transition-colors duration-300 hover:bg-[#ff88cc]">
            <div className="px-4 py-5 bg-[#ff66bb] rounded-t-lg">
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <p className="mt-2 text-white text-opacity-80">$59/month</p>
            </div>
            <div className="px-4 py-5 bg-white">
              <ul className="space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button className="mt-5 bg-[#ff66bb] hover:bg-[#ff88cc]">Buy Now</Button>
            </div>
          </div>
          <div className="shadow-lg rounded-lg transition-colors duration-300 hover:bg-[#ff88cc]">
            <div className="px-4 py-5 bg-[#ff66bb] rounded-t-lg">
              <h3 className="text-2xl font-semibold text-white">Ultimate</h3>
              <p className="mt-2 text-white text-opacity-80">$99/month</p>
            </div>
            <div className="px-4 py-5 bg-white">
              <ul className="space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <Button className="mt-5 bg-[#ff66bb] hover:bg-[#ff88cc]">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

