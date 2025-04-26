
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="glass p-6 rounded-xl h-full flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
    >
      <div>
        <div className="rounded-full p-3 w-12 h-12 mb-4 bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};
