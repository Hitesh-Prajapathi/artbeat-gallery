function ImageGrid({ images, loading }) {
  if (loading)
    return <div className="text-center text-xl text-emerald-500">Loading...</div>;
  if (!images.length)
    return <div className="text-center text-lg text-gray-600">No images found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {images.map((img) => (
        <div key={img.id} className="rounded overflow-hidden shadow-lg bg-white">
          <img
            src={img.urls.small}
            alt={img.alt_description || "Art image"}
            className="w-full h-60 object-cover"
          />
          <div className="p-2 text-sm text-center">{img.alt_description}</div>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
