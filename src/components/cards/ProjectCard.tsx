
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp } from '@/lib/animations';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  delay?: number;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, image, delay = 0, link }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="overflow-hidden rounded-xl shadow-md group h-full flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white flex-grow flex flex-col">
        <div className="chip mb-3 inline-block self-start">{category}</div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to={link} 
            className="text-primary font-medium inline-flex items-center group"
          >
            View details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
