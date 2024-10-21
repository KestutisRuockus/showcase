import Developer from "./Developer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="bg-grayishBlue sm:w-4/5 w-11/12 mt-10 p-6 rounded-md shadow-xl shadow-darkTaupe bg-opacity-50">
      <Navbar />
      <Developer />
    </div>
  );
}
