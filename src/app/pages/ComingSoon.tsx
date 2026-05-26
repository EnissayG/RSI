import { Construction } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="w-24 h-24 mx-auto mb-8 bg-[#E8621A] rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Construction className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-[#2C2C2C]"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-[#6B6B6B] mb-8 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.p
            className="text-lg text-[#6B6B6B] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pour plus d'informations, n'hésitez pas à nous contacter au (514) 251-2525 ou à info@rsipropulsion.ca
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-8 py-6 min-h-[44px] shadow-md hover:shadow-lg transition-all"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Retour à l'accueil
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
