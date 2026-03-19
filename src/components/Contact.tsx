import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Encuéntranos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Contacto</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-8"
        >
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Ubicación</h3>
              <p className="font-body text-sm text-muted-foreground">Monterrey, Nuevo León</p>
              <p className="font-body text-xs text-muted-foreground/70 mt-1">Servicio únicamente con cita previa</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horarios</h3>
              <p className="font-body text-sm text-muted-foreground">Lunes a Sábado</p>
              <p className="font-body text-xs text-muted-foreground/70 mt-1">Solo con cita previa</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MessageCircle size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">WhatsApp</h3>
              <a
                href="https://wa.me/528117836795"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary hover:underline"
              >
                Envíanos un mensaje
              </a>
              <p className="font-body text-xs text-muted-foreground/70 mt-1">Solo mensajes, no llamadas</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Instagram size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Instagram</h3>
              <a
                href="https://instagram.com/madely"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary hover:underline"
              >
                @madely
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
