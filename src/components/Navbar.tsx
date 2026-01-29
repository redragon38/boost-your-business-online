import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Web<span className="text-primary">Studio</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "#services" },
              { label: "Forfaits", href: "#pricing" }
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity relative overflow-hidden group"
              asChild
            >
              <a href="mailto:l.bonin38@gmail.com?subject=Démarrer%20mon%20projet%20-%20WebStudio&body=Bonjour%2C%0A%0AJe%20souhaite%20démarrer%20un%20projet%20de%20création%20de%20site%20web.%0A%0AMerci%20de%20me%20recontacter.%0A%0ACordialement">
                <span className="relative z-10">Contactez-nous</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="glass rounded-2xl mt-2 p-4 flex flex-col gap-4">
            {[
              { label: "Services", href: "#services" },
              { label: "Forfaits", href: "#pricing" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-primary w-full" asChild>
              <a href="mailto:l.bonin38@gmail.com?subject=Démarrer%20mon%20projet%20-%20WebStudio&body=Bonjour%2C%0A%0AJe%20souhaite%20démarrer%20un%20projet%20de%20création%20de%20site%20web.%0A%0AMerci%20de%20me%20recontacter.%0A%0ACordialement">
                Contactez-nous
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
