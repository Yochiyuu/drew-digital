// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Astra Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;