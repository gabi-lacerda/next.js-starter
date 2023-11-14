/**
 * v0 by Vercel.
 * @see https://v0.dev/t/goAPqBgT53Z
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-pink-300 to-pink-500">
      <div className="container grid gap-6 lg:grid-cols-3 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center transition-colors hover:bg-pink-300 rounded-lg bg-white bg-opacity-50 backdrop-blur-md shadow-xl">
          <img
            alt="Cloud background"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-inner z-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-pink-800">Basic</h2>
            <div className="text-4xl font-bold text-pink-800">$9.99</div>
            <p className="mx-auto max-w-[700px] text-pink-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              For individuals or small teams starting to manage tasks.
            </p>
            <Button className="bg-pink-700 hover:bg-pink-600" variant="default">
              Select Plan
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center transition-colors hover:bg-pink-300 rounded-lg bg-white bg-opacity-50 backdrop-blur-md shadow-xl">
          <img
            alt="Cloud background"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-inner z-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-pink-800">Pro</h2>
            <div className="text-4xl font-bold text-pink-800">$19.99</div>
            <p className="mx-auto max-w-[700px] text-pink-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              For growing teams that need to manage more work.
            </p>
            <Button className="bg-pink-700 hover:bg-pink-600" variant="default">
              Select Plan
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center transition-colors hover:bg-pink-300 rounded-lg bg-white bg-opacity-50 backdrop-blur-md shadow-xl">
          <img
            alt="Cloud background"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-inner z-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-pink-800">Enterprise</h2>
            <div className="text-4xl font-bold text-pink-800">Custom</div>
            <p className="mx-auto max-w-[700px] text-pink-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              For large teams with complex workflows and higher needs. Pricing can be customised to suit your needs.
            </p>
            <Button className="bg-pink-700 hover:bg-pink-600" variant="default">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
