import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Instagram } from "lucide-react";

const Booking = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ nombre: "", fecha: "", tipo: "", idea: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const msg = `Hola Madely! Me gustaría agendar una cita.\n\nNombre: ${form.nombre}\nFecha del evento: ${form.fecha}\nTipo de pedido: ${form.tipo}\nIdea del diseño: ${form.idea}`;
    window.open(`https://wa.me/528117836795?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="agenda" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Reserva tu experiencia</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Agenda tu cita</h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
            Trabajamos bajo cita para ofrecerte una atención personalizada y crear el diseño perfecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto bg-card p-8 md:p-12 rounded-sm"
        >
          <div className="space-y-5">
            <div>
              <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                Nombre
              </label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                Fecha del evento
              </label>
              <input
                name="fecha"
                type="date"
                value={form.fecha}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                Tipo de pedido
              </label>
              <select
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
              >
                <option value="">Selecciona una opción</option>
                <option value="Pastel personalizado">Pastel personalizado</option>
                <option value="Cupcakes decorados">Cupcakes decorados</option>
                <option value="Diseño temático">Diseño temático</option>
              </select>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                Idea del diseño
              </label>
              <textarea
                name="idea"
                value={form.idea}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntanos tu idea, colores, temática..."
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold uppercase tracking-[0.1em] py-3.5 rounded-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
            <a
              href="https://instagram.com/valecisnerosmadely"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body text-sm font-semibold uppercase tracking-[0.1em] py-3.5 rounded-sm hover:opacity-90 transition-opacity"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
