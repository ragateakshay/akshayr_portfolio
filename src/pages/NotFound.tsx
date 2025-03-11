
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved to another location.
            </p>
            <Link
              to="/"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
