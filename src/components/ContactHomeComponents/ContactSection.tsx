import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative flex items-center justify-center p-30 px-10 lg:px-20">
      {/* Background Image with Overlay */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/bg-1.jpg')] relative p-30 px-5 sm:px-10 xl:px-40 rounded-3xl w-full">
        <div className="bg-white rounded-tr-3xl rounded-bl-3xl absolute w-50 h-12 bottom-[-1px] left-0 z-10"></div>
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        <div className="container mx-auto md:px-4 relative z-10 bg-white w-full rounded-3xl overflow-hidden">
          <div className="flex justify-center">
            <img
              src="/h1_shape.png"
              className="absolute bottom-[-10px] left-[-10px] w-80 h-80 z-[-1]"
              alt=""
            />
            <img
              src="/h1_shape.png"
              className="absolute bottom-[-10px] right-[-20px] w-100 h-100 z-[-1]"
              alt=""
            />
            <ContactForm />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default ContactSection;
