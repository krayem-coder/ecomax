import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '21620393508'; // +216 20 393 508 without +
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Bonjour,%20je%20suis%20intéressé%20par%20vos%20solutions%20solaires.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      title="Contactez-nous sur WhatsApp"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
