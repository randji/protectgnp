import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  imageSrc?: string;
  logoSrc?: string;
  alt?: string;
  logoAlt?: string;
};
const Header = ({
  imageSrc = "/camera2.webp",
  alt = "Installation de caméra de surveillance",
  logoSrc = "/logognb.png",
  logoAlt = "logo gnb protect",
}: HeaderProps) => {
  return (
    <header className="relative w-full h-[55vh] md:h-[80vh] shadow-2xl">
      <div>
        <div className="absolute top-44 md:top-40 left-10 md:left-52 z-10 text-black">
          <h1 className="text-4xl  md:text-6xl font-bold lg:text-7xl mb-10 md:mb-28">
            GNP-PROTECT
          </h1>
        </div>

        <div className="absolute bottom-24 md:bottom-40 z-10 text-black left-1/2 transform -translate-x-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-nowrap">
            votre partenaire de confiance
          </h2>
        </div>
        <div className="absolute bottom-10 z-10 left-1/2 transform -translate-x-1/2 ">
          <Button variant="header" size="sm">
            Contactez-nous
          </Button>
        </div>
        <div>
          <motion.div className=" relative w-full h-[55vh] md:h-[80vh]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
