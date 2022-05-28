import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          priority
          src={`https://images.unsplash.com/photo-1614951841462-92cb7e25f7fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 h-full bg-black bg-opacity-40 text-white flex flex-col justify-center items-start w-full">
          <div className="md:w-[70%] ml-10 lg:ml-40 xl:ml-60 xl:w-[60%]">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl tracking-wide xl:leading-snug font-extrabold">
              {" "}
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-20 grid grid-cols-3 place-items-center">
        <div>
          <h1 className="text-4xl font-bold leading-relaxed"> Address</h1>
          <p className="text-xl font-semibold text-slate-800">
            Name <br />
            street <br />
            city
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold leading-relaxed">Contact us</h1>
          <p className="text-xl font-semibold text-slate-800">
            Name <br />
            street <br />
            city
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold leading-relaxed">Social Medias</h1>
          <p className="text-xl font-semibold text-slate-800">
            Name <br />
            street <br />
            city
          </p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15731.087810676037!2d80.04231435!3d9.7004949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1653721592018!5m2!1sen!2slk"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
