import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { staggerPresets } from "@/components/ui/AnimationPresets";

const Slogan = () => {
  return (
    <AnimatedSection>
      <div className="relative bg-[#114744] text-white py-12 px-4 text-center">
        <motion.h2
          className="text-3xl font-bold"
          variants={staggerPresets.fadeInUp.child}
        >
          GNP-PROTECT <br />
          votre partenaire de confiance pour l'installation de votre matériel
          de surveillance
        </motion.h2>
      </div>
    </AnimatedSection>
  );
};

export default Slogan;
