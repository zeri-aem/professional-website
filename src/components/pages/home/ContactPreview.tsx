import Button from "../../common/Button";

function ContactPreview() {
  return (
    <section className="flex flex-col justify-center items-start gap-5 p-10">
      <h1>
        <strong>Contact</strong>
      </h1>
      <h2>Interested in collaborating or discussing opportunities?</h2>

      <Button>Email Me</Button>
      {/* List of other contacts */}
    </section>
  );
}

export default ContactPreview;
