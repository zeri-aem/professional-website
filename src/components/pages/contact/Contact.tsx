import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="flex justify-center items-center bg-[#a8dadc] relative h-[calc(100dvh-128px)]">
      <div className="absolute top-0 left-0 w-50 h-full bg-[#e63946] [clip-path:polygon(0_0,100%_100%,0_100%)]"></div>
      <div className="absolute top-0 right-0 w-50 h-full bg-[#e63946] [clip-path:polygon(0_0,100%_0,100%_100%)]"></div>
      <ContactForm />
    </section>
  );
}

export default Contact;
