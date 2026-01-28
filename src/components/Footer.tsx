import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="py-12 px-6 bg-background border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="text-2xl font-bold text-foreground mb-4">
              Web<span className="text-primary">Studio</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Nous créons des sites web qui transforment vos visiteurs en clients fidèles.
            </p>
            <div className="flex gap-4">
              {/* Social links removed */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "Services", "Forfaits", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2">
              {["Mentions légales", "Politique de confidentialité", "CGV", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © 2026 WebStudio. Tous droits réservés.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Français</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">English</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
