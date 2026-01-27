const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-foreground">
            Web<span className="text-primary">Studio</span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">CGV</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2026 WebStudio. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
