import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-foreground">
          Web<span className="text-primary">Studio</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Forfaits
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Témoignages
          </a>
        </div>

        <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
          Contactez-nous
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
