import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Image as ImageIcon, Video, Music2, ExternalLink, Frame, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, floatIn } from '@/lib/animations';

type GalleryItem = {
  id: string;
  title: string;
  category: 'images' | 'videography' | 'audio' | 'handcrafted-frames' | 'handicrafted-statue';
  src: string;
  externalLink?: string;
};

// Import the images
import frame1 from '@/assets/frame-1.jpg';
import frame2 from '@/assets/frame-2.jpg';
import frame3 from '@/assets/frame-3.jpg';
import frame4 from '@/assets/frame-4.jpg';
import frame5 from '@/assets/frame-5.jpg';
import frame6 from '@/assets/frame-6.jpg';
import statue1 from '@/assets/statue-1.jpg';
import statue2 from '@/assets/statue-2.jpg';
import statue3 from '@/assets/statue-3.jpg';
import photographyService from '@/assets/photography-service.jpg';
import videographyService from '@/assets/videography-service.jpg';
import audioService from '@/assets/audio-service.jpg';

const ITEMS: GalleryItem[] = [
  // Handcrafted Frames
  { id: 'frame-1', title: 'Still Life with Fruits and Lantern', category: 'handcrafted-frames', src: frame1, externalLink: 'https://irumart.com' },
  { id: 'frame-2', title: 'Landscape with Grass and Flowers', category: 'handcrafted-frames', src: frame2, externalLink: 'https://irumart.com' },
  { id: 'frame-3', title: 'Forest Scene with Fallen Tree', category: 'handcrafted-frames', src: frame3, externalLink: 'https://irumart.com' },
  { id: 'frame-4', title: 'Bob Marley Musical Portrait', category: 'handcrafted-frames', src: frame4, externalLink: 'https://irumart.com' },
  { id: 'frame-5', title: 'African Buffalo Wildlife', category: 'handcrafted-frames', src: frame5, externalLink: 'https://irumart.com' },
  { id: 'frame-6', title: 'Gorillas in Jungle', category: 'handcrafted-frames', src: frame6, externalLink: 'https://irumart.com' },
  
  // Handicrafted Statues
  { id: 'statue-1', title: 'Female Figure with Tree', category: 'handicrafted-statue', src: statue1, externalLink: 'https://irumart.com' },
  { id: 'statue-2', title: 'Mother and Child Embrace', category: 'handicrafted-statue', src: statue2, externalLink: 'https://irumart.com' },
  { id: 'statue-3', title: 'Woman Carrying Pot', category: 'handicrafted-statue', src: statue3, externalLink: 'https://irumart.com' },
  
  // Original items
  { id: 'ph-1', title: 'Portrait Photography', category: 'images', src: photographyService },
  { id: 'vd-1', title: 'Event Videography', category: 'videography', src: videographyService },
  { id: 'au-1', title: 'Studio Audio Session', category: 'audio', src: audioService },
];

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'images', label: 'Images' },
  { key: 'videography', label: 'Video Graph' },
  { key: 'audio', label: 'Audio Graph' },
  { key: 'handcrafted-frames', label: 'Handcrafted Frames' },
  { key: 'handicrafted-statue', label: 'Handicrafted Statue' },
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
            Explore our crafted works across categories: images, video graph, audio graph, handcrafted frames, and handicrafted statues.
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
            <motion.div key={item.id} variants={fadeInUp} className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-100 overflow-hidden relative">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {item.externalLink && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-studio-navy font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500 capitalize">{item.category.replace('-', ' ')}</div>
                </div>
                <div className="text-gray-400">
                  {item.category === 'images' && <ImageIcon className="w-5 h-5" />}
                  {item.category === 'videography' && <Video className="w-5 h-5" />}
                  {item.category === 'audio' && <Music2 className="w-5 h-5" />}
                  {item.category === 'handcrafted-frames' && <Frame className="w-5 h-5" />}
                  {item.category === 'handicrafted-statue' && <Users className="w-5 h-5" />}
                </div>
              </div>
              {item.externalLink && (
                <div className="px-4 pb-4">
                  <Button 
                    onClick={() => window.open(item.externalLink, '_blank')}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                  >
                    View on IruMart
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;







