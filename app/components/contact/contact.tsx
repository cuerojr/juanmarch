import SectionTitle from "@/app/components/section-title";

function Contact() {
  return (
      <section className="min-h-screen container bg-[#fcf6f4] py-[11.806vw] px-[6.25vw]">
        <SectionTitle
          props={{
            preTitle: `Contacto`,
            title: `Contacto`,
          }}
        />
        <div className="mb-[9.028vw] ml-[22.153vw]">
          <h2 className="font-semibold text-[12vw] leading-[11.25vw] space-x-[-0.05em] whitespace-nowrap tracking-tighter">
            <a
              href="https://alitwotimes.com/contact/"
              data-transition="contact"
            >
              <div className="line">
                <div> Get in touch </div>
              </div>
            </a>
          </h2>
        </div>
        <div className="mb-[5.556vw] ml-[22.153vw]">
          <div className="mb-4">
            <h3 className="font-semibold text-[4.167vw] leading-[4.67vw] tracking-tighter uppercase">
              <div className="line">
                <div> Im notoriously</div>
              </div>
              <div className="line">
                <div> slow at getting</div>
              </div>
              <div className="line">
                <div> back to emails </div>
              </div>
            </h3>
          </div>
          <p className="font-semibold text-[0.972vw] leading-[1.111vw] tracking-tighter uppercase">
            In a hurry? please
            <a
              href="https://alitwotimes.com/contact/"
              data-transition="contact"
            >
              contact
            </a>
            my awesome producers
          </p>
        </div>
      </section>
  );
}

export default Contact;
