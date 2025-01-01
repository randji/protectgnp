import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { staggerPresets, PresetType } from "@/components/ui/AnimationPresets";

type AnimatedSectionProps = {
  children: React.ReactNode;
  preset?: PresetType;  // Utilise le type PresetType
  delay?: number;
};

const AnimatedSection = ({ 
  children, 
  preset = "default",  // Preset par défaut
  // delay = 0.2 
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerPresets[preset].parent}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;