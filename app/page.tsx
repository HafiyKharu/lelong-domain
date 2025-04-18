import Image from "next/image";
import Head from "next/head"; // Add this import if using Next.js <13, otherwise use <title> in layout.tsx

const domains = [
  { name: "example.com", status: "Available" },
  { name: "mywebsite.net", status: "Taken" },
  { name: "cooldomain.org", status: "Available" },
];

export default function Home() {
  return (
    <>
      {/* Page Title */}
      <Head>
        <title>Lelong Domain</title>
      </Head>
      <div className="grid grid-rows-[60px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Header */}
        <header className="row-start-1 w-full flex items-center justify-center mb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-700 dark:text-blue-300">
            Lelong Domain
          </h1>
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="mb-4 w-full max-w-3xl text-center text-base text-gray-700 dark:text-gray-300">
  This page is for the lelong domain, u want it can pm me
</div>
          {/* Domain List Section */}
          <section className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-lg shadow p-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Domain List
            </h2>
            <ul className="divide-y divide-gray-200 dark:divide-neutral-700">
              {domains.map((domain) => (
                <li
                  key={domain.name}
                  className="flex items-center justify-between py-5 gap-8"
                >
                  <span className="font-mono text-base text-gray-700 dark:text-gray-200">
                    {domain.name}
                  </span>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      domain.status === "Available"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {domain.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-semibold">Contact:</span>
            </div>
            <div>
              📞 <a href="tel:+60123456789" className="hover:underline">+60 12-345 6789</a>
            </div>
            <div>
              📧 <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
            </div>
            <div className="flex gap-2 justify-center mt-1">
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
              <span>|</span>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
              <span>|</span>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}