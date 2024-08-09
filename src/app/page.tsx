import Image from "next/image";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col">
      <section className="flex flex-col justify-center md:px-20">
        <h1 className="text-blue-800 text-[3rem] font-extrabold">Una excelente experiencia <span className="text-blue-400">Odontológica</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugiat exercitationem illum. Totam facilis in similique magni quos earum sit deserunt explicabo! Earum, dolores. Fugit quas ipsum qui iure libero.</p>
        <div className="flex mt-10 items-center gap-11">
          <button className="bg-cyan-600 text-white px-8 py-3 rounded-xl ">Saca tu turno</button>
          <p className="underline">Nuestros servicios</p>
        </div>
      </section>
      <figure className="w-[90%]">
        <Image className="object-contain" src={'/img.png'} width={900} height={900} alt="image1" />
      </figure>
    </main>
  )
}
