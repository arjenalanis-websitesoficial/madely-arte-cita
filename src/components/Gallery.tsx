import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryEvents from "@/assets/gallery-events.jpg";
import galleryCupcakes from "@/assets/gallery-cupcakes.jpg";
import galleryThemed from "@/assets/gallery-themed.jpg";
import heroCake from "@/assets/hero-cake.jpg";
import galleryThemed2 from "@/assets/gallery-themed-2.jpg";
import galleryBirthday2 from "@/assets/gallery-birthday-2.jpg";
import galleryEvents2 from "@/assets/gallery-events-2.jpg";
import galleryFairy from "@/assets/gallery-fairy.jpg";
import galleryGarfield from "@/assets/gallery-garfield.jpg";
import galleryMonsters from "@/assets/gallery-monsters.jpg";
import galleryJurassic from "@/assets/gallery-jurassic.jpg";
import galleryBlippi from "@/assets/gallery-blippi.jpg";
import galleryRatatouille from "@/assets/gallery-ratatouille.jpg";
import galleryBarbie from "@/assets/gallery-barbie.jpg";
import galleryMario from "@/assets/gallery-mario.jpg";

const categories = ["Todos", "Cumpleaños", "Bodas", "Eventos", "Cupcakes", "Temáticos"];

const galleryItems = [
  { src: galleryBirthday, alt: "Pastel de cumpleaños elegante", category: "Cumpleaños" },
  { src: galleryWedding, alt: "Pastel de bodas con rosas", category: "Bodas" },
  { src: galleryEvents, alt: "Mesa de postres para evento", category: "Eventos" },
  { src: galleryCupcakes, alt: "Cupcakes artesanales decorados", category: "Cupcakes" },
  { src: galleryThemed, alt: "Pastel temático infantil", category: "Temáticos" },
  { src: heroCake, alt: "Pastel de bodas dorado", category: "Bodas" },
  { src: galleryThemed2, alt: "Pastel temático musical con figuras", category: "Temáticos" },
  { src: galleryBirthday2, alt: "Pastel infantil de ositos cariñosos", category: "Cumpleaños" },
  { src: galleryEvents2, alt: "Pastel temático Super Bowl NFL", category: "Eventos" },
  { src: galleryFairy, alt: "Pastel de hadas con hongos y mariposas", category: "Temáticos" },
  { src: galleryGarfield, alt: "Pastel temático de Garfield", category: "Cumpleaños" },
  { src: galleryMonsters, alt: "Pastel de Monsters Inc con Sulley y Mike", category: "Temáticos" },
  { src: galleryJurassic, alt: "Pastel de Jurassic World con dinosaurios", category: "Cumpleaños" },
  { src: galleryBlippi, alt: "Pastel de Blippi con maquinaria", category: "Cumpleaños" },
  { src: galleryRatatouille, alt: "Pastel de Ratatouille con Remy", category: "Temáticos" },
  { src: galleryBarbie, alt: "Pastel de Barbie Spa Party", category: "Cumpleaños" },
  { src: galleryMario, alt: "Pastel de Super Mario Bros y Sonic", category: "Temáticos" },
];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Nuestro trabajo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Galería</h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-sm transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src + item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-sm group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
