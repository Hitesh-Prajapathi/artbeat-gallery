function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2 shadow-md">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl sm:text-2xl tracking-tight">Artbeat</h1>
              <p className="text-pink-100 text-xs hidden sm:block">Your Performing Arts Store</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:text-pink-200 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="hover:text-pink-200 transition-colors duration-200 font-medium">Gallery</a>
            <a href="#" className="hover:text-pink-200 transition-colors duration-200 font-medium">About</a>
            <a href="#" className="hover:text-pink-200 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
