// data/services.ts

// 1. Definisikan tipe untuk objek layanan
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  details: string;
}

// 2. Beri tipe pada array data
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    description: "Kami membangun website modern, responsif, dan cepat menggunakan teknologi terbaru seperti React, Next.js, dan Node.js.",
    details: "Detail lengkap tentang web development... Kami mencakup frontend dan backend, memastikan pengalaman pengguna yang mulus dan performa yang optimal."
  },
  {
    id: 2,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Solusi aplikasi mobile cross-platform (React Native) dan native (Swift/Kotlin) untuk iOS dan Android.",
    details: "Detail lengkap tentang mobile app development... Dari ide hingga peluncuran di App Store dan Play Store, kami menangani seluruh siklus hidup pengembangan aplikasi."
  },
  {
    id: 3,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Desain antarmuka yang intuitif dan pengalaman pengguna yang memikat untuk produk digital Anda.",
    details: "Detail lengkap tentang UI/UX Design... Proses kami melibatkan riset pengguna, wireframing, prototyping, dan pengujian usability untuk menciptakan produk yang disukai pengguna."
  }
];