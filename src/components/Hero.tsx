import { motion } from "framer-motion";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="Pastel elegante de bodas con detalles dorados y rosas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-foreground/70 mb-4"
        >
          Monterrey, Nuevo León
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
        >
          Vale Cisneros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-xl md:text-2xl italic text-foreground/80 mb-10"
        >
          Arte en repostería para momentos únicos
        </motion.p>
        <motion.a
          href="#agenda"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block font-body text-sm font-semibold uppercase tracking-[0.15em] bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:opacity-90 transition-opacity"
        >
          Agenda tu cita
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-foreground/30 mx-auto mb-2" />
        <p className="font-body text-xs uppercase tracking-[0.2em] text-foreground/40">Descubre</p>
      </motion.div>
    </section>
  );
};

export default Hero;
