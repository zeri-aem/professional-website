import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="flex justify-center items-center bg-[#f1faee] dark:bg-[#212121] relative aspect-video -mx-3 md:-mx-5 lg:-mx-10">
      <div className="absolute top-0 left-0 w-50 h-full bg-[#e63946] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      <div className="absolute top-0 right-0 w-50 h-full bg-[#a8dadc] [clip-path:polygon(0_0,100%_0,100%_100%)]" />
      <ContactForm />
    </section>
  );
}

export default Contact;
