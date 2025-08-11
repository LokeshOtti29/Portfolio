const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-4 w-[100%]">
      <div className="flex flex-row w-full ">
        <h1 className="flex justify-end text-2xl font-bold">About Me</h1>
      </div>
      <div>
        <p className="  md:text-justify text-start whitespace-normal">
          Hi, I’m Lokesh from Mumbai, India. I’m a software developer who enjoys
          building practical and useful applications. I’m comfortable working
          with different technologies but mainly use HTML, CSS, Javascript, Typescript,
          Next.js, TailwindCSS, React.js, Node.js, Express.js, C#, .Net and
          databases like MongoDB and MySQL. I like learning new things and
          solving problems that come my way. Working with others and sharing
          ideas helps me improve and make better products. I’m always trying to
          get better at what I do and hope to contribute to projects that really
          matter.
        </p>
      </div>
    </div>
  );
};

export default About;
