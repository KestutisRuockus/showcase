import contacts from '../data/contacts.json'

const Contacts = () => {

    return (
        <div
          className="text-white text-md flex lg:flex-row flex-col flex-wrap justify-center gap-8 bg-grayishBlue bg-opacity-50 w-4/5 mt-14 px-5 py-14 rounded-md
         shadow-xl shadow-darkTaupe font-bold relative mb-20"
        >
          <div className="absolute left-4 top-4 text-white text-lg underline underline-offset-1 cursor-default">
            Contacts
          </div>
          
          {/* Email */}
          <div className="flex sm:gap-10 gap-14">
              <h3 className="text-slate-400 w-1/12 ">Email:</h3>
              <p
                className="break-all w-full"
              >
                {contacts.email}
              </p>
            </div>

            {/* Github */}
          <div className="flex sm:gap-10 gap-14">
              <h3 className="text-slate-400 w-1/12 ">Github:</h3>
              <a
                href={contacts.github}
                target="_blank"
                className="break-all w-full"
              >
                {contacts.github}
              </a>
            </div>

            {/* LinkedIn */}
          <div className="flex sm:gap-10 gap-14">
              <h3 className="text-slate-400 w-1/12">LinkedIn:</h3>
              <a
                href={contacts.linkedin}
                target="_blank"
                className="break-all w-full"
              >
                {contacts.linkedin}
              </a>
            </div>
        </div>
      );
}

export default Contacts