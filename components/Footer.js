import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 p-6 flex justify-center w-full space-x-6">
      <Link href="/twitter">
        <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
          Twitter
        </a>
      </Link>
      <Link href="/discord">
        <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
          Discord
        </a>
      </Link>
      <Link href="/assets">
        <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
          Media Assets
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
