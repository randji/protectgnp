"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { WrenchIcon, Phone, Mail, MapPin } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/used-toast";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Slogan from "@/components/Slogan";
import Image from "next/image";
import { dmSerif } from "@/lib/fonts";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
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
      variants={staggerChildren}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé",
          description: "Nous vous contacterons bientôt.",
        });
        event.currentTarget.reset();
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      <Navbar />

      <div className="relative w-full h-[50vh] md:h-[80vh]">
        <Header />
      </div>

      <main className="flex-grow">
        <AnimatedSection>
          <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-12">
              <motion.div
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/iconecamer.png"
                    alt="camera videosurveillance"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <h2 className={`text-3xl font-bold ${dmSerif.className}`}>
                  VIDEOSURVEILLANCE
                </h2>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/unlock.png"
                    alt="camera videosurveillance"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <h2 className={`text-3xl font-bold ${dmSerif.className}`}>
                  SECURITE
                </h2>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <WrenchIcon className="text-[#114744] w-12 h-12" />
                </motion.div>
                <h2 className={`${dmSerif.className} text-3xl`}>
                  INSTALLATION
                </h2>
              </motion.div>
            </div>
            <motion.div className="md:w-1/2 mt-8 md:mt-0" variants={fadeInUp}>
              <Image
                src="/camera1.png"
                alt="Caméra de surveillance"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 px-4 bg-gray-100">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-6">
                <motion.p className="text-lg mb-4" variants={fadeInUp}>
                  Notre entreprise se distingue par son professionnalisme, sa
                  rapidité d'intervention et la qualité de ses équipements.
                </motion.p>
                <motion.p className="text-lg" variants={fadeInUp}>
                  La sécurité de votre établissement est primordiale. Nos
                  alarmes, à des prix compétitifs, préviennent les vols et les
                  dégradations en protégeant efficacement vos employés, vos
                  biens et votre commerce, tout en vous assurant une
                  tranquillité d'esprit.
                </motion.p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#114744] hover:bg-[#0d3633]">
                    Contactez-nous
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              variants={fadeInUp}
            >
              Nos Caméras de Surveillance
            </motion.h2>
            <motion.div className="w-full max-w-xl mx-auto" variants={fadeInUp}>
              <Carousel ref={emblaRef}>
                <CarouselContent>
                  {[...Array(5)].map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image
                              src={`/placeholder.svg?height=300&width=300&text=Caméra+${
                                index + 1
                              }`}
                              alt={`Caméra de surveillance ${index + 1}`}
                              width={300}
                              height={300}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 px-4 bg-gray-100">
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              variants={fadeInUp}
            >
              Contactez-nous
            </motion.h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" name="name" required />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" required />
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-[#114744] hover:bg-[#0d3633]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>
      </main>

      <AnimatedSection>
        <footer className="bg-[#114744] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">
                À propos de GNP-PROTECT
              </h3>
              <p>
                Votre partenaire de confiance pour tous vos besoins en
                vidéosurveillance et sécurité.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Produits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="mr-2" /> 01 23 45 67 89
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2" /> contact@gnp-protect.com
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" /> 123 Rue de la Sécurité, 75000
                  Paris
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div className="mt-8 text-center" variants={fadeInUp}>
            <p>&copy; 2024 GNP-PROTECT. Tous droits réservés.</p>
          </motion.div>
        </footer>
      </AnimatedSection>

      <Toaster />
    </div>
  );
}
