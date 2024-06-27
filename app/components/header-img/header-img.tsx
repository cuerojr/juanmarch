import Image from "next/image";

export default function HeaderImg() {
  return (
    <header className="min-h-screen relative overflow-hidden">
      <div className="px-[7.7vw]">
        <div className="grid relative grid-cols-12 gap-2 mb-2 z-20">
          <div className="col-start-1 col-end-8 overflow-hidden pt-[10rem] pl-[10px]">
            <div className="text-mask">
              <div className="block text-start relative text-sm text-slate-100 ">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-start relative text-sm text-slate-100">
                adipiscing elit. Sed vel erat dui.
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-start relative text-sm text-slate-100">
                Nulla facilisi. Integer justo quam.
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-13 overflow-hidden">
            <div className="text-mask">
              <div className="block text-left relative text-[16vw] leading-none text-slate-100 ">
                Experiencia
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-left relative text-[16vw] leading-none text-slate-100">
                Diseño
              </div>
            </div>
            <div className="text-mask">
              <div className="block text-left relative text-[16vw] leading-none text-slate-100">
                Digital
              </div>
            </div>
          </div>
          <div className="col-start-1 sm:col-start-4 col-end-13 sm:col-end-11 overflow-hidden"></div>
        </div>
      </div>
      <Image
        src={`/city.webp`}
        alt={``}
        // //height={420}
        // //width={300}
        // fill
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`absolute top-0 left-0 right-0 z-10`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      />
    </header>
  );
}
