import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cake, CakeSlice, Palette } from "lucide-react";

const services = [
  {
    icon: Cake,
    title: "Pasteles personalizados",
    description: "Diseños únicos creados especialmente para tu celebración.",
  },
  {
    icon: CakeSlice,
    title: "Cupcakes decorados",
    description: "Pequeñas obras de arte con sabores y decoraciones artesanales.",
  },
  {
    icon: UtensilsCrossed,
    title: "Mesas de postres",
    description: "Montajes completos que transforman tu evento en una experiencia visual.",
  },
  {
    icon: Palette,
    title: "Diseños temáticos",
    description: "Creaciones inspiradas en la temática de tu evento o celebración.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Lo que ofrecemos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Servicios</h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
            Todos los pedidos se realizan con cita previa y anticipación para garantizar la máxima calidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-background p-8 rounded-sm text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-primary">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
