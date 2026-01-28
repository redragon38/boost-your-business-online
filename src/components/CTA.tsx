import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Animated blobs */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow"
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Prêt à transformer votre{" "}
            <motion.span 
              className="text-gradient-accent inline-block"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              présence en ligne
            </motion.span>{" "}
            ?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-lg px-8 py-6 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="mailto:l.bonin38@gmail.com" 
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              l.bonin38@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
