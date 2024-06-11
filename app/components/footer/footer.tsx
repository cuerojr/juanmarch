import SectionTitle from "@/app/components/section-title";

function Footer() {
  return (
    <>
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
                <div> I'm notoriously</div>
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
      <footer id="a-footer">
        <ul>
          <li>
            <p> All Rights Reserved © 2020 </p>
          </li>
          <li>
            <a href="https://exoape.com" target="_blank" rel="noopener">
              Alitwotimes x Exo Ape
            </a>
          </li>
          <li>
            <button data-t="">↑ Back to top</button>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
