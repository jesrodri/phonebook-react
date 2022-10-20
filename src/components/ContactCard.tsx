type Contacts = {
  contacts: {
    results: Array<Object>;
  }
}

const ContactCard: Function = ({contacts}: Contacts) => {
  return(
    contacts.results.map((contact: any) => {
      return(
        <div className="h-fit w-fit p-2 m-4 rounded bg-slate-400">
          <figure className="bg-white h-80 rounded-lg shadow-md pt-7">
            <img
              alt="contact"
              className="w-32 h-32 rounded-full mx-auto"
              src={contact.picture.large}
            />
            <figcaption className="text-center mt-5">
              <p className="text-gray-700 font-semibold text-xl mb-2">
                {contact.name.first} {contact.name.last}
              </p>
              <p className="text-gray-500">e-mail: {contact.email}</p>
              <p>phone: {contact.phone}</p>
              <p>cell: {contact.cell}</p>
            </figcaption>
          </figure>
        </div>
      )
    })
  );
}

export default ContactCard;
