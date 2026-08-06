import { motion } from "framer-motion";
import { ReactNode } from "react";
import { enterInitial } from "@/lib/firstPaint";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const PageHero = ({ badge, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-accent text-primary-foreground py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-primary/30" />
        <div className="absolute top-[50px] right-[50px] w-[400px] h-[400px] rounded-full bg-primary/15 border-2 border-primary/20" />
        <div className="absolute -bottom-[200px] -left-[100px] w-[500px] h-[500px] rounded-full bg-primary/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {badge && (
          <motion.span
            initial={enterInitial({ opacity: 0, y: -10 })}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={enterInitial({ opacity: 0, y: 20 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={enterInitial({ opacity: 0, y: 15 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-primary-foreground/75 max-w-2xl mb-8"
        >
          {subtitle}
        </motion.p>
        {children}
      </div>
    </section>
  );
};

export default PageHero;
