export default function Skills() {

  return (
    <section id='skills-section' className='lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)] mb-20'>
      <h2 className='text-2xl font-semibold mb-4'>Skills</h2>
      <div className="flex my-4">
        <article className="w-2/3 mr-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Systems</h3>
          <div className='grid grid-cols-4 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/windows.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/vscode.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/postman.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/npm.png"></img>
            </label>
          </div>
        </article>
        <article className="w-1/3 ml-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Version Control</h3>
          <div className='grid grid-cols-2 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/github.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/git.png"></img>
            </label>
          </div>
        </article>
      </div>
      <div className="flex my-4">
        <article className="w-1/3 mr-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Website & Code Design</h3>
          <div className='grid grid-cols-2 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/prettier.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/figma.png"></img>
            </label>
          </div>
        </article>
        <article className="w-1/3 mx-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Deployment</h3>
          <div className='grid grid-cols-2 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/vercel.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/githubactions.png"></img>
            </label>
          </div>
        </article>
        <article className="w-1/3 ml-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Art Design</h3>
          <div className='grid grid-cols-2 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8 w-8" src="/skills/blender.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/aseprite.png"></img>
            </label>
          </div>
        </article>
      </div>
      <div className="flex my-4">
        <article className="w-1/2 mr-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <div className='grid grid-cols-3 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/js.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/csharp.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/python.png"></img>
            </label>
          </div>
        </article>
        <article className="w-2/6 mx-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <div className='grid grid-cols-2 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/firebase.png"></img>
            </label>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/mongodb.png"></img>
            </label>
          </div>
        </article>
        <article className="w-1/6 ml-2 hover:shadow-lg bg-white border-gray-200 border-2 rounded p-2">
          <h3 className="text-xl font-semibold mb-2">Game Engines</h3>
          <div className='grid grid-cols-1 gap-4'>
            <label className="bg-gray-100 border-gray-200 border-2 rounded p-2 justify-center flex hover:shadow-lg">
              <img className="h-8" src="/skills/unity.png"></img>
            </label>
          </div>
        </article>
      </div>
      <div className="h-4"></div>
    </section>
  )
}