export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-10 items-center">
      {/* Imagem */}
      <div className="flex justify-center items-center">
        <div className="rounded-full bg-cyan-900 w-60 h-60" id="ImageAbout" />
      </div>

      {/* Texto e botão */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Desenvolvedor Full Stack</h1>
        <p className="text-gray-600 text-justify">
          I am a passionate developer with a love for creating user-friendly
          applications. My expertise lies in web development, particularly in
          building responsive and accessible interfaces. I enjoy innovative
          solutions. My journey in tech has been driven by curiosity and a
          desire to learn continuously.
        </p>

        <div className="flex justify-center mt-6 items-start">
          <a
            className="inline-flex items-center justify-center bg-gray-800 text-white
                       rounded-full hover:bg-gray-700 transition-colors duration-300
                       h-12 w-96 text-lg font-semibold
                       shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 cursor-pointer"
          >
            Veja meus projetos
          </a>
        </div>
      </div>
    </div>
  );
}
