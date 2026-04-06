import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Sun, Home, Tractor, Building2, Zap, TrendingUp, Leaf, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Images du Google Drive
const HERO_IMAGE = 'https://drive.google.com/uc?id=1oJvO8OhP_qV_p2koU7IV38tW66coXtKH&export=view';
const SECTION3_IMAGE = 'https://drive.google.com/uc?id=1ZAm2J2E9BWeyyQ2Kbjdf0A-lwws2p7j4&export=view';

export default function HomePage() {
  const services = [
    {
      icon: Sun,
      title: 'Conseil énergétique',
      description: 'Analyse et conseil personnalisés pour votre projet.',
    },
    {
      icon: Zap,
      title: 'Installation',
      description: 'Installation experte de vos équipements solaires.',
    },
    {
      icon: TrendingUp,
      title: 'Maintenance',
      description: 'Suivi régulier pour optimiser votre rendement.',
    },
    {
      icon: Shield,
      title: 'Garantie & Support',
      description: 'Garantie performance et assistance technique 24/7.',
    },
  ];

  const sectors = [
    {
      icon: Home,
      title: 'Résidentiel',
      description: 'Solutions solaires pour maisons et petits bâtiments',
      link: '/solutions',
    },
    {
      icon: Tractor,
      title: 'Agricole',
      description: 'Pompage solaire et électrification des exploitations',
      link: '/solutions',
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Systèmes solaires pour entreprises et commerces',
      link: '/solutions',
    },
    {
      icon: Zap,
      title: 'Industriel',
      description: 'Centrales solaires et solutions à grande échelle',
      link: '/solutions',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Minimal Hero Section */}
      <section className="relative pt-48 pb-36 flex items-center justify-center min-h-[600px] overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: "url('/backround images/240_F_336301088_sUvAJq36iEWehtYWKdDz1nzy7Zxyy6Zh.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              L'Énergie Solaire <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8 italic">Réinventée</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Solutions photovoltaïques premium pour votre indépendance énergétique totale.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Link href="/quote">
                <a className="bg-accent text-white hover:bg-accent/90 px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 text-lg">
                  Demander une solution gratuite
                </a>
              </Link>
              <Link href="/solutions">
                <a className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl border border-white/30 px-10 py-5 rounded-full font-bold transition-all duration-300 text-lg">
                  Nos solutions
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean & Minimal */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Clients satisfaits", value: "100+" },
              { label: "Puissance installée", value: "+50 KW" },
              { label: "Années d'expérience", value: "5+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-accent uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Experts Section - Split Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Services List */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent font-bold text-sm tracking-widest uppercase">
                  Nos Services Experts
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Solutions Solaires <br />
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">Sur Mesure</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  ECO MAX vous accompagne de l'étude préliminaire jusqu'à la maintenance de votre installation photovoltaïque.
                </p>
              </div>

              <div className="space-y-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={28} className="text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <Link href="/solutions">
                <a className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all duration-300 group">
                  En savoir plus sur nos solutions
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Link>
            </motion.div>

            {/* Right Side: Industrial Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] blur-3xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
                <img 
                  src="/proj-4-3.jpg" 
                  alt="ECO MAX Installation Industrielle" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      +5
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Années d'expertise</div>
                      <div className="text-sm text-gray-600 italic">Leader en Tunisie</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fused Video & Engagement Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('/blog-s-2-2.jpg')] bg-cover"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Engagement & Quality */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent font-bold text-sm tracking-widest uppercase">
                  Notre Engagement
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Qualité & <br />
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">Performance</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-xl">
                  Nous vous offrons bien plus qu'une simple installation : un accompagnement sur le long terme pour votre autonomie énergétique.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Leaf,
                    title: 'Écologique',
                    description: 'Réduisez radicalement votre empreinte carbone et participez à la transition.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Économique',
                    description: 'Réalisez des économies immédiates et significatives sur vos factures.',
                  },
                  {
                    icon: Shield,
                    title: 'Fiable & Garanti',
                    description: 'Matériel certifié Tier-1 avec une garantie de performance de 25 ans.',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side: Video with Controls */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-3xl opacity-50"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-black aspect-[9/16] max-w-[320px] mx-auto">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src="/images videos/ecomax/video.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Carousel */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">NOS PARTENAIRES</h2>
            <p className="text-xl text-gray-500 italic font-medium mt-2">Ils nous font confiance</p>
            <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-12 md:px-16 py-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {[
                { name: "BNA BANK", logo: "/logos/bna.png" },
                { name: "AMEN BANK", logo: "/logos/Amen-Bank.x60352.jpg" },
                { name: "GIZ", logo: "/logos/giz.png" },
                { name: "STEG", logo: "/logos/steg.png" },
                { name: "UIB", logo: "/logos/UIB.png" },
                { name: "BIAT", logo: "/logos/biat.png" },
                { name: "ATTIJARI", logo: "/logos/attijari.png" },
                { name: "ANME", logo: "/logos/anme.png" },
                { name: "SUNGROW", logo: "/logos/sungrow.png" },
                { name: "VEICHI", logo: "/logos/veichi.png" },
                { name: "CANADIAN SOLAR", logo: "/logos/canadien.png" },
                { name: "AE SOLAR", logo: "/logos/AE SOLAR.png" },
                { name: "LONGI", logo: "/logos/longi.png" }
              ].map((partner, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-1 h-full flex">
                    <div 
                      className="w-full flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-accent/40 hover:shadow-lg transition-all duration-300 min-h-[140px] cursor-pointer"
                    >
                      {partner.logo ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-[80px] w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      ) : (
                        <span className="text-xl font-bold text-gray-300 uppercase tracking-wide text-center group-hover:text-gray-900 transition-colors">
                          {partner.name}
                        </span>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 size-10 md:size-12 border-2 border-gray-200 text-gray-600 hover:text-accent hover:border-accent hover:bg-white shadow-xl bg-white flex items-center justify-center rounded-full z-10 transition-all duration-200" />
            <CarouselNext className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 size-10 md:size-12 border-2 border-gray-200 text-gray-600 hover:text-accent hover:border-accent hover:bg-white shadow-xl bg-white flex items-center justify-center rounded-full z-10 transition-all duration-200" />
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
}
