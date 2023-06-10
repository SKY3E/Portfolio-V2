export default function Navigation({ handleScroll }) {

  const handleScrollClick = (e) => {
    handleScroll(e.target.id);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 h-16 bg-white border-gray-200 border-2 rounded flex items-center justify-between shadow-lg p-4 m-2 text-xs md:text-base">
      <button onClick={handleScrollClick} id='header' className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:shadow-lg border-gray-200 border-2 px-4 py-2">
        R
      </button>
      <section className="flex space-x-2">
        <button onClick={handleScrollClick} id='about' className="flex items-center justify-center bg-gray-100 hover:shadow-lg border-gray-200 border-2 rounded px-4 py-2">
          About
        </button>
        <button onClick={handleScrollClick} id='projects' className="flex items-center justify-center bg-gray-100 hover:shadow-lg border-gray-200 border-2 rounded px-4 py-2">
          Projects
        </button>
        <button onClick={handleScrollClick} id='skills' className="flex items-center justify-center bg-gray-100 hover:shadow-lg border-gray-200 border-2 rounded px-4 py-2">
          Skills
        </button>
        <button onClick={handleScrollClick} id='contact' className="flex items-center justify-center bg-gray-100 hover:shadow-lg border-gray-200 border-2 rounded px-4 py-2">
          Contact
        </button>
      </section>
    </nav>
  )
}