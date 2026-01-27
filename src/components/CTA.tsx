import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Prêt à transformer votre <span className="text-gradient-accent">présence en ligne</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-lg px-8 py-6"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary text-lg px-8 py-6"
            >
              Réserver un appel
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-muted-foreground">
            <a href="mailto:contact@webstudio.fr" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              contact@webstudio.fr
            </a>
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              01 23 45 67 89
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
