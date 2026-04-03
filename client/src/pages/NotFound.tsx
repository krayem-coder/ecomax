import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-4">Page non trouvée</h2>
            <p className="text-xl text-gray-200 mb-8">
              Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          <Link href="/">
            <a className="btn-primary inline-block">
              Retourner à l'accueil
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
