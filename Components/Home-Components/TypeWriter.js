import TypewriterComponent from "typewriter-effect";

function TypeWriter() {
  return (
    <TypewriterComponent
      options={{
        strings: ["Frontend Developer", "Junior Developer", "Web Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
