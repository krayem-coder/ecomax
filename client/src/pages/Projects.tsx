import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Briefcase, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  title: string;
  location: string;
  capacity: string;
  description: string;
  image: string;
  gallery: string[];
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'Installation 2kWc Raccordée au Réseau',
      location: 'Sfax, Tunisie',
      capacity: '2 kWp',
      description: 'Système photovoltaïque optimisé pour l\'autoconsommation résidentielle avec injection réseau.',
      image: '/images videos/ecomax/projets/raccordé réseau/2kwc/468588599_122119189676583875_5171974393940111612_n.jpg',
      gallery: [
        '/images videos/ecomax/projets/raccordé réseau/2kwc/468588599_122119189676583875_5171974393940111612_n.jpg',
        '/images videos/ecomax/projets/raccordé réseau/2kwc/468594076_122119189550583875_2600939217046542746_n.jpg',
        '/images videos/ecomax/projets/raccordé réseau/2kwc/468621161_122119189634583875_3425540462414287703_n.jpg',
        '/images videos/ecomax/projets/raccordé réseau/2kwc/468802992_122119189502583875_1553964974494575439_n.jpg'
      ]
    },
    {
      title: 'Pompage Solaire 11.9 CV',
      location: 'Sfax, Tunisie',
      capacity: '11.9 CV',
      description: 'Solution de pompage solaire haute performance pour l\'irrigation agricole autonome.',
      image: '/images videos/ecomax/projets/pompage solaire/pompage solaire 11.9cv/470216554_122122020782583875_3344425076331925635_n.jpg',
      gallery: [
        '/images videos/ecomax/projets/pompage solaire/pompage solaire 11.9cv/470216554_122122020782583875_3344425076331925635_n.jpg',
        '/images videos/ecomax/projets/pompage solaire/pompage solaire 11.9cv/470597693_122122020020583875_2317537206276720377_n.jpg'
      ]
    },
    {
      title: 'Pompage Solaire 20 CV',
      location: 'Sfax, Tunisie',
      capacity: '20 CV',
      description: 'Installation de pompage robuste pour grandes exploitations, garantissant un débit d\'eau constant.',
      image: '/images videos/ecomax/projets/pompage solaire/pompage solaire 🌞 de 20 CV/472198229_122125605368583875_1815730941899461409_n.jpg',
      gallery: [
        '/images videos/ecomax/projets/pompage solaire/pompage solaire 🌞 de 20 CV/472198229_122125605368583875_1815730941899461409_n.jpg',
        '/images videos/ecomax/projets/pompage solaire/pompage solaire 🌞 de 20 CV/472214328_122125602620583875_3425747538536627240_n.jpg',
        '/images videos/ecomax/projets/pompage solaire/pompage solaire 🌞 de 20 CV/472220685_122125606478583875_8041085617267244072_n.jpg',
        '/images videos/ecomax/projets/pompage solaire/pompage solaire 🌞 de 20 CV/472448945_122125596596583875_2614886312840254324_n.jpg'
      ]
    },
    {
      title: 'Pompage Photovoltaïque 5.5 CV',
      location: 'Sfax, Tunisie',
      capacity: '5.5 CV',
      description: 'Système de pompage compact et efficace pour les besoins d\'irrigation de taille moyenne.',
      image: '/images videos/ecomax/projets/pompage solaire/pompage photovoltaïque 5.5 CV/471788833_122124842114583875_6255798322040875929_n.jpg',
      gallery: [
        '/images videos/ecomax/projets/pompage solaire/pompage photovoltaïque 5.5 CV/471788833_122124842114583875_6255798322040875929_n.jpg',
        '/images videos/ecomax/projets/pompage solaire/pompage photovoltaïque 5.5 CV/472256157_122124840614583875_3813294015999814808_n.jpg'
      ]
    }
  ];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section - Clean & Minimal */}
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight italic">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Une rétrospective de notre expertise sur le terrain. Des solutions solaires durables déployées avec précision.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="group cursor-pointer space-y-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 transition-all duration-500 group-hover:shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 tracking-widest uppercase">
                      {project.capacity}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-300 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 font-medium tracking-wide uppercase">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed max-w-xl">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed View Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[60]"
          >
            <X size={32} />
          </button>

          <div 
            className="relative w-full max-w-6xl aspect-[16/10] md:aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image Slider */}
            <div className="h-full w-full relative">
              <img 
                src={selectedProject.gallery[currentImageIndex]} 
                alt={`${selectedProject.title} view ${currentImageIndex + 1}`}
                className="w-full h-full object-contain animate-in fade-in zoom-in-95 duration-500"
              />
              
              {/* Controls */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8">
                <button 
                  onClick={prevImage}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              {/* Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/40 backdrop-blur-md rounded-full text-white/80 text-sm font-medium tracking-widest uppercase">
                {currentImageIndex + 1} / {selectedProject.gallery.length}
              </div>
            </div>

            {/* Project Info Overlay (Mobile friendly hide/show toggle could be added here, but keep it minimal for now) */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white pt-20 pointer-events-none">
              <h4 className="text-2xl font-bold mb-2">{selectedProject.title}</h4>
              <p className="text-white/70 text-sm uppercase tracking-widest">{selectedProject.location} • {selectedProject.capacity}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats/Proof - Clean Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Projets Agricoles", value: "5+" },
              { label: "Installations Résidentielles", value: "10+" },
              { label: "Projets Commerciaux", value: "5+" },
              { label: "Satisfaction", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">{stat.value}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
