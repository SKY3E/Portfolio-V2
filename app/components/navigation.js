import Link from 'next/link';

export default function Navigation() {

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 h-16 bg-white border-gray-200 border-2 rounded flex items-center justify-between shadow-lg p-4 m-2 text-xs md:text-base">
      <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:shadow-lg border-gray-200 border-2 px-4 py-2">
        R
      </Link>
      <section className="flex space-x-2">
        <Link href="/about" className="flex items-center justify-center bg-gray-100 hover:shadow-lg hover:text-blue-500 border-gray-200 border-2 rounded px-4 py-2">
          About
        </Link>
        <Link href="/projects" className="flex items-center justify-center bg-gray-100 hover:shadow-lg hover:text-blue-500 border-gray-200 border-2 rounded px-4 py-2">
          Projects
        </Link>
        <Link href="/contact" className="flex items-center justify-center bg-gray-100 hover:shadow-lg hover:text-blue-500 border-gray-200 border-2 rounded px-4 py-2">
          Contact
        </Link>
      </section>
    </nav>
  )
}