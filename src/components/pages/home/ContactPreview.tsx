import Button from "../../common/Button";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function ContactPreview() {
  return (
    <section className="flex flex-col mb-10 justify-center items-start gap-5 p-10 bg-[#f1faee] dark:bg-[#457b9d] rounded-2xl shadow-xl">
      <h1 className="font-bold text-4xl">Contact</h1>
      <h2>Interested in collaborating or discussing opportunities?</h2>

      <Button to="/contact" elem="nav">
        Email Me
      </Button>
      {/* List of other contacts */}
      <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-2xl shadow-xl">
        <a href="https://github.com/zeri-aem" target="_blank">
          <FaGithub className="w-8 h-8 text-[#1D3557] hover:text-[#457B9D] hover:scale-110 transition-all duration-300" />
        </a>
        <a href="https://linkedin.com/in/zeri-aaron" target="_blank">
          <FaLinkedin className="w-8 h-8 text-[#1D3557] hover:text-[#457B9D] hover:scale-110 transition-all duration-300" />
        </a>
        <a href="https://www.facebook.com/zeriaaronmalacas/" target="_blank">
          <FaFacebook className="w-8 h-8 text-[#1D3557] hover:text-[#457B9D] hover:scale-110 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
}

export default ContactPreview;
