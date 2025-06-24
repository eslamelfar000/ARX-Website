import { AnimatedElement } from "../animations/AnimationType";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative flex items-center justify-center p-20 px-10 lg:px-20">
      {/* Background Image with Overlay */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/bg-1.jpg')] relative p-30 px-5 sm:px-10 xl:px-40 rounded-3xl w-full">
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        {/* shapes */}
        <div className="cover z-10 absolute top-0 left-0 w-full h-full">
          <div
            className="absolute bottom-[59px] left-[-1px] bg-white w-[30px] h-[30px] rounded-br-2xl rotate-[0deg]"
            style={{
              clipPath: ' path("M0 0 Q0,30 30,30 L 0 30 Z")',
            }}
          ></div>
          <div className="absolute bottom-0 left-0 bg-white w-[170px] h-[60px] rounded-tr-3xl"></div>
          <div
            className="absolute bottom-[-1px] left-[167px] bg-white w-[30px] h-[30px] rounded-tr-4xl rotate-[0deg]"
            style={{
              clipPath: ' path("M0 0 Q0,30 30,30 L 0 30 Z")',
            }}
          ></div>
        </div>
        {/* end shapes */}
        <div className="container mx-auto md:px-4 relative z-10 bg-white w-full rounded-3xl overflow-hidden">
          <div className="flex justify-center">
            <div className="absolute bottom-[-10px] left-[-10px] z-[-1]">
              <AnimatedElement
                type="slideRight"
                duration={3}
                className="w-full h-full"
              >
                <img src="/h1_shape.png" className=" w-80 h-80 z-[-1]" alt="" />
              </AnimatedElement>
            </div>

            <div className="absolute bottom-[-10px] right-[-20px] z-[-1]">
              <AnimatedElement
                type="slideLeft"
                duration={3}
                className="w-full h-full"
              >
                <img
                  src="/h1_shape.png"
                  className=" w-100 h-100 z-[-1] "
                  alt=""
                />
              </AnimatedElement>
            </div>

            <div className="cover">
              <AnimatedElement
                type="slideUp"
                duration={3}
                className="w-full h-full"
              >
                <ContactForm />
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default ContactSection;
