import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "990",
    description: "Parfait pour les petites entreprises qui démarrent",
    features: [
      "Site vitrine 5 pages",
      "Design responsive",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus",
      "Support email"
    ],
    popular: false
  },
  {
    name: "Professionnel",
    price: "2 490",
    description: "La solution complète pour les entreprises en croissance",
    features: [
      "Site jusqu'à 15 pages",
      "Design premium sur-mesure",
      "Intégration CMS",
      "SEO avancé + Analytics",
      "Hébergement premium 1 an",
      "Support prioritaire 7j/7",
      "Maintenance mensuelle",
      "Blog intégré"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Pour les projets ambitieux et sur-mesure",
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
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Des forfaits adaptés à vos ambitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Tous nos forfaits incluent un accompagnement personnalisé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'bg-gradient-card border-primary shadow-glow' 
                  : 'bg-card border-border'
              } transition-all duration-300 hover:shadow-elevated`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-sm font-medium text-primary-foreground">
                    <Star className="w-4 h-4" />
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="mb-8">
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
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 ${
                  plan.popular 
                    ? 'bg-gradient-primary hover:opacity-90' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {plan.price === "Sur devis" ? "Demander un devis" : "Choisir ce forfait"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
