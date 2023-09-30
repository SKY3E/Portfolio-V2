export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eee47edf-2498-4341-b974-ef71a18d6e08");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
  }

  return (
    <section id='contact-section' className='lg:ml-[calc(60.00vw-50.00%)] lg:mr-[calc(60.00vw-50.00%)]'>
      <h2 className='text-2xl font-semibold mb-4'>Contact Me</h2>
      <article className="flex w-full gap-16">
        <form className='flex flex-col w-1/2' onSubmit={handleSubmit}>
          <div className="flex mb-2 gap-2">
            <label className='rounded bg-gray-200 border-gray-300 border-2 w-1/3 px-4 py-2'>First & Last Name</label>
            <div className='rounded bg-gray-200 border-gray-300 border-2 w-2/3 px-4 py-2'></div>
          </div>
          <input className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2 mb-2' type="text" name="name" placeholder="John Doe"/>
          <div className="flex mb-2 gap-2">
            <label className='rounded bg-gray-200 border-gray-300 border-2 w-1/3 px-4 py-2'>Email</label>
            <div className='rounded bg-gray-200 border-gray-300 border-2 w-2/3 px-4 py-2'></div>
          </div>
          <input className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2 mb-2' type="email" name="email" placeholder="johndoe@gmail.com"/>
          <div className="flex mb-2 gap-2">
            <label className='rounded bg-gray-200 border-gray-300 border-2 w-1/3 px-4 py-2'>Message</label>
            <div className='rounded bg-gray-200 border-gray-300 border-2 w-2/3 px-4 py-2'></div>
          </div>
          <textarea className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2 mb-2' name="message" placeholder="Type your message here."></textarea>
          <button className='rounded text-white bg-green-700 border-green-800 border-2 hover:bg-green-600 hover:border-green-700 px-4 py-2 mb-2' type="submit">Submit Form</button>
        </form>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-1">Got a question?</h2>
          <h3 className="text-3xl font-semibold mt-1">Just reach out.</h3>
          <p className="mt-4">Contact me through the form whether it be to work on a project today or if you have a question.</p>
          <p className="mt-2">Or just contact me directly through my <a className='underline' href="mailto:bessin.raphael@gmail.com">email</a>.</p>
        </div>
      </article>
    </section>
  )
}