import React, { useMemo, useState } from 'react';
import { ServiceCategory, pricingData } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const FRAME_SERVICE = pricingData.find(s => s.service === 'frames');

const Frames = () => {
  const categories = FRAME_SERVICE?.categories || [];
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || 'photobook-a3');

  const activeCategory = useMemo<ServiceCategory | undefined>(() => {
    return categories.find(c => c.id === activeId);
  }, [activeId, categories]);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-primary text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Frames & Photobooks</h1>
          <p className="opacity-90 mt-2 max-w-2xl">Explore premium photobooks, classic wood frames, grass frames, and specialized packages.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-4 py-2 rounded-full border text-sm ${activeId === cat.id ? 'bg-primary text-white border-primary' : 'bg-white text-studio-navy border-gray-200 hover:bg-gray-50'}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div className="bg-white rounded-2xl shadow-card p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-studio-navy">{activeCategory.title}</h2>
              <p className="text-gray-600">{activeCategory.description}</p>
            </div>
            <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              {activeCategory.tiers.map(t => (
                <motion.div key={t.tier} variants={fadeInUp} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="text-sm text-gray-500 uppercase">{t.label}</div>
                  <div className="text-3xl font-bold text-primary mt-1">{t.price}</div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {t.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full">Enquire</Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frames;





