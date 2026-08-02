function ContactForm() {
  return (
    <div className="flex flex-col justify-center items-start w-130 bg-white gap-3 p-10 m-10 rounded shadow-lg z-1">
      <div>
        <strong className="font-bold text-2xl">Contact Me</strong>
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
          rows={7}
        />
      </div>
    </div>
  );
}

export default ContactForm;
