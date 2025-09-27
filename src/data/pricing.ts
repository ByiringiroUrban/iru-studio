export interface PricingTier {
  tier: 'basic' | 'standard' | 'premium';
  label: string;
  price: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  tiers: PricingTier[];
}

export interface ServiceData {
  service: string;
  categories: ServiceCategory[];
}

export const pricingData: ServiceData[] = [
  {
    service: 'frames',
    categories: [
      {
        id: 'photobook-a3',
        title: 'Photobook A3',
        description: 'Premium printed photobooks (A3 sizes)',
        tiers: [
          { tier: 'basic', label: 'Page 30', price: 'RWF 150,000', features: ['Gloss pages', 'Cover design', 'Digital copy'] },
          { tier: 'standard', label: 'Page 40', price: 'RWF 200,000', features: ['Matte/gloss combo', 'Custom cover', 'Slipcase'] },
          { tier: 'premium', label: 'Page 60', price: 'RWF 250,000', features: ['Luxury paper', 'Hard slipcase', 'Engraved title'] }
        ]
      },
      {
        id: 'photobook-a4',
        title: 'Photobook A4',
        description: 'Elegant compact photobooks (A4 sizes)',
        tiers: [
          { tier: 'basic', label: 'Page 30', price: 'RWF 70,000', features: ['Gloss pages', 'Cover design', 'Digital copy'] },
          { tier: 'standard', label: 'Page 40', price: 'RWF 90,000', features: ['Matte/gloss combo', 'Custom cover', 'Slipcase'] },
          { tier: 'premium', label: 'Page 60', price: 'RWF 115,000', features: ['Luxury paper', 'Hard slipcase', 'Engraved title'] }
        ]
      },
      {
        id: 'wood-frame-board',
        title: 'Wood Frame Board',
        description: 'Classic wooden frames (various print sizes)',
        tiers: [
          { tier: 'basic', label: 'A5–A4', price: 'RWF 15,000–60,000', features: ['Mounted print', 'Glass cover', 'Wall hook'] },
          { tier: 'standard', label: 'A3–A2', price: 'RWF 90,000–150,000', features: ['Premium wood', 'Anti-glare glass', 'Mat board'] },
          { tier: 'premium', label: 'A1–A0', price: 'RWF 180,000–260,000', features: ['Museum-grade frame', 'UV glass', 'Installed hardware'] }
        ]
      },
      {
        id: 'grass-frame',
        title: 'Grass Frame',
        description: 'Modern frames with textured/grass finish',
        tiers: [
          { tier: 'basic', label: 'A5–A4', price: 'RWF 8,000–25,000', features: ['Textured finish', 'Standard glass'] },
          { tier: 'standard', label: 'A3–A2', price: 'RWF 35,000–80,000', features: ['Reinforced backing', 'Anti-glare glass'] },
          { tier: 'premium', label: 'A1–A0', price: 'RWF 120,000–200,000', features: ['Premium build', 'UV protection'] }
        ]
      },
      {
        id: 'specialised-packages',
        title: 'Specialised Packages',
        description: 'Curated combinations for events and business',
        tiers: [
          { tier: 'basic', label: 'Wedding Bliss (Basic)', price: 'RWF 7,500,000', features: ['Wedding photography', 'Videography highlights', 'Dance choreography'] },
          { tier: 'standard', label: 'Creative Entrepreneur (Standard)', price: 'RWF 10,000,000', features: ['Web design', 'Branding package', 'Product photography'] },
          { tier: 'premium', label: 'Creative Entrepreneur (Premium)', price: 'RWF 20,000,000', features: ['Premium web design', 'Full branding suite', 'Studio shoots'] }
        ]
      },
      {
        id: 'design-printing',
        title: 'Design & Printing',
        description: 'Banners, logos, flyers, and business cards',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 50,000', features: ['Simple designs', 'Fast delivery', 'Digital proofs'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 150,000', features: ['Creative concepts', 'Revisions included', 'Print-ready files'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 400,000', features: ['High-end design', '3D mockups', 'Full brand guide'] }
        ]
      },
      {
        id: 'website-design',
        title: 'Website Design',
        description: 'Personal, portfolio, business, e-commerce, blog, educational platforms, and custom web applications',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 500,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 700,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 1,000,000', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for a specified period'] }
        ]
      },
      {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'Professional portfolio websites for creatives and professionals',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 700,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 900,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 2,500,000', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for a specified period'] }
        ]
      },
      {
        id: 'business-website',
        title: 'Business Website',
        description: 'Professional business websites with advanced features',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 1,000,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 3,000,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 5,000,000', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for 5 months'] }
        ]
      },
      {
        id: 'ecommerce-website',
        title: 'E-commerce Website',
        description: 'Full-featured online stores with payment processing',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 1,200,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 3,500,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 7,500,000+', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for a specified period'] }
        ]
      },
      {
        id: 'blog-content-website',
        title: 'Blog/Content Website',
        description: 'Content management systems for blogs and content websites',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 1,200,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 3,500,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 7,500,000+', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for a specified period'] }
        ]
      },
      {
        id: 'educational-platform',
        title: 'Educational Platform',
        description: 'Learning management systems and educational websites',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 500,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 800,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 1,500,000', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for a specified period'] }
        ]
      },
      {
        id: 'custom-web-applications',
        title: 'Custom Web Applications',
        description: 'Bespoke web applications and complex systems',
        tiers: [
          { tier: 'basic', label: 'Basic', price: 'RWF 4,000,000', features: ['Up to 5 pages', 'Simple design with limited customization', 'Mobile-friendly layout', 'Basic SEO optimization', 'Hosting and domain setup guidance'] },
          { tier: 'standard', label: 'Standard', price: 'RWF 6,500,000', features: ['Up to 10 pages', 'Custom design with advanced layouts', 'Mobile and tablet optimization', 'Basic e-commerce or blog functionality', 'Standard SEO and analytics integration'] },
          { tier: 'premium', label: 'Premium', price: 'RWF 9,000,000+', features: ['Unlimited pages and advanced features', 'Fully customized, high-end design', 'Complex functionalities (e.g., e-commerce, booking systems)', 'Advanced SEO, analytics, and performance optimization', 'Ongoing support and maintenance for a specified period'] }
        ]
      }
    ]
  },
  {
    service: 'photography',
    categories: [
      {
        id: 'event-photography',
        title: 'Event Photography',
        description: 'Corporate Events / Private Celebrations / Festivals',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 30,000',
            features: [
              'Single location shoot',
              '5 edited photos',
              'Digital delivery'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 50,000',
            features: [
              '2 locations',
              '10 professionally edited photos',
              'Digital delivery + small print'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 80,000',
            features: [
              'Multiple locations',
              '20+ professionally edited photos',
              'A3 printed photo + highlight gallery',
              'Optional short video highlights available as add-on'
            ]
          }
        ]
      },
      {
        id: 'portraits-headshots',
        title: 'Portraits & Headshots',
        description: 'Professional portraits, headshots for businesses, actors, creatives',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 2,000',
            features: [
              'Single pose',
              'Basic retouching',
              'Digital file'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 5,000',
            features: [
              'Multiple poses',
              'Advanced retouching',
              'High-resolution files'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 10,000',
            features: [
              'Full session',
              'Premium retouching',
              'Print-ready files'
            ]
          }
        ]
      },
      {
        id: 'product-commercial',
        title: 'Product & Commercial Photography',
        description: 'Showcase your products with crisp, studio-quality images',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 350,000',
            features: [
              'Small product batch',
              'Standard retouching',
              'Digital delivery'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 700,000',
            features: [
              'Larger catalog',
              'Advanced retouching',
              'White-background + lifestyle shots'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 1,400,000',
            features: [
              'Full product shoot',
              'Composite retouching',
              'Multiple angles + print-ready files'
            ]
          }
        ]
      },
      {
        id: 'fashion-editorial',
        title: 'Fashion & Editorial Photography',
        description: 'Editorial shoots and lookbooks',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 300,000',
            features: [
              'Single look',
              'Standard retouch',
              'Digital files'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 600,000',
            features: [
              'Multiple looks',
              'Advanced retouch',
              'Styling support'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 1,200,000',
            features: [
              'Full editorial shoot',
              'Hair & make-up coordination',
              'High-end retouching + prints'
            ]
          }
        ]
      },
      {
        id: 'weddings-special',
        title: 'Weddings & Special Occasions',
        description: 'Full coverage and highlight reels',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'Contact us',
            features: [
              'Short coverage options available'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'Contact us',
            features: [
              'Full-day coverage options available'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: '7,500,000 RWF',
            features: [
              'Wedding Bliss Package - all-inclusive',
              'See pricing page for full breakdown'
            ]
          }
        ]
      }
    ]
  },
  {
    service: 'videography',
    categories: [
      {
        id: 'corporate-videos',
        title: 'Corporate Videos',
        description: 'Professional corporate video production',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 500,000',
            features: [
              'Basic video production',
              'Standard editing',
              'Digital delivery'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 1,000,000',
            features: [
              'Professional production',
              'Advanced editing',
              'Multiple formats'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 2,000,000',
            features: [
              'Premium production',
              'Full post-production',
              'All formats + raw footage'
            ]
          }
        ]
      },
      {
        id: 'event-coverage',
        title: 'Event Coverage',
        description: 'Comprehensive event videography',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 450,000',
            features: [
              'Single camera setup',
              'Basic editing',
              'Highlight reel'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 900,000',
            features: [
              'Multi-camera setup',
              'Professional editing',
              'Full event + highlights'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 1,800,000',
            features: [
              'Premium multi-camera',
              'Cinematic editing',
              'Multiple deliverables'
            ]
          }
        ]
      },
      {
        id: 'promotional-videos',
        title: 'Promotional Videos',
        description: 'Marketing and promotional content',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 450,000',
            features: [
              'Basic promotional video',
              'Standard editing',
              'Single format'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 900,000',
            features: [
              'Professional promo video',
              'Advanced editing',
              'Multiple formats'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 1,800,000',
            features: [
              'Premium promotional content',
              'Full production value',
              'Campaign-ready materials'
            ]
          }
        ]
      },
      {
        id: 'documentaries',
        title: 'Documentaries',
        description: 'Documentary film production',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 700,000',
            features: [
              'Short documentary',
              'Basic production',
              'Standard editing'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 1,400,000',
            features: [
              'Full documentary',
              'Professional production',
              'Advanced post-production'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 2,800,000',
            features: [
              'Feature-length documentary',
              'Cinematic production',
              'Festival-ready quality'
            ]
          }
        ]
      },
      {
        id: 'social-media',
        title: 'Social Media Content Creation',
        description: 'Content optimized for social platforms',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 600,000',
            features: [
              'Basic social content',
              'Platform optimization',
              'Standard editing'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 1,200,000',
            features: [
              'Professional social content',
              'Multi-platform optimization',
              'Advanced editing'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 2,400,000',
            features: [
              'Premium social campaigns',
              'All platform formats',
              'Full content strategy'
            ]
          }
        ]
      }
    ]
  },
  {
    service: 'editing',
    categories: [
      {
        id: 'photo-retouching',
        title: 'Photo Retouching & Enhancement',
        description: 'Portrait, Product, Event photo enhancement',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 2,000',
            features: [
              'Basic retouching',
              'Color correction',
              'Standard delivery'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 5,000',
            features: [
              'Advanced retouching',
              'Professional enhancement',
              'High-resolution delivery'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 10,000',
            features: [
              'Premium retouching',
              'Artistic enhancement',
              'Print-ready quality'
            ]
          }
        ]
      },
      {
        id: 'video-editing',
        title: 'Video Editing',
        description: 'Sequencing, sound mixing, color, effects',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 150,000',
            features: [
              'Basic video editing',
              'Standard transitions',
              'Basic audio mixing'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 300,000',
            features: [
              'Professional editing',
              'Advanced transitions',
              'Professional audio mixing'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 600,000',
            features: [
              'Cinematic editing',
              'Custom effects',
              'Professional sound design'
            ]
          }
        ]
      },
      {
        id: 'color-grading',
        title: 'Color Grading',
        description: 'Professional color correction and grading',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 100,000',
            features: [
              'Basic color correction',
              'Standard grading',
              'Single format'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 200,000',
            features: [
              'Professional color grading',
              'Advanced techniques',
              'Multiple formats'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 400,000',
            features: [
              'Cinematic color grading',
              'Custom LUTs',
              'Cinema-grade quality'
            ]
          }
        ]
      }
    ]
  },
  {
    service: 'audio',
    categories: [
      {
        id: 'music-production',
        title: 'Music Production',
        description: 'Complete music production services',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 150,000',
            features: [
              'Basic music production',
              'Standard mixing',
              'Digital delivery'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 300,000',
            features: [
              'Professional production',
              'Advanced mixing',
              'Multiple formats'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 600,000',
            features: [
              'Premium production',
              'Professional mastering',
              'Radio-ready quality'
            ]
          }
        ]
      },
      {
        id: 'podcast-recording',
        title: 'Podcast Recording',
        description: 'Professional podcast production',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 150,000',
            features: [
              'Basic recording setup',
              'Standard editing',
              'Audio cleanup'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 300,000',
            features: [
              'Professional recording',
              'Advanced editing',
              'Audio enhancement'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 600,000',
            features: [
              'Studio-quality recording',
              'Full post-production',
              'Distribution-ready'
            ]
          }
        ]
      },
      {
        id: 'voiceover-services',
        title: 'Voiceover Services',
        description: 'Professional voiceover recording',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 150,000',
            features: [
              'Basic voiceover',
              'Standard recording',
              'Single take'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 300,000',
            features: [
              'Professional voiceover',
              'Multiple takes',
              'Audio editing'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 600,000',
            features: [
              'Premium voiceover',
              'Character voices',
              'Full production'
            ]
          }
        ]
      },
      {
        id: 'sound-design',
        title: 'Sound Design for Video',
        description: 'Custom sound design and audio effects',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 200,000',
            features: [
              'Basic sound design',
              'Standard effects',
              'Audio sync'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 400,000',
            features: [
              'Professional sound design',
              'Custom effects',
              'Advanced audio mixing'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 800,000',
            features: [
              'Cinematic sound design',
              'Original compositions',
              'Surround sound mixing'
            ]
          }
        ]
      },
      {
        id: 'mixing-mastering',
        title: 'Mixing and Mastering',
        description: 'Professional audio mixing and mastering',
        tiers: [
          {
            tier: 'basic',
            label: 'Basic',
            price: 'RWF 250,000',
            features: [
              'Basic mixing',
              'Standard mastering',
              'Single version'
            ]
          },
          {
            tier: 'standard',
            label: 'Standard',
            price: 'RWF 500,000',
            features: [
              'Professional mixing',
              'Advanced mastering',
              'Multiple versions'
            ]
          },
          {
            tier: 'premium',
            label: 'Premium',
            price: 'RWF 1,000,000',
            features: [
              'Premium mixing',
              'Mastering for all platforms',
              'Unlimited revisions'
            ]
          }
        ]
      }
    ]
  }
];

export const getPricingByServiceAndCategory = (service: string, categoryId: string): ServiceCategory | undefined => {
  const serviceData = pricingData.find(s => s.service === service);
  return serviceData?.categories.find(c => c.id === categoryId);
};

export const getAllServices = () => pricingData;