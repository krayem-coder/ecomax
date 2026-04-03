import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const CONTACT_HERO_IMAGE = '/backround images/240_F_336301102_17vyr7sr47lPiL4AhcUJtlepUwnISErJ.jpg';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Votre message a été envoyé avec succès !');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+216 20 393 508',
      link: 'tel:+21620393508',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact.ecomaxenergie@gmail.com',
      link: 'mailto:contact.ecomaxenergie@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Route Manzel Chaker, Sfax, Tunisie',
      link: 'https://google.com/maps/place/ECOMAX/data=!4m2!3m1!1s0x0:0x46793a96e9ac56a9',
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun - Ven : 8h00 - 18h00',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Unified Hero Section */}
      <section className="relative pt-48 pb-36 flex items-center justify-center min-h-[600px] overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url('${CONTACT_HERO_IMAGE}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-md rounded-full text-white font-bold text-sm tracking-widest uppercase mb-4 border border-white/10">
            Contactez ECO MAX
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
            Contactez nos experts <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8 italic">en énergie solaire</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Votre autonomie énergétique simplifiée.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50 relative -mt-10 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">Cliquez pour nous contacter</p>
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-900 hover:text-accent transition-colors font-bold text-lg whitespace-nowrap block overflow-hidden text-ellipsis"
                  >
                    {info.value}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
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
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="Votre téléphone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Notre localisation
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8213275698963!2d10.756389!3d34.740901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46793a96e9ac56a9!2sECOMAX!5e0!3m2!1sfr!2stn!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Suivez-nous</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/ecomaxenergie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/eco.maxenergie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/21620393508"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
