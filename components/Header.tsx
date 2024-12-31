import { motion } from "framer-motion";

type HeaderProps = {
  imageSrc?: string;
  alt?: string;
};
const Header = ({
  imageSrc = "/hero1.jpeg",
  alt = "Installation de caméra de surveillance",
}: HeaderProps) => {
  return (
    <header className="relative w-full h-full flex items-center justify-center mt-16">
      <motion.div className="absolute inset-0 z-0">
        <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </header>
  );
};

export default Header;
