import { motion } from "framer-motion";
import Image from "next/image";
import { staggerPresets } from "@/components/ui/AnimationPresets";
import AnimatedSection from "./ui/AnimatedSection";
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
    <header className="relative w-full h-[50vh] md:h-[80vh] shadow-2xl drop-shadow-lg">
      <div>
        <div className="absolute top-24 md:top-40 left-4 md:left-52 z-10 text-black">
          <h1 className="text-4xl  md:text-6xl font-bold lg:text-7xl mb-10 md:mb-28">
            GNP-PROTECT
          </h1>
        </div>
        <div className="absolute bottom-28 md:bottom-40 left-4 z-10 text-black">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            votre partenaire de confiance pour l'installation de votre matériel
            de surveillance
          </h2>
        </div>
        <div className="absolute bottom-10 md:bottom-20 z-10 left-1/2 transform -translate-x-1/2">
          <Button variant="header" size="lg">
            Contactez-nous
            </Button>
        </div>
        <div>
          <motion.div className=" relative w-full h-[50vh] md:h-[80vh]">
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
