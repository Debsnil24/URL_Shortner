
export default function Home() {
  return (
    <div
      className="font-sans flex-col items-center justify-items-center max-h-screen sm:p-20 my-36 md:my-38 transition-colors"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <div className="relative">
          <h1
            className="font-jaro text-6xl font-bold transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            SNIPLY
          </h1>
        </div>
        <div className="font-mono text-sm/6 text-center sm:text-left">
          <p
            className="mb-2 tracking-[-.01em]"
            style={{ color: "var(--text-primary)" }}
          >
            Smarter links for a faster web.
          </p>
          <p
            className="tracking-[-.01em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Create a link, share it, and track your clicks.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            Get Started
          </button>
          <button className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-gray-700 dark:text-gray-300">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
