import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Image as ImageIcon, Video, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, floatIn } from '@/lib/animations';

type GalleryItem = {
  id: string;
  title: string;
  category: 'images' | 'videography' | 'audio' | 'art';
  src: string;
};

const ITEMS: GalleryItem[] = [
  { id: 'img-1', title: 'Sculpture 1', category: 'art', src: '/assets/photography-service.jpg' },
  { id: 'img-2', title: 'Sculpture 2', category: 'art', src: '/assets/editing-service.jpg' },
  { id: 'img-3', title: 'Sculpture 3', category: 'art', src: '/assets/videography-service.jpg' },
  { id: 'ph-1', title: 'Portrait', category: 'images', src: '/assets/photography-service.jpg' },
  { id: 'vd-1', title: 'Event Reel', category: 'videography', src: '/assets/videography-service.jpg' },
  { id: 'au-1', title: 'Studio Session', category: 'audio', src: '/assets/audio-service.jpg' },
];

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'images', label: 'Images' },
  { key: 'videography', label: 'Video Graph' },
  { key: 'audio', label: 'Audio Graph' },
  { key: 'art', label: 'Art & Statues' },
] as const;

const Gallery = () => {
  const [active, setActive] = useState<typeof CATEGORIES[number]['key']>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return ITEMS;
    return ITEMS.filter((i) => i.category === active);
  }, [active]);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy" variants={fadeInUp} initial="hidden" animate="visible">
            Gallery
          </motion.h1>
          <motion.p className="text-gray-600 mt-3 max-w-3xl" variants={fadeInUp} initial="hidden" animate="visible">
            Explore our crafted works across categories: images, video graph, audio graph, and art.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <motion.div className="flex flex-wrap gap-3 mb-8" variants={staggerContainer(0.06)} initial="hidden" animate="visible">
          {CATEGORIES.map((c) => (
            <motion.button
              key={c.key}
              variants={fadeInUp}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full border text-sm ${active === c.key ? 'bg-primary text-white border-primary' : 'bg-white text-studio-navy border-gray-200 hover:bg-gray-50'}`}
            >
              {c.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {filtered.map((item) => (
            <motion.div key={item.id} variants={fadeInUp} className="group bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-studio-navy font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500 capitalize">{item.category}</div>
                </div>
                <div className="text-gray-400">
                  {item.category === 'images' && <ImageIcon className="w-5 h-5" />}
                  {item.category === 'videography' && <Video className="w-5 h-5" />}
                  {item.category === 'audio' && <Music2 className="w-5 h-5" />}
                  {item.category === 'art' && <CheckCircle className="w-5 h-5" />}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;





