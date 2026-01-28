import { motion } from "framer-motion";
import { UserCheck, Star, Award } from "lucide-react";

const stats = [
  { label: "Projets livrés", value: "150+", icon: Award },
  { label: "Clients satisfaits", value: "98%", icon: UserCheck },
  { label: "Expérience", value: "3x", icon: Star },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Le créateur
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Message du <span className="text-gradient-accent">créateur</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl glass border-primary/20"
          >
            <p className="text-xl text-foreground leading-relaxed italic mb-8">
              "Mon objectif est de fournir des solutions web de haute qualité, accessibles et performantes. Chaque projet est une opportunité de créer quelque chose d'unique qui propulse votre activité vers l'avant. Je m'engage personnellement sur la qualité et le suivi de chaque réalisation."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl">
                WS
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">WebStudio</div>
                <div className="text-primary font-medium">Expert Digital</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:border-primary/30 transition-all group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
