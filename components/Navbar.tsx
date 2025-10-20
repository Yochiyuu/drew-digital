// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    // Tambah: sticky top-0 z-50 border-b border-gray-200
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Ganti nama kembali ke Astra Digital jika mau */}
        <Link href="/" className="font-bold text-2xl text-blue-700 hover:text-blue-800 transition-colors">
          Drew Digital
        </Link>
        {/* Sembunyikan di mobile, tampilkan di medium ke atas */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">Tentang Kami</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium">Layanan</Link>
          {/* Ubah link Kontak jadi tombol CTA */}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md">
            Hubungi Kami
          </Link>
        </div>
        {/* (Di proyek nyata, di sini Anda akan menambah tombol burger menu untuk mobile) */}
      </div>
    </nav>
  );
}

export default Navbar;