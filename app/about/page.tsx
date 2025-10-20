// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Tentang Kami
      </h1>
      <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
        <p>
          Astra Digital adalah agensi digital yang berfokus pada penyediaan solusi teknologi canggih untuk klien di seluruh dunia. Kami percaya pada kekuatan inovasi untuk mengubah bisnis.
        </p>
        <p>
          Misi kami adalah membantu klien mencapai potensi penuh mereka melalui pengembangan web, aplikasi seluler, dan strategi digital yang efektif.
        </p>
      </div>
    </div>
  );
}