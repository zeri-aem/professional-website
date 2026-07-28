function ContactPreview() {
  return (
    <div className="flex justify-start items-center pl-50 pr-50">
      <div className="flex flex-col justify-start items-start gap-3 p-5">
        <h1 className="text-4xl">
          <strong>Contact</strong>
        </h1>
        <h2>Interested in collaborating or discussing opportunities?</h2>
        <button
          type="button"
          className="rounded p-2 bg-blue-700 cursor-pointer text-white hover:bg-blue-600"
        >
          Email Me
        </button>
        {/* List of other contacts */}
      </div>
    </div>
  );
}

export default ContactPreview;
