import Link from "next/link";
import Image from "next/image";

type SocialLink = {
  href: string;
  icon: React.ReactNode;
  hovercolor: string;
};

const defaultSocialLinks: SocialLink[] = [
  {
    href: "https://facebook.com",
    icon: <Image src="/facebook.png" alt="Facebook" width={24} height={24} />,
    hovercolor: "hover:text-blue-600",
  },
  {
    href: "https://twitter.com",
    icon: <Image src="/twitter.png" alt="Twitter" width={24} height={24} />,
    hovercolor: "hover:text-blue-400",
  },
  {
    href: "https://instagram.com",
    icon: <Image src="/instagram.png" alt="Instagram" width={24} height={24} />,
    hovercolor: "hover:text-pink-600",
  },
];

type NavbarProps = {
  logoSrc?: string;
  companyName?: string;
  socialLinks?: SocialLink[];
  bgColor?: string;
};

const Navbar = ({
  logoSrc = "/logognb.png",
  companyName = "GNP-PROTECT",
  socialLinks = defaultSocialLinks,
  bgColor = "bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg",
}: NavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 
    max-w-[100vw] overflow-x-hidden
    flex items-center justify-between 
    px-2 sm:px-4 py-2
    ${bgColor}`}
    >
      <div className="flex items-center">
        <Image
          src={logoSrc}
          alt="Logo"
          width={100}
          height={100}
          className="h-10 w-10 mr-2"
        />
      </div>
      <div className="text-lg sm:text-xl font-bold text-[#0f1b1b] truncate">
        {companyName}
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`text-[#0f1b1b] ${link.hovercolor} transition-colors`}
            >
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

{
  /* const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center">
        <img src="/logognb.png" alt="Logo" className="h-10 w-10 mr-2" />
      </div>
      <div className="text-xl font-bold text-[#114744]">GNP-PROTECT</div>
      <div className="flex items-center space-x-4">
        {socialLinks.map((link, index) => (
            <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            >
                <div className={`text-[#114744] ${link.hovercolor} transition-colors`}>
                    {link.icon}
                </div>
            </Link>
        ))}

      </div>
      
    </nav>
  );
}; */
}

export default Navbar;
