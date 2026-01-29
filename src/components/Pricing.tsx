import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "150",
    description: "Parfait pour une présence en ligne essentielle",
    icon: Sparkles,
    features: [
      "Site vitrine 1 page",
      "Design responsive",
      "Formulaire de contact",
    ],
    popular: false,
    gradient: "from-slate-500 to-slate-400"
  },
  {
    name: "Professionnel",
    price: "250",
    description: "La solution idéale pour présenter votre activité",
    icon: Star,
    features: [
      "Site jusqu'à 4 pages max",
      "Design premium sur-mesure",
      "Maintenance offerte 1er mois",
      "Optimisation SEO de base",
      "Support email"
    ],
    popular: true,
    gradient: "from-primary to-blue-400"
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Pour les projets ambitieux et sur-mesure",
    icon: Zap,
    features: [
      "Nombre de pages illimité",
      "Design exclusif",
      "Fonctionnalités avancées",
      "E-commerce / Réservation",
      "Intégrations API",
      "Support dédié 24/7",
      "Maintenance complète",
      "Formation équipe"
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-400"
  }
];

const addons = [
  { name: "Maintenance mensuelle", price: "50" },
  { name: "Optimisation SEO avancée", price: "150" },
  { name: "Ajout d'une page", price: "100" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <motion.div 
        className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
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
            Tarifs
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Des forfaits adaptés à <br className="hidden md:block" />
            <span className="text-gradient-accent">vos ambitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-sm font-medium text-primary-foreground shadow-glow">
                    <Star className="w-4 h-4" />
                    Le plus populaire
                  </div>
                </motion.div>
              )}

              <div className={`relative p-8 rounded-2xl transition-all duration-500 h-full ${
                plan.popular 
                  ? 'glass border-primary/50 shadow-glow' 
                  : 'glass hover:border-primary/30'
              }`}>
                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <plan.icon className="w-6 h-6 text-white" />
                </motion.div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-foreground">{plan.price}</span>
                    {plan.price !== "Sur devis" && <span className="text-muted-foreground">€</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 relative overflow-hidden group/btn ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:opacity-90' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  <span className="relative z-10">
                    {plan.price === "Sur devis" ? "Demander un devis" : "Choisir ce forfait"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Addons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Options & Suppléments</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div 
                key={addon.name} 
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl font-bold text-primary mb-2">{addon.price}€</span>
                <span className="text-muted-foreground font-medium text-center">{addon.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
