import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Hospital Building',
      category: 'Infrastructure',
    },
    {
      url: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Reception Area',
      category: 'Infrastructure',
    },
    {
      url: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Modern Hospital Corridor',
      category: 'Infrastructure',
    },
    {
      url: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Patient Room',
      category: 'Rooms',
    },
    {
      url: 'https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Medical Equipment',
      category: 'Equipment',
    },
    {
      url: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Operation Theater',
      category: 'Facilities',
    },
    {
      url: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Laboratory',
      category: 'Equipment',
    },
    {
      url: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Doctor Consultation',
      category: 'Services',
    },
    {
      url: 'https://images.pexels.com/photos/3958464/pexels-photo-3958464.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Patient Care',
      category: 'Services',
    },
    {
      url: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Emergency Services',
      category: 'Facilities',
    },
    {
      url: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Maternity Ward',
      category: 'Rooms',
    },
    {
      url: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Waiting Area',
      category: 'Infrastructure',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.85), rgba(31, 78, 121, 0.85)), url(https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-100">
            Take a Virtual Tour of Our Modern Hospital
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our state-of-the-art facilities, modern infrastructure, and patient-friendly
              environment through our photo gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold text-lg">{image.caption}</p>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            Visit Our Hospital
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Experience our world-class facilities in person. Schedule a visit or consultation
            with our expert medical team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="tel:9515379249"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Call: 9515379249
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
