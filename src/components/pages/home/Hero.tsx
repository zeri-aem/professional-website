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
        <h1 className="font-bold text-4xl">Software Engineer</h1>
        <p className="max-w-2xl text-justify">
          Hello, I'm Zeri - a Software Engineer with an Electronics Engineering
          foundation.
          <br />
          <br />I build scalable software solutions while combining my expertise
          in frontend development, data engineering and electronics systems. As
          a{" "}
          <strong>
            Licensed Electronics Engineer and Electronics Technician
          </strong>
          , I bring a unique perspective that bridges the gap between hardware
          and software.
        </p>
      </div>
    </section>
  );
}

export default Hero;
