import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Pinterest', url: '#' },
  { name: 'Behance', url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <Link href="/" className="mb-6">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-[#00b67f]">SEW</span>NA
            </div>
          </Link>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-500 hover:text-[#00b67f] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00b67f] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SEWNA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
