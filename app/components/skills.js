export default function Skills() {

  return (
    <section id='skills-section' className='lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)] mb-20'>
      <h2 className='text-2xl font-semibold mb-4'>Skills</h2>
      <div className="flex">
        <article className="w-1/3 p-2 mr-2 text-center bg-gray-100 border-gray-200 border-2 rounded">
          <h3 className="text-xl mb-2">Software & Systems</h3>
          <div className='grid grid-cols-4 gap-4'>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/vscode.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/github.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/git.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/figma.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/postman.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/npm.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/prettier.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/windows.png"></img>
            </label>
            <label className="border-2 border-gray-100 bg-white rounded border-2 border-gray-200 p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/vercel.png"></img>
            </label>
          </div>
        </article>
        <article className="w-1/3 p-2 mx-2 text-center bg-gray-100 border-gray-200 border-2 rounded"></article>
        <article className="w-1/3 p-2 ml-2 text-center bg-gray-100 border-gray-200 border-2 rounded"></article>
      </div>
      <div className="h-4"></div>
    </section>
  )
}