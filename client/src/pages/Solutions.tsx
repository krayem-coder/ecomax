import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Home, Tractor, Building2, Zap, CheckCircle2 } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Home,
      title: 'Résidentiel',
      subtitle: 'Pour maisons et petits bâtiments',
      description: 'Installez des panneaux solaires sur votre toiture pour réduire vos factures d\'électricité et gagner en indépendance énergétique.',
      image: '/images videos/ecomax/images/résidentiel.jpg',
      advantages: [
        'Réduction de 60 à 80% des factures',
        'Augmentation de la valeur du bien',
        'Aides gouvernementales disponibles',
        'Amortissement en 7 à 10 ans',
      ],
      color: 'from-blue-50 to-blue-100',
      accentColor: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Tractor,
      title: 'Agricole',
      subtitle: 'Pour exploitations et fermes',
      description: 'Solutions solaires pour le pompage de l\'eau, l\'électrification des bâtiments agricoles et la réduction des coûts d\'exploitation.',
      image: '/images videos/ecomax/images/agricole.jpg',
      advantages: [
        'Pompage autonome sans carburant',
        'Électrification des zones rurales',
        'Réduction drastique des coûts',
        'Durabilité et respect de l\'environnement',
      ],
      color: 'from-green-50 to-green-100',
      accentColor: 'bg-green-100 text-green-700',
    },
    {
      icon: Building2,
      title: 'Commercial',
      subtitle: 'Pour entreprises et commerces',
      description: 'Systèmes solaires adaptés aux besoins énergétiques importants des bâtiments commerciaux et tertiaires.',
      image: '/images videos/ecomax/images/commerciale .jpg',
      advantages: [
        'Réduction significative des charges',
        'Image verte et RSE renforcée',
        'Rentabilité garantie',
        'Amortissement rapide',
      ],
      color: 'from-orange-50 to-orange-100',
      accentColor: 'bg-orange-100 text-orange-700',
    },
    {
      icon: Zap,
      title: 'Industriel',
      subtitle: 'Pour grandes installations',
      description: 'Centrales solaires et solutions à grande échelle pour les industries et les collectivités avec des besoins énergétiques importants.',
      image: '/images videos/ecomax/images/industriel.jpg',
      advantages: [
        'Puissance adaptée à vos besoins',
        'Rendement optimisé',
        'Intégration au réseau électrique',
        'Retour sur investissement certain',
      ],
      color: 'from-purple-50 to-purple-100',
      accentColor: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos solutions solaires
            </h1>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à chaque secteur pour maximiser votre production d'énergie et vos économies.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="rounded-xl overflow-hidden shadow-lg h-96">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${solution.accentColor}`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Solution</p>
                          <h2 className="text-4xl font-bold text-gray-900">{solution.title}</h2>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-6">{solution.subtitle}</p>
                      <p className="text-gray-700 mb-8 leading-relaxed">{solution.description}</p>

                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Avantages</h3>
                        <ul className="space-y-3">
                          {solution.advantages.map((advantage, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                              <span className="text-gray-700">{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/quote">
                        <a className="btn-primary inline-block">
                          Demander un devis pour {solution.title.toLowerCase()}
                        </a>
                      </Link>
                    </div>
                  </div>

                  {index < solutions.length - 1 && (
                    <div className="border-t border-gray-200 mt-20"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quelle solution vous convient ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nos experts vous aideront à choisir la meilleure solution solaire adaptée à vos besoins
          </p>
          <Link href="/quote">
            <a className="inline-block bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300">
              Obtenir un devis gratuit
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
