// app/services/[slug]/page.tsx
import { servicesData, Service } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'; // Impor tipe Metadata

// 1. Definisikan tipe untuk props, termasuk 'params'
type ServiceDetailPageProps = {
  params: {
    slug: string; // 'slug' harus sama dengan nama folder [slug]
  }
}

// 2. Fungsi untuk mencari data berdasarkan slug
// Kita bisa memberi tipe 'Service | undefined' sebagai return
function getServiceBySlug(slug: string): Service | undefined {
  const service = servicesData.find((s) => s.slug === slug);
  return service;
}

// 3. generateStaticParams (Opsional, tapi bagus untuk performa)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 4. Komponen Halaman, gunakan tipe 'ServiceDetailPageProps'
export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/services" className="text-blue-600 hover:underline mb-4 block">
          &larr; Kembali ke Layanan
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {service.details}
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Ringkasan Singkat</h4>
          <p className="text-gray-700">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

// 5. (Opsional) generateMetadata dengan TypeScript
export async function generateMetadata(
  { params }: ServiceDetailPageProps
): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return { 
      title: 'Layanan Tidak Ditemukan' 
    };
  }

  return {
    title: `${service.title} - Astra Digital`,
    description: service.description,
  };
}