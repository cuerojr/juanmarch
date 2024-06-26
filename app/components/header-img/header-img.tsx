import Image from "next/image";

export default function HeaderImg() {
  return (
    <header className="min-h-screen relative overflow-hidden">
      <div className="px-[7.7vw]">
        <div className="grid relative grid-cols-12 gap-2 mb-2 z-20">
          <div className="col-start-1 col-end-8 overflow-hidden pt-[30vw] pl-[10px]">
            <div className="text-mask">
              <div className="block text-start relative text-xl text-slate-100 leading-tight">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-start relative text-xl text-slate-100 leading-tight">
                adipiscing elit. Sed vel erat dui.
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-start relative text-xl text-slate-100 leading-tight">
                Nulla facilisi. Integer justo quam.
              </div>
            </div>
          </div>
          <h1 className="col-start-1 col-end-13 overflow-hidden mt-[8vw] mb-[6.8vw]">
            <div className="text-mask">
              <div className="block text-left relative text-[16vw] text-slate-100 leading-tight">
                Experiencia
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-left relative text-[16vw] text-slate-100 leading-tight">
                Diseño
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-left relative text-[16vw] text-slate-100 leading-tight">
                Digital
              </div>
            </div>
          </h1>
          <div className="col-start-1 sm:col-start-1 col-end-7 sm:col-end-7 overflow-hidden mb-[6vw]">
            <p className="text-slate-100 text-xl leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elementum iaculis nulla, quis egestas massa. In ac enim purus.
              Maecenas ac fermentum odio. Pellentesque vel congue arcu.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={`/city.webp`}
        alt={``}
        className={`absolute top-0 left-0 right-0 z-10`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        loading="lazy"
        width={500}
        height={800}
      />
    </header>
  );
}
