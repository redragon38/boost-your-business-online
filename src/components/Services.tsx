import { motion } from "framer-motion";
import { Globe, Zap, LineChart, Palette, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Web Sur-Mesure",
    description: "Des sites uniques qui reflètent l'identité de votre marque et captivent vos visiteurs."
  },
  {
    icon: Zap,
    title: "Performance Optimale",
    description: "Temps de chargement ultra-rapide et expérience utilisateur fluide sur tous les appareils."
  },
  {
    icon: LineChart,
    title: "SEO Avancé",
    description: "Optimisation complète pour les moteurs de recherche et visibilité maximale."
  },
  {
    icon: Palette,
    title: "Design Premium",
    description: "Interfaces modernes et élégantes qui inspirent confiance et professionnalisme."
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Protection SSL, sauvegardes automatiques et maintenance proactive."
  },
  {
    icon: Headphones,
    title: "Support Dédié",
    description: "Accompagnement personnalisé et réactivité garantie pour tous vos besoins."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tout ce dont votre entreprise a besoin
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour propulser votre présence en ligne
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
