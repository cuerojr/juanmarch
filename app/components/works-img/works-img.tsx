import Image from "next/image";

export default function WorksImg() {
  return (
    <section className="min-h-screen px-[7.7vw] py-[14.30vw]">
      <h2 className="block text-left  text-[16vw] leading-none text-slate-900 ml-[7.7vw] mb-[6.8vw]">
        Work
      </h2>
      <div className="grid  grid-cols-12 gap-2 mb-2 z-20">
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-8 overflow-hidden mb-5 sm:mb-0">
          <Image
            src={"/movies.webp"}
            alt={"/movies.webp"}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13 overflow-hidden mb-5 sm:mb-0 sm:mt-[29vw]">
          <Image
            src={"/building.webp"}
            alt={"/building.webp"}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-6 sm:col-end-11 overflow-hidden mb-5 sm:mb-0 sm:mt-[11.5vw]">
          <Image
            src={"/river.webp"}
            alt={"/river.webp"}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-5 overflow-hidden sm:mt-[-10vw]">
          <Image
            src={"/dancer.webp"}
            alt={"/dancer.webp"}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
