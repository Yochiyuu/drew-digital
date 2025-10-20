// app/services/[slug]/page.tsx
import { servicesData, Service } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Pastikan @heroicons/react sudah terinstall

// 1. Definisikan tipe untuk props (seharusnya sudah ada)
type ServiceDetailPageProps = {
  params: {
    slug: string;
  }
}

// ## TAMBAHKAN KEMBALI FUNGSI INI ##
// 2. Fungsi untuk mencari data berdasarkan slug
function getServiceBySlug(slug: string): Service | undefined {
  const service = servicesData.find((s) => s.slug === slug);
  return service;
}
// ## AKHIR FUNGSI YANG HILANG ##

// 3. generateStaticParams (seharusnya sudah ada)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 4. Komponen Halaman (gunakan fungsi yang sudah ditambahkan)
export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = params;
  const service = getServiceBySlug(slug); // Sekarang fungsi ini sudah dikenal

  if (!service) {
    notFound();
  }

  return (
    // Beri padding atas dan bawah
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Link Kembali */}
        <div className="mb-8">
          <Link href="/services" className="text-blue-600 hover:underline inline-flex items-center">
            <ArrowRightIcon className="w-4 h-4 mr-2 transform rotate-180" />
            Kembali ke Semua Layanan
          </Link>
        </div>

        {/* Bungkus konten dalam 'article' dengan style */}
        <article className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {service.title}
          </h1>

          {/* Detail Lengkap */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {service.details}
          </p>

          {/* Kotak Ringkasan (Highlight Box) */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-semibold text-lg text-blue-800 mb-2">Ringkasan Layanan</h4>
            <p className="text-blue-700">{service.description}</p>
          </div>
        </article>

      </div>
    </div>
  );
}

// 5. (Opsional) generateMetadata (seharusnya sudah ada)
export async function generateMetadata(
  { params }: ServiceDetailPageProps
): Promise<Metadata> {
  const service = getServiceBySlug(params.slug); // Panggil fungsi yang sudah ada

  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan'
    };
  }

  return {
    title: `${service.title} - Drew Digital`,
    description: service.description,
  };
}