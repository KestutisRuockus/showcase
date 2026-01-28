import personImg from "../assets/person.png";
import description from "../data/developerText.json";
export default function Developer() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-center items-center gap-12 mt-24 w-4/5"
    >
      {/* photo */}
      <img className="rounded-full" src={personImg} alt="person" width={240} />
      {/* Title */}
      <div className="w-4/5 lg:w-2/4">
        <div className="text-3xl font-bold text-blue-600">
          Front-end React Developer
        </div>
        {/* Content about me */}
        <div className="text-xl  text-black">
          <span style={{ whiteSpace: "pre-line", fontSize: 16 }}>
            {description.about}
          </span>
        </div>
      </div>
    </section>
  );
}
