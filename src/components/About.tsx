import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { title: "Diseños personalizados", description: "Cada creación es única, hecha a la medida de tus sueños." },
  { title: "Calidad artesanal", description: "Ingredientes selectos y técnicas de alta repostería." },
  { title: "Atención con cita", description: "Dedicamos tiempo exclusivo para entender tu visión." },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Sobre nosotros</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Madely
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            En Madely transformamos ideas en arte comestible, cuidando cada detalle para hacer de tu evento algo inolvidable. Cada pastel es una pieza única, creada con pasión y dedicación artesanal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center p-8"
            >
              <div className="w-px h-8 bg-primary mx-auto mb-6" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
