import zeriImage from "../../../assets/zeri.png";

function Hero() {
  return (
    <div className="flex justify-between items-center pl-10 pr-10 gap-10 bg-yellow-200/30">
      {/* Image */}
      <div className="flex justify-center items-center ml-50">
        <img
          src={zeriImage}
          alt="Zeri's Image"
          className="min-w-110 w-110 h-170"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-5 justify-center items-start mr-50">
        <h1 className="text-4xl">
          <strong>Software Engineer</strong>
        </h1>
        <h2 className="text-2xl">
          Hello, I am Zeri Aaron Malacas. I am a{" "}
          <strong>Licensed Electronics Engineer</strong> and <br /> a{" "}
          <strong>Licensed Electronics Technican</strong> and I am working as a{" "}
          <strong>Software Engineer</strong>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
