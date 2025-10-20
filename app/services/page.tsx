// app/services/page.tsx
import Link from 'next/link';
// Impor data dan tipe-nya
import { servicesData, Service } from '@/data/services'; 

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Layanan Kami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* TypeScript akan tahu bahwa 'service' memiliki tipe 'Service' */}
        {servicesData.map((service: Service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href={`/services/${service.slug}`} 
                className="text-blue-600 font-semibold hover:underline">
                Pelajari Lebih Lanjut &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}