// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    // Ganti jadi footer terang dengan border atas
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Brand */}
          <div>
            <Link href="/" className="font-bold text-2xl text-blue-700">
              Drew Digital
            </Link>
            <p className="text-gray-500 mt-2 text-sm">
              Solusi digital inovatif untuk mentransformasi bisnis Anda.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">Tentang Kami</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-blue-600 text-sm">Layanan</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">Kontak</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Layanan Utama</h4>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="text-gray-600 hover:text-blue-600 text-sm">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-gray-600 hover:text-blue-600 text-sm">Mobile Apps</Link></li>
              <li><Link href="/services/ui-ux-design" className="text-gray-600 hover:text-blue-600 text-sm">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Hubungi</h4>
            <p className="text-gray-600 text-sm">info@drewdigital.com</p>
            <p className="text-gray-600 text-sm">(+62) 123-456-789</p>
          </div>
        </div>

        {/* Bagian Copyright Bawah */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Astra Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;