import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Image as ImageIcon, Video, Music2, ExternalLink, Frame, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, floatIn } from '@/lib/animations';

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  externalLink?: string;
};

// Auto-import all images from assets
// Use absolute path so Vite resolves without alias issues, include nested files
const allAssetModules = import.meta.glob('/src/assets/**/*.{jpg,JPG,jpeg,png}', { eager: true }) as Record<string, { default: string }>;

const categorize = (path: string): { category: string; title: string; externalLink?: string } => {
  const file = path.replace(/^.*[\\\/]/, '');
  const name = file.replace(/\.(jpg|jpeg|png|JPG)$/i, '');
  const lower = name.toLowerCase();

  // Handcrafted frames
  if (lower.startsWith('frame-') || /^frame\s?\d+/.test(lower)) {
    return { category: 'handcrafted-frames', title: name.replace(/-/g, ' '), externalLink: 'https://irumart.com' };
  }
  // Handicrafted statues
  if (lower.startsWith('statue-') || lower.includes('statue')) {
    return { category: 'handicrafted-statue', title: name.replace(/-/g, ' '), externalLink: 'https://irumart.com' };
  }
  // Videography
  if (lower.includes('video') || lower.includes('videography') || lower.startsWith('c3') || lower.startsWith('c6')) {
    return { category: 'videography', title: name.replace(/-/g, ' ') };
  }
  // Audio
  if (lower.includes('audio')) {
    return { category: 'audio', title: name.replace(/-/g, ' ') };
  }
  // Default to images
  return { category: 'images', title: name.replace(/-/g, ' ') };
};

const RAW_ITEMS: GalleryItem[] = Object.entries(allAssetModules)
  .map(([path, mod], idx) => {
    const { category, title, externalLink } = categorize(path);
    return {
      id: `${category}-${idx}`,
      title,
      category,
      src: (mod as any).default || (mod as any),
      externalLink,
    } as GalleryItem;
  })
  // Exclude logo and non-gallery assets if they slip in
  .filter(i => !i.title.toLowerCase().includes('logo'));

// Normalize categories to fixed set
const VALID_CATEGORIES = ['images','videography','audio','handcrafted-frames','handicrafted-statue'] as const;
const normalizeCategory = (c: string): string => {
  const key = (c || '').toLowerCase().trim();
  return VALID_CATEGORIES.includes(key as any) ? key : 'images';
};

const ITEMS: GalleryItem[] = RAW_ITEMS.map(i => ({ ...i, category: normalizeCategory(i.category) }));

const CATEGORIES = ([
  { key: 'all', label: 'All' },
  ...VALID_CATEGORIES.map((k) => ({ key: k, label: k.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()) }))
] as { key: string; label: string }[]);

const Gallery = () => {
  const [active, setActive] = useState<string>('all');
  const [page, setPage] = useState<number>(1);
  const pageSize = 9;

  const filtered = useMemo(() => {
    console.log('Filtering with active category:', active);
    console.log('Total items:', ITEMS.length);
    
    const key = (active || 'all').toLowerCase().trim();
    if (key === 'all') {
      console.log('Showing all items');
      return ITEMS;
    }
    
    const filteredItems = ITEMS.filter((item) => {
      const itemCategory = (item.category || '').toLowerCase().trim();
      const matches = itemCategory === key;
      return matches;
    });
    
    console.log(`Filtered ${filteredItems.length} items for category: ${key}`);
    return filteredItems;
  }, [active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  
  const currentItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);
    console.log(`Showing ${items.length} items on page ${safePage}`);
    return items;
  }, [filtered, safePage]);

  const handleCategoryChange = (categoryKey: string) => {
    console.log('Changing category to:', categoryKey);
    setActive(categoryKey);
    setPage(1); // Reset to first page when changing category
  };

  // Debug: Log current state
  console.log('Current active category:', active);
  console.log('Current page:', page);
  console.log('Filtered items count:', filtered.length);
  console.log('Current items count:', currentItems.length);

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
              onClick={() => handleCategoryChange(c.key)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                active === c.key 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-studio-navy border-gray-200 hover:bg-gray-50'
              }`}
            >
              {c.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Debug info - remove in production */}
        <div className="mb-4 text-sm text-gray-500">
          Active: {active} | Total: {ITEMS.length} | Filtered: {filtered.length} | Showing: {currentItems.length}
        </div>

        <motion.div 
          key={`${active}-${safePage}`} // Force re-render when category or page changes
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
          variants={staggerContainer(0.08)} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.15 }}
        >
          {currentItems.map((item) => (
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

        {/* Show message when no items found */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No items found for this category</div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-9 h-9 rounded-full border transition-all duration-200 ${
                  safePage === i + 1 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-studio-navy border-gray-200 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;