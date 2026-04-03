import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { Sun } from 'lucide-react';

const HERO_IMAGE = '/backround images/panneau-solaire-600w-prix-tunisie.jpg';

const GOVERNORATES = [
  'Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba',
  'Kairouan', 'Kasserine', 'Kébili', 'Le Kef', 'Mahdia', 'La Manouba',
  'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
];

export default function Quote() {
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    status: string;
    type: string;
    governorate: string;
    stegRef: string;
    message: string;
    invoiceFile: File | null;
  }>({
    name: '',
    phone: '',
    status: '',
    type: '',
    governorate: '',
    stegRef: '',
    message: '',
    invoiceFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({
      ...prev,
      invoiceFile: file || null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.status || !formData.type || !formData.governorate) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Votre demande a été envoyée avec succès ! Nous vous contacterons très bientôt.');
      setFormData({
        name: '',
        phone: '',
        status: '',
        type: '',
        governorate: '',
        stegRef: '',
        message: '',
        invoiceFile: null,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      {/* Unified Hero Section */}
      <section className="relative pt-48 pb-36 flex items-center justify-center min-h-[600px] overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            Obtenez votre devis solaire gratuit
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium">
            Optimisez votre consommation avec nos solutions solaires sur mesure.
          </p>

        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Formulaire de devis en ligne gratuit</h2>
            <p className="text-gray-600 text-center mb-8">
              Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Nom et Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Foulen Ben Foulen"
                    className="w-full pr-10 pl-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 98 123 456"
                    className="w-full pr-10 pl-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Status and Type Row */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="status" className="block text-sm font-bold text-gray-900 mb-2">
                    Êtes-vous ? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 appearance-none"
                  >
                    <option value="">Choisir une option</option>
                    <option value="owner">Propriétaire</option>
                    <option value="tenant">Locataire</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-bold text-gray-900 mb-2">
                    Type de local <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 appearance-none"
                  >
                    <option value="">Choisir le type</option>
                    <option value="residential">Résidentiel</option>
                    <option value="agricultural">Agricole</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* Governorate */}
              <div>
                <label htmlFor="governorate" className="block text-sm font-bold text-gray-900 mb-2">
                  Ville (Gouvernorat) <span className="text-red-500">*</span>
                </label>
                <select
                  id="governorate"
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleChange}
                  required
                  className="w-full pr-10 pl-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 appearance-none"
                >
                  <option value="">Sélectionnez votre gouvernorat</option>
                  {GOVERNORATES.map((gov) => (
                    <option key={gov} value={gov}>{gov}</option>
                  ))}
                </select>
              </div>

              {/* STEG Reference */}
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="font-bold text-gray-900">Référence STEG</p>
                    <p className="text-sm text-gray-600">Veuillez saisir votre numéro de référence ou importer une photo de votre facture.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    name="stegRef"
                    value={formData.stegRef}
                    onChange={handleChange}
                    placeholder="N° de Référence STEG (ex: 12345678)"
                    className="w-full pl-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />

                  <div className="text-center text-gray-600">OU</div>

                  <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-red-300 rounded-lg cursor-pointer hover:bg-red-50 transition-colors">
                    <span className="text-2xl">📸</span>
                    <span className="text-sm font-semibold text-gray-700">Importer une photo de la facture</span>
                    <input
                      type="file"
                      name="invoiceFile"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                  {formData.invoiceFile && (
                    <p className="text-sm text-green-600">✓ Fichier sélectionné: {formData.invoiceFile.name}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                  Entrer un message (Optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Vos besoins spécifiques, détails du toit, etc."
                  className="w-full pr-10 pl-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Sun size={20} />
                {isSubmitting ? 'Envoi en cours...' : 'Demander mon devis gratuit'}
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              Notre équipe vous contactera dans les 24 heures pour discuter de votre projet
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Devis Gratuit</h3>
              <p className="text-gray-600">Obtenez votre devis sans engagement</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapide</h3>
              <p className="text-gray-600">Réponse dans les 24 heures</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fiable</h3>
              <p className="text-gray-600">Équipe professionnelle et expérimentée</p>
            </div>
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Besoin d'aide ?</h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous directement pour toute question ou pour accélérer votre demande de devis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+21620393508"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                📞 +216 20 393 508
              </a>
              <a
                href="https://wa.me/21620393508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
