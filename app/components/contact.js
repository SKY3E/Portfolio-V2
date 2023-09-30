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
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2 w-1/4'>First & Last Name</label>
        <input className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2' type="text" name="name" placeholder="John Doe"/>
        <input className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2' type="email" name="email"/>
        <textarea className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2' name="message"></textarea>
        <button className='rounded bg-gray-100 border-gray-200 border-2 px-4 py-2' type="submit">Submit Form</button>
      </form>
    </section>
  )
}