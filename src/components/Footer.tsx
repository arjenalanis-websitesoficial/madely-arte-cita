const Footer = () => (
  <footer className="py-8 bg-foreground">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-lg font-semibold text-background/90 mb-2">Madely</p>
      <p className="font-body text-xs text-background/50 tracking-wide">
        Hecho con amor y detalle · Monterrey, NL · © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
