
import { useState } from "react";

function Films() {
    const [selectedGenre, setSelectedGenre] = useState('All');

    const genres = ['All', 'Action', 'Drama', 'Comedy', 'Thriller', 'Sci-Fi', 'Romance', 'Horror'];

    const films = [
        {
            title: 'Red Notice',
            year: 2010,
            rating: 8.8,
            genre: 'Sci-Fi',
            poster: 'https://i.pinimg.com/736x/f0/91/3e/f0913e68b2b1557a643395837493b52c.jpg',
            description: 'A thief who steals corporate secrets through dream-sharing technology.'
        },
        {
            title: 'The Dark Knight',
            year: 2008,
            rating: 9.0,
            genre: 'Action',
            poster: 'https://i.pinimg.com/1200x/e1/be/ba/e1beba4500110a247f963fdc654008bb.jpg',
            description: 'Batman faces the Joker in Gotham City.'
        },
        {
            title: 'Pulp Fiction',
            year: 1994,
            rating: 8.9,
            genre: 'Crime',
            poster: 'https://i.pinimg.com/1200x/9c/c2/60/9cc26009207088e8bf548abb07210db6.jpg',
            description: 'The lives of two mob hitmen intertwine with those of a boxer and his wife.'
        },
        {
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 9.3,
            genre: 'Drama',
            poster: 'https://i.pinimg.com/736x/82/64/aa/8264aab7222cf2c4805c47729344b085.jpg',
            description: 'Two imprisoned men bond over a number of years.'
        },
        {
            title: 'Forrest Gump',
            year: 1994,
            rating: 8.8,
            genre: 'Drama',
            poster: 'https://i.pinimg.com/1200x/e6/8d/ea/e68deae04042b4e5307625b05154e2cb.jpg',
            description: 'The presidencies of Kennedy and Johnson unfold through the eyes of an Alabama man.'
        },
        {
            title: 'The Matrix',
            year: 1999,
            rating: 8.7,
            genre: 'Sci-Fi',
            poster: 'https://i.pinimg.com/1200x/44/ed/85/44ed852dd3f2a463ce2d448d4ae607ff.jpg',
            description: 'A computer hacker learns about the true nature of reality.'
        },
        {
            title: 'Goodfellas',
            year: 1990,
            rating: 8.7,
            genre: 'Crime',
            poster: 'https://i.pinimg.com/1200x/d7/52/7f/d7527f50abf1c0d2114a4054408d5218.jpg',
            description: 'The story of Henry Hill and his life in the mob.'
        },
        {
            title: 'The Silence of the Lambs',
            year: 1991,
            rating: 8.6,
            genre: 'Thriller',
            poster: 'https://i.pinimg.com/736x/ff/a1/7f/ffa17fcd8940e75e9ed2651109c800f5.jpg',
            description: 'A young FBI cadet must receive the help of an incarcerated cannibal killer.'
        }
    ];

    const filteredFilms = selectedGenre === 'All' ? films : films.filter(film => film.genre === selectedGenre);

    return (
        <div className="min-h-screen  p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-white mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    Film Catalog
                </h1>

                {/* Genre Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {genres.map(genre => (
                        <button
                            key={genre}
                            onClick={() => setSelectedGenre(genre)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                                selectedGenre === genre
                                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            {genre}
                        </button>
                    ))}
                </div>

                {/* Films Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredFilms.map((film, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-700"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                            <div className="relative">
                                <img
                                    src={film.poster}
                                    alt={film.title}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {film.year}
                                </div>

                                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                                    ★ {film.rating}
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm line-clamp-3">{film.description}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                                    {film.title}
                                </h3>

                                <div className="flex items-center justify-between">
                                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {film.genre}
                                    </span>
                                    <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105">
                                        Watch Now
                                    </button>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>

                {filteredFilms.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-bold text-gray-400 mb-4">No films found</h3>
                        <p className="text-gray-500">Try selecting a different genre.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Films;
