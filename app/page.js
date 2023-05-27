import Navigation from './components/navigation.js';

export default function Home() {
  return (
    <main className=''>
      <Navigation />
      <section className='mt-60 ml-[calc(60.00vw-50.00%)]'>
        <h2 className='text-xl font-semibold mb-4'>Hi, my name is</h2>
        <h1 className='text-5xl font-bold mb-2'>Raphael Bessin</h1>
        <h1 className='text-5xl font-bold mb-4'>I develop the future of the Web.</h1>
        <h3 className='w-3/12 font-semibold mb-4'>I'm a sophomore in highschool looking to pursue a Software Development career in college by getting a Computer Science degree. I'm also currently involved in a robotics club and hope to participate in hackathons.</h3>
        <button className='bg-gray-100 border-gray-200 border-2 rounded px-4 py-2'>Learn More</button>
      </section>
    </main>
  )
}
