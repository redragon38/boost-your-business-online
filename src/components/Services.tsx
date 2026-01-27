import { motion } from "framer-motion";
import { Globe, Zap, LineChart, Palette, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Web Sur-Mesure",
    description: "Des sites uniques qui reflètent l'identité de votre marque et captivent vos visiteurs.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Zap,
    title: "Performance Optimale",
    description: "Temps de chargement ultra-rapide et expérience utilisateur fluide sur tous les appareils.",
    gradient: "from-yellow-500 to-orange-400"
  },
  {
    icon: LineChart,
    title: "SEO Avancé",
    description: "Optimisation complète pour les moteurs de recherche et visibilité maximale.",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Palette,
    title: "Design Premium",
    description: "Interfaces modernes et élégantes qui inspirent confiance et professionnalisme.",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Protection SSL, sauvegardes automatiques et maintenance proactive.",
    gradient: "from-red-500 to-rose-400"
  },
  {
    icon: Headphones,
    title: "Support Dédié",
    description: "Accompagnement personnalisé et réactivité garantie pour tous vos besoins.",
    gradient: "from-indigo-500 to-violet-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
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
            Nos Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tout ce dont votre entreprise <br className="hidden md:block" />
            <span className="text-gradient-accent">a besoin</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour propulser votre présence en ligne
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-500 h-full group-hover:translate-y-[-4px]">
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                {/* Hover line animation */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
