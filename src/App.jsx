import { useState } from "react";
import axios from "axios";
import ImageSearchForm from "./components/ImageSearchForm";
import ImageGrid from "./components/ImageGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchImages = async (query) => {
    setLoading(true);
    setSearchTerm(query);
    try {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=K2KqrEI_ObT1NaRDAmQB9lWsG_6HDtRKHlYNu8S16YU`;
      const res = await axios.get(url);
      setImages(res.data.results);
    } catch (err) {
      console.error("Error fetching images:", err);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-4">
            Artbeat Gallery
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the world of performing arts - dance, music, painting, instruments and more
          </p>
        </div>

        <ImageSearchForm onSearch={fetchImages} />
        <ImageGrid images={images} loading={loading} searchTerm={searchTerm} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
