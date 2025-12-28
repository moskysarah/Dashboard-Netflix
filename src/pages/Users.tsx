
function Users() {
    const users = [
        { name: 'Jonathan Gray', img: 'https://i.pinimg.com/736x/c2/3f/3f/c23f3fcc2cf90c4999877390be1d23a5.jpg', role: 'Admin' },
        { name: 'Damson Idriss', img: 'https://i.pinimg.com/736x/20/d0/7c/20d07c7cb2623be3a9bc542f097eb47e.jpg', role: 'User' },
        { name: 'Blaise Miguel', img: 'https://i.pinimg.com/736x/a8/de/f3/a8def35042e8ba7d0e3c024b4c4aef9a.jpg', role: 'Moderator' },
        { name: 'Maria Gruss', img: 'https://i.pinimg.com/1200x/99/88/18/998818c88c562213348721eb7836abce.jpg', role: 'User' },
        { name: 'Vanessa Milan', img: 'https://i.pinimg.com/1200x/ca/12/26/ca1226a72850d83532dff1dacd6042ae.jpg', role: 'Admin' },
        { name: 'Sarah Johnson', img: 'https://i.pinimg.com/736x/df/43/43/df43432eb483028cb51c7e21e887af95.jpg', role: 'User' },
        { name: 'Kevin Dart', img: 'https://i.pinimg.com/736x/18/4a/5b/184a5b823dbb1ee767d829d5b0184bb3.jpg', role: 'Moderator' },
        { name: 'Vergan Bless', img: 'https://i.pinimg.com/1200x/c0/19/4b/c0194ba9988d70b8ae76694e6038e22b.jpg', role: 'User' },
        { name: 'William Widom', img: 'https://i.pinimg.com/1200x/59/6a/62/596a62c9a57405df8eb484060326d1b2.jpg', role: 'Admin' },
    ];

    return (
        <div className="min-h-screen  p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-white mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    User Management Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-700"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative">
                                <img
                                    src={user.img}
                                    alt={user.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {user.role}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                                    {user.name}
                                </h3>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">Active User</span>
                                    <div className="flex space-x-2">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200">
                                            Edit
                                        </button>
                                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105">
                        Add New User
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Users;
