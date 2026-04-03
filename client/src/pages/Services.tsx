import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sun, Zap, Leaf, TrendingUp, Award, Users } from 'lucide-react';

const SERVICES_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663308445010/WFcpuDgACN7X6A3ZWGjPoj/645210920_122203592006583875_8306250731478081547_n_bef29a96.jpg';

export default function Services() {
  const services = [
    {
      icon: Sun,
      title: 'Conseil énergétique',
      description: 'Audit complet et recommandations personnalisées pour optimiser votre consommation énergétique.',
      benefits: [
        'Diagnostic énergétique complet',
        'Recommandations personnalisées',
        'Étude de faisabilité technique',
        'Analyse financière et ROI',
      ],
      process: [
        'Visite sur site et collecte de données',
        'Analyse approfondie de la consommation',
        'Rapport détaillé avec recommandations',
      ],
    },
    {
      icon: Zap,
      title: 'Ingénierie et études',
      description: 'Conception et dimensionnement de solutions solaires adaptées à vos besoins spécifiques.',
      benefits: [
        'Conception sur mesure',
        'Dimensionnement optimal',
        'Simulation de performance',
        'Conformité aux normes',
      ],
      process: [
        'Analyse des besoins énergétiques',
        'Conception technique détaillée',
        'Validation et approbation',
      ],
    },
    {
      icon: Leaf,
      title: 'Installation professionnelle',
      description: 'Exécution et mise en place de systèmes solaires avec les meilleures pratiques du secteur.',
      benefits: [
        'Installation conforme aux normes',
        'Équipe certifiée et expérimentée',
        'Respect des délais',
        'Qualité garantie',
      ],
      process: [
        'Préparation du site',
        'Installation des panneaux et équipements',
        'Tests et mise en service',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Pilotage et supervision',
      description: 'Monitoring en temps réel et optimisation continue de vos installations solaires.',
      benefits: [
        'Suivi en temps réel',
        'Alertes automatiques',
        'Optimisation de performance',
        'Rapports mensuels',
      ],
      process: [
        'Installation du système de monitoring',
        'Configuration des alertes',
        'Suivi continu et optimisation',
      ],
    },
    {
      icon: Award,
      title: 'Maintenance et support',
      description: 'Maintenance préventive et curative pour assurer la performance maximale de vos systèmes.',
      benefits: [
        'Maintenance préventive régulière',
        'Support technique 24/7',
        'Pièces de rechange disponibles',
        'Garantie étendue',
      ],
      process: [
        'Inspection périodique',
        'Nettoyage et entretien',
        'Interventions correctives si nécessaire',
      ],
    },
    {
      icon: Users,
      title: 'Approvisionnement matériel',
      description: 'Fourniture et gestion de matériel solaire de qualité supérieure et certifié.',
      benefits: [
        'Matériel certifié et garanti',
        'Meilleurs prix du marché',
        'Livraison rapide',
        'Support technique inclus',
      ],
      process: [
        'Sélection du matériel adapté',
        'Commande et logistique',
        'Installation et support',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Nos services</h1>
            <p className="text-xl text-gray-200">
              Une gamme complète de services pour accompagner votre projet solaire de A à Z.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3">Avantages :</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-3">Processus en 3 étapes :</h4>
                    <ol className="space-y-2">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={SERVICES_IMAGE}
              alt="Services EcoMax"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Pourquoi choisir nos services ?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Expertise reconnue</h3>
                  <p className="text-gray-700">
                    Plus de 10 ans d'expérience dans les solutions solaires et énergies renouvelables.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Équipe certifiée</h3>
                  <p className="text-gray-700">
                    Professionnels qualifiés et certifiés dans tous les domaines de l'énergie solaire.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Support complet</h3>
                  <p className="text-gray-700">
                    Accompagnement du projet de conception à la maintenance long terme.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Qualité garantie</h3>
                  <p className="text-gray-700">
                    Matériel certifié et installation conforme aux normes internationales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nos services peuvent vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-primary">
              Demander un devis
            </a>
            <a href="/contact" className="btn-secondary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
