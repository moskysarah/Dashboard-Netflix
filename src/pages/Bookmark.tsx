


import { useState } from "react";

interface BookmarkItem {
    id: number;
    title: string;
    year: number;
    rating: number;
    genre: string;
    poster: string;
    description: string;
    dateAdded: string;
}

function Bookmark() {
    const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([
        {
            id: 1,
            title: 'Inception',
            year: 2010,
            rating: 8.8,
            genre: 'Sci-Fi',
            poster: 'https://i.pinimg.com/736x/f0/91/3e/f0913e68b2b1557a643395837493b52c.jpg',
            description: 'A thief who steals corporate secrets through dream-sharing technology.',
            dateAdded: '2024-01-15'
        },
        {
            id: 2,
            title: 'The Dark Knight',
            year: 2008,
            rating: 9.0,
            genre: 'Action',
            poster: 'https://i.pinimg.com/1200x/e1/be/ba/e1beba4500110a247f963fdc654008bb.jpg',
            description: 'Batman faces the Joker in Gotham City.',
            dateAdded: '2024-01-12'
        },
        {
            id: 3,
            title: 'Pulp Fiction',
            year: 1994,
            rating: 8.9,
            genre: 'Crime',
            poster: 'https://i.pinimg.com/1200x/9c/c2/60/9cc26009207088e8bf548abb07210db6.jpg',
            description: 'The lives of two mob hitmen intertwine with those of a boxer and his wife.',
            dateAdded: '2024-01-10'
        },
        {
            id: 4,
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 9.3,
            genre: 'Drama',
            poster: 'https://i.pinimg.com/736x/82/64/aa/8264aab7222cf2c4805c47729344b085.jpg',
            description: 'Two imprisoned men bond over a number of years.',
            dateAdded: '2024-01-08'
        }
    ]);

    const removeBookmark = (id: number) => {
        setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
    };

    return (
        <div className="min-h-screen  p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                        My Bookmarks
                    </h1>
                    <p className="text-gray-400 text-lg">
                        {bookmarks.length} {bookmarks.length === 1 ? 'item' : 'items'} saved
                    </p>
                </div>

                {bookmarks.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-4">No bookmarks yet</h3>
                        <p className="text-gray-500 mb-8">Start exploring films and add them to your bookmarks!</p>
                        <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105">
                            Browse Films
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {bookmarks.map((bookmark) => (
                            <div
                                key={bookmark.id}
                                className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-700"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                <div className="relative">
                                    <img
                                        src={bookmark.poster}
                                        alt={bookmark.title}
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />

                                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {bookmark.year}
                                    </div>

                                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                                        ★ {bookmark.rating}
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm line-clamp-3">{bookmark.description}</p>
                                    </div>

                                    <button
                                        onClick={() => removeBookmark(bookmark.id)}
                                        className="absolute top-4 right-16 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110"
                                        title="Remove from bookmarks"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                                        {bookmark.title}
                                    </h3>

                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {bookmark.genre}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            Added {bookmark.dateAdded}
                                        </span>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105">
                                        Watch Now
                                    </button>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Bookmark;
