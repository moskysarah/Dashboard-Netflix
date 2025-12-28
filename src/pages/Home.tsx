// src/pages/Home.tsx
export default function Home() {
  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Banner */}
      <div
        className="relative w-full h-80 rounded-lg overflow-hidden mb-12"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/ef/c0/01/efc0018a5a3290b96a2ba1898f4b42b7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded">
          <h2 className="text-3xl font-bold mb-2">Featured Movie: Small</h2>
          <p className="text-gray-300 max-w-md">
            A thrilling story that will keep you on the edge of your seat. Don’t
            miss this masterpiece.
          </p>
          <a
            href="#"
            className="inline-block mt-3 py-2 px-6 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#B20710] transition-colors"
          >
            Watch
          </a>
        </div>
      </div>

      {/* Sections de films */}
      <div className="space-y-12">
        {/* Section Populaire */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Popular Movies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: "The Boy",
                img: "https://i.pinimg.com/1200x/10/e1/a7/10e1a72b4903c3c423679657594fbe96.jpg",
              },
              {
                title: "Evil Death",
                img: "https://i.pinimg.com/1200x/ba/40/43/ba40432f34f70baadc8ab510adb6986f.jpg",
              },
              {
                title: "Smile",
                img: "https://i.pinimg.com/736x/ef/c0/01/efc0018a5a3290b96a2ba1898f4b42b7.jpg",
              },
              {
                title: "Thinks Giving",
                img: "https://i.pinimg.com/1200x/8b/9a/5d/8b9a5d2c2c77fda25d39076ca03a76ed.jpg",
              },
              {
                title: "A Nightmare ",
                img: "https://i.pinimg.com/736x/4d/06/7f/4d067f0ecf691ab95571da60ea9bbb62.jpg",
              },
            ].map((movie, idx) => (
              <div
                key={idx}
                className="bg-[#141414] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
                  <a
                    href="#"
                    className="inline-block py-2 px-4 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#B20710] transition-colors"
                  >
                    Watch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Nouveautés */}
        <section>
          <h3 className="text-2xl font-bold mb-4">New Releases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: "The Texas Chain",
                img: "https://i.pinimg.com/1200x/15/d5/cf/15d5cf41880d50e704d0c69eb1fcc89b.jpg",
              },
              {
                title: "A Quiet Place",
                img: "https://i.pinimg.com/1200x/db/69/15/db69154d747c95d89abbb5ad7d1b69c2.jpg",
              },
              {
                title: "From",
                img: "https://i.pinimg.com/1200x/8b/fe/4a/8bfe4ae049311ba50a55b42bae93b11d.jpg",
              },
              {
                title: "Us",
                img: "https://i.pinimg.com/1200x/ea/86/df/ea86dfeb4e731b526bd5178fac8c81fe.jpg",
              },
              {
                title: "The Popes Exorcist",
                img: "https://i.pinimg.com/1200x/b9/a7/19/b9a71988da381486f662a9377a979d39.jpg",
              },
            ].map((movie, idx) => (
              <div
                key={idx}
                className="bg-[#141414] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
                  <a
                    href="#"
                    className="inline-block py-2 px-4 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#B20710] transition-colors"
                  >
                    Watch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Recommandé */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Recommended For You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Insidious",
                img: "https://i.pinimg.com/736x/3b/2c/e2/3b2ce230ef0d951dd427465dbefdd11d.jpg",
              },
              {
                title: "Bring Born",
                img: "https://i.pinimg.com/1200x/b7/2c/9b/b72c9ba884c60da098d809bd231467e5.jpg",
              },
              {
                title: "Freaky Friday",
                img: "https://i.pinimg.com/736x/72/c4/5c/72c45cc9ed7d75d5d6debd19a1c08776.jpg",
              },
              {
                title: "Hunt",
                img: "https://i.pinimg.com/1200x/50/a3/93/50a39347520b8c810484e8767a054245.jpg",
              },
              {
                title: "Scream",
                img: "https://i.pinimg.com/736x/59/cf/c9/59cfc9cbdf340d3fef157bc2859536d6.jpg",
              },
            ].map((movie, idx) => (
              <div
                key={idx}
                className="bg-[#141414] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
                  <a
                    href="#"
                    className="inline-block py-2 px-4 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#B20710] transition-colors"
                  >
                    Watch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export { Home };