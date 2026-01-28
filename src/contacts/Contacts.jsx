import { useState } from "react";
import contacts from "../data/contacts.json";

const Contacts = () => {
  const [emailIsCopied, setEmailIscopied] = useState(false);

  const copyEmailOnClick = (email) => {
    navigator.clipboard.writeText(email);
    setEmailIscopied(true);

    setTimeout(() => {
      setEmailIscopied(false);
    }, 2000);
  };

  return (
    <section
      id="contacts"
      className="text-black text-md flex lg:flex-row flex-col flex-wrap justify-center gap-8 sm:w-4/5 w-11/12 px-5 my-8 font-semibold relative"
    >
      <div className="absolute left-4 top-4 text-white text-lg underline underline-offset-1 cursor-default">
        Contacts
      </div>

      {/* Email */}
      <div className="flex flex-wrap relative">
        <h3 className="text-lg text-slate-400 w-1/12 ">Email:</h3>
        <p
          onClick={() => copyEmailOnClick(contacts.email)}
          className="break-all w-full text-base cursor-pointer"
        >
          {contacts.email}
        </p>
        <div
          className={`${
            emailIsCopied ? "opacity-100" : "opacity-0"
          } absolute -bottom-5 left-0 text-sm text-green-600 cursor-default transition-opacity duration-300`}
        >
          Email was copied!
        </div>
      </div>

      {/* Github */}
      <div className="flex flex-wrap">
        <h3 className="text-lg text-slate-400 w-1/12 ">Github:</h3>
        <a
          href={contacts.github}
          target="_blank"
          className="break-all w-full text-base"
        >
          {contacts.github}
        </a>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-wrap">
        <h3 className="text-lg text-slate-400 w-1/12">LinkedIn:</h3>
        <a
          href={contacts.linkedin}
          target="_blank"
          className="break-all w-full text-base"
        >
          {contacts.linkedin}
        </a>
      </div>
    </section>
  );
};

export default Contacts;
