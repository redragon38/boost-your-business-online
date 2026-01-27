import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Directrice, Boutique Élégance",
    content: "Notre chiffre d'affaires a augmenté de 40% depuis le lancement du nouveau site. L'équipe a parfaitement compris nos besoins.",
    rating: 5
  },
  {
    name: "Thomas Bernard",
    role: "CEO, Tech Solutions",
    content: "Un travail remarquable ! Le site est non seulement magnifique mais aussi ultra-performant. Nos clients nous félicitent régulièrement.",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Fondatrice, Studio Créatif",
    content: "Professionnalisme et créativité au rendez-vous. Le site reflète parfaitement l'image de notre marque. Je recommande à 100%.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec nous
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
