export default function Navigation({ handleScroll }) {

  const handleScrollClick = (e) => {
    handleScroll(e.target.id);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 h-16 bg-gray-100 border-gray-200 border-2 rounded flex items-center justify-between text-gray-200 p-4 m-2">
      <button onClick={handleScrollClick} id='header' className="flex items-center justify-center w-10 h-10 rounded-full border-gray-200 border-2 bg-white font-extrabold">
        R
      </button>
      <section className="flex space-x-2">
        <button onClick={handleScrollClick} id='about' className="flex items-center justify-center px-6 py-2 rounded border-gray-200 border-2 bg-white font-extrabold">
          About
        </button>
        <button onClick={handleScrollClick} id='projects' className="flex items-center justify-center px-6 py-2 rounded border-gray-200 border-2 bg-white font-extrabold">
          Projects
        </button>
      </section>
    </nav>
  )
}