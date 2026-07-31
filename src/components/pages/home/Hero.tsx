import zeriImage from "../../../assets/zeri.png";

function Hero() {
  return (
    // Hero Container // bg-[#f1faee]
    <section className="flex flex-wrap justify-center items-center gap-5">
      {/* Image */}
      <img
        src={zeriImage}
        alt="Zeri's Image"
        className="md:w-85 bg-[#e63946] md:h-130 lg:w-110 lg:h-170 shadow-xl mb-5 rounded-br-md rounded-bl-md"
      />

      {/* Description */}
      <div className="flex flex-col gap-3 justify-center items-start m-5">
        <h1>
          <strong>Software Engineer</strong>
        </h1>
        <p className="max-w-md">
          Hello, I'm Zeri. I am a <strong>Licensed Electronics Engineer</strong>{" "}
          and <br /> a <strong>Licensed Electronics Technican</strong> and I am
          working as a <strong>Software Engineer</strong>.
        </p>
      </div>
    </section>
  );
}

export default Hero;
