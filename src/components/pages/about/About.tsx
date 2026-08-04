import me from "../../../assets/me.jpg";

function About() {
  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-10 mb-10">
        <article className="flex justify-center items-center">
          <img
            src={me}
            alt="Zeri's picture"
            className="md:w-110 md:h-150 lg:w-150 lg:h-190 object-fit"
          />
        </article>
        <article className="flex flex-1 flex-col gap-3 justify-center items-start">
          <h1 className="font-bold text-4xl">Software Engineer</h1>
          <p className="text-wrap text-left">
            Hi, I'm Zeri Aaron, a Software Engineer passionate about building
            modern, scalable, and user-focused applications. I specialize in
            frontend development with React and modern JavaScript technologies,
            while continuously expanding my knowledge in backend systems and
            software engineering practices.
          </p>
        </article>
      </section>
      {/* <div className="flex bg-[#a8dadc] shadow-xl flex-row justify-center items-center h-30 -mx-3 md:-mx-5 lg:-mx-10">
        <h1 className="font-bold text-4xl">My Journey</h1>
      </div> */}
      {/* <section>
        <article className="bg-[#e63946] flex flex-col justify-start items-center  my-10 p-10 shadow-xl rounded-2xl">
          <p className="text-white w-300 text-justify">
            With a background in Electronics Engineering, I developed a strong
            foundation in problem-solving, analytical thinking, and technology.
            My curiosity about software led me to explore programming and
            eventually transition into software engineering. Today, I work as an
            Application Development and Support Engineer, where I gain
            experience in enterprise applications, system analysis, debugging,
            and software solutions. I continue to grow my skills in modern
            software development, focusing on building reliable and user-focused
            applications.
          </p>
        </article>
        <article>
          <h1></h1>
        </article> */}
      {/* </section> */}
    </>
  );
}

export default About;
