import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ProjectGalleryProps {
  title: string;
  description: string;
  images: GalleryImage[];
}

export default function ProjectGallery({ title, description, images }: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg mb-2">{image.title}</h4>
              <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
              <div className="mt-4 text-green-400 font-semibold text-sm">
                Cliquez pour voir plus →
              </div>
            </div>

            {/* Icon */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-60"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-4xl">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain"
            />

            {/* Image Info */}
            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
              <p className="text-gray-300 text-lg mb-4">{currentImage.description}</p>
              <p className="text-gray-400 text-sm">
                {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${images.length}` : ''}
              </p>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={goToPrevious}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 overflow-x-auto px-4 max-w-2xl">
                  {images.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex
                          ? 'border-green-400 scale-110'
                          : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
