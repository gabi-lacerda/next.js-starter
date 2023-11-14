/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BqSDdcRin5L
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="h-screen w-full bg-zinc-100 dark:bg-zinc-900">
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-semibold">Gabsy</h1>
        <nav className="flex gap-4">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
          </svg>
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="space-y-4">
          <img
            alt="Album Art"
            className="rounded-lg object-cover aspect-[1/1]"
            height="400"
            src="/placeholder.svg"
            width="400"
          />
          <h2 className="text-3xl font-semibold">Track Title</h2>
          <h3 className="text-xl text-zinc-500 dark:text-zinc-400">Artist Name</h3>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="19 20 9 12 19 4 19 20" />
                <line x1="5" x2="5" y1="19" y2="5" />
              </svg>
            </Button>
            <Button
              className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
              size="icon"
              variant="outline"
            >
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </Button>
            <Button size="icon" variant="ghost">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="5 4 15 12 5 20 5 4" />
                <line x1="19" x2="19" y1="5" y2="19" />
              </svg>
            </Button>
          </div>
          <div className="relative w-full h-2 bg-zinc-200 rounded-md dark:bg-zinc-800">
            <div
              className="absolute h-full bg-zinc-600 rounded-md dark:bg-zinc-400"
              style={{
                width: "50%",
              }}
            />
          </div>
        </div>
      </main>
      <footer className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-semibold mb-2">Current Playlist</h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
            <span>Track 1</span>
            <span>03:45</span>
          </li>
          <li className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
            <span>Track 2</span>
            <span>04:32</span>
          </li>
          <li className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
            <span>Track 3</span>
            <span>02:52</span>
          </li>
        </ul>
      </footer>
    </section>
  )
}

