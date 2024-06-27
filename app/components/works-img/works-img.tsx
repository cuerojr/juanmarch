import Image from "next/image";

export default function WorksImg() {
  return (
    <section className="min-h-screen px-[7.7vw] py-[14.30vw]">
      <h2 className="block text-left  text-[16vw] leading-none text-slate-900 ml-[7.7vw] mb-[6.8vw]">
        Work
      </h2>
      <div className="grid  grid-cols-12 gap-2 mb-2 z-20">
        <div className="col-start-2 col-end-8 overflow-hidden">
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
        <div className="col-start-9 col-end-13 overflow-hidden mt-[29vw]">
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
        <div className="col-start-6 col-end-11 overflow-hidden mt-[11.5vw]">
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
        <div className="col-start-2 col-end-5 overflow-hidden mt-[-10vw]">
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
