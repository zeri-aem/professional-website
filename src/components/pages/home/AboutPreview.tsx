import Button from "../../common/Button";

function AboutPreview() {
  return (
    <section className="flex flex-col justify-center items-start gap-5 p-10">
      <h1 className="font-bold text-4xl">About</h1>
      {/* Description - p tag */}
      <p className="text-justify text-wrap max-w-md">
        I'm a Software Engineer passionate about building reliable and
        user-focused applications. I enjoy solving projects through code and
        continuously improving my skills in modern technologies, software
        development, and data-driven solutions...
      </p>
      <Button to="/about">See more...</Button>
    </section>
  );
}

export default AboutPreview;
