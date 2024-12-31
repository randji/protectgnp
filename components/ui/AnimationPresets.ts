import { Variants } from "framer-motion";

//Types pour les variants
type StaggerVariants = Variants;
type ChildVariants = Variants;

//Type pour un preset complet
type StaggerPreset = {
  parent: StaggerVariants;
  child: ChildVariants;
};

//type pour la collection de presets
type StaggerPresetCollection = {
  [key: string]: StaggerPreset;
};

//Définition des variants avec typage
export const staggerVariants: StaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Collection de toutes les animations
export const animationVariants = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },

  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },

  scaleUp: {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },

  slideInLeft: {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
};

export const childVariants: ChildVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Collection de presets mise à jour
export const staggerPresets: StaggerPresetCollection = {
  default: {
    parent: staggerVariants,
    child: childVariants,
  },

  fadeInUp: {
    parent: { hidden: {}, visible: {} },
    child: animationVariants.fadeInUp
  },

  fadeIn: {
    parent: { hidden: {}, visible: {} },
    child: animationVariants.fadeIn
  },

  scaleUp: {
    parent: { hidden: {}, visible: {} },
    child: animationVariants.scaleUp
  },

  slideInLeft: {
    parent: { hidden: {}, visible: {} },
    child: animationVariants.slideInLeft
  },

  // Les presets avec staggering
  staggerFadeIn: {
    parent: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.2 } }
    },
    child: animationVariants.fadeIn
  }
};

// Type pour l'utilisation des presets
export type PresetType = keyof typeof staggerPresets;