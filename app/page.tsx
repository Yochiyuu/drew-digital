// app/page.tsx
import Link from 'next/link';
// Impor ikon
import { RocketLaunchIcon, ShieldCheckIcon, PaintBrushIcon, LightBulbIcon, UsersIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      {/* Hero Section - Modifikasi di sini */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center justify-center"> {/* <--- TAMBAHKAN: min-h-screen flex items-center justify-center */}
        {/* Latar belakang gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800"></div>

        {/* Konten Hero */}
        {/* Hapus py-24 md:py-32 karena sudah ditengahkan oleh flex */}
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Inovasi Digital, Transformasi Bisnis.
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
            {/* Ganti 'Astra Digital' jadi 'Drew Digital' sesuai kode kamu */}
            Drew Digital adalah partner Anda dalam membangun solusi web dan mobile yang modern, cepat, dan intuitif untuk mendorong pertumbuhan bisnis Anda ke level berikutnya.
          </p>
          <Link
            href="/services"
            className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition duration-300
                       transform hover:scale-105 shadow-lg hover:shadow-xl">
            Jelajahi Layanan Kami
          </Link>
        </div>
      </section>

      {/* Bagian "Why Us" */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
           {/* Ganti 'Astra Digital' jadi 'Drew Digital' sesuai kode kamu */}
          Kenapa Memilih Drew Digital?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fitur 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200 transition-transform hover:-translate-y-1">
            <RocketLaunchIcon className="w-16 h-16 text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold mb-3">Performa Cepat</h3>
            <p className="text-gray-600">Website dan aplikasi yang dioptimalkan untuk kecepatan dan performa terbaik, memberikan pengalaman pengguna yang mulus.</p>
          </div>
          {/* Fitur 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200 transition-transform hover:-translate-y-1">
            <PaintBrushIcon className="w-16 h-16 text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold mb-3">Desain Modern</h3>
            <p className="text-gray-600">Desain UI/UX yang intuitif, menarik secara visual, dan berfokus pada kemudahan penggunaan untuk mencapai tujuan bisnis Anda.</p>
          </div>
          {/* Fitur 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200 transition-transform hover:-translate-y-1">
            <ShieldCheckIcon className="w-16 h-16 text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold mb-3">Aman & Handal</h3>
            <p className="text-gray-600">Implementasi solusi yang aman dengan standar industri terbaru untuk melindungi data Anda dan memastikan kehandalan sistem.</p>
          </div>
        </div>
      </section>

      {/* Bagian "Pendekatan Kami" */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Pendekatan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Poin Pendekatan 1 */}
            <div className="text-center">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Kolaborasi Aktif</h4>
              <p className="text-gray-600 text-sm">Kami percaya komunikasi terbuka dan kolaborasi erat dengan klien adalah kunci keberhasilan proyek. Kami mendengarkan kebutuhan Anda.</p>
            </div>
            {/* Poin Pendekatan 2 */}
            <div className="text-center">
              <LightBulbIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Solusi Inovatif</h4>
              <p className="text-gray-600 text-sm">Tim kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi yang tidak hanya fungsional tapi juga inovatif dan tahan masa depan.</p>
            </div>
            {/* Poin Pendekatan 3 */}
            <div className="text-center">
              <UsersIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Fokus Pada Pengguna</h4>
              <p className="text-gray-600 text-sm">Setiap desain dan fitur yang kami bangun selalu berorientasi pada pengalaman pengguna akhir, memastikan produk Anda mudah digunakan dan disukai.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}