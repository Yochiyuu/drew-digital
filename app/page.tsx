// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Selamat Datang di Astra Digital
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Solusi Digital Inovatif untuk Mendorong Bisnis Anda.
        </p>
        <Link 
          href="/services" 
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Lihat Layanan Kami
        </Link>
      </section>
    </div>
  );
}