import Button from "../../common/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ICON_SIZE = 32;

function ContactPreview() {
  return (
    <section className="flex flex-col justify-center items-start gap-5 p-10">
      <h1>
        <strong>Contact</strong>
      </h1>
      <h2>Interested in collaborating or discussing opportunities?</h2>

      <Button>Email Me</Button>
      {/* List of other contacts */}
      <div className="flex justify-start items-center gap-3 p-3 bg-[#a8dadc] rounded-2xl shadow-xl">
        <a href="https://github.com/zeri-aem" target="_blank">
          <FaGithub size={ICON_SIZE} />
        </a>
        <a href="https://github.com/zeri-aem" target="_blank">
          <FaGithub size={ICON_SIZE} />
        </a>
        <a href="https://linkedin.com/in/zeri-aaron" target="_blank">
          <FaLinkedin size={ICON_SIZE} />
        </a>
      </div>
    </section>
  );
}

export default ContactPreview;
