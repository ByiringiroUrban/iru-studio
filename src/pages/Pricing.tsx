import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Star, 
  Download,
  Camera,
  Video,
  Edit3,
  Headphones,
  Image as ImageIcon,
  Package
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import photographyService from '@/assets/photography-service.jpg';
import videographyService from '@/assets/videography-service.jpg';
import editingService from '@/assets/editing-service.jpg';
import audioService from '@/assets/audio-service.jpg';
import projectsGraphicDesign from '@/assets/projects-graphic-design.jpg';
import pricingHero from '@/assets/hero-bg.jpg';
import { pricingData, type ServiceCategory } from '../data/pricing';
import PricingModal from '../components/PricingModal';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const { toast } = useToast();

  const addToCart = (item: { service: string; name?: string; categoryId?: string; tier?: string; price?: string }) => {
    const key = 'fts_cart';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...item, quantity: 1 });
    localStorage.setItem(key, JSON.stringify(existing));
    toast({ title: 'Added to cart' });
  };

  // Special packages data
  const specialPackages = [
    {
      name: 'Wedding Bliss Package',
      price: '7,500,000 RWF',
      description: 'All-inclusive wedding photography and videography package',
      features: [
        'Full-day wedding coverage',
        'Professional photography team',
        'Cinematic videography',
        'Drone footage included',
        'Same-day highlights reel',
        'Online gallery for guests',
        'Premium album creation',
        'Engagement session included'
      ],
      popular: true
    },
    {
      name: 'Creative Entrepreneur Package',
      price: '20,000,000 RWF',
      description: 'Complete branding and marketing content package',
      features: [
        'Brand photography session',
        'Professional headshots',
        'Product photography',
        'Marketing video content',
        'Social media assets',
        'Website imagery',
        'Brand guidelines',
        '6-month content strategy'
      ],
      popular: false
    },
    {
      name: 'Art Lover\'s Package',
      price: '20,000,000 RWF',
      description: 'Comprehensive artistic documentation and promotion',
      features: [
        'Artwork documentation',
        'Artist portfolio creation',
        'Exhibition photography',
        'Artist interview video',
        'Gallery-quality prints',
        'Digital portfolio website',
        'Social media campaign',
        'Press kit materials'
      ],
      popular: false
    },
    {
      name: 'Cinematic Storytelling Package',
      price: '6,000,000 RWF',
      description: 'Professional film production and post-production',
      features: [
        'Full film production',
        'Professional crew',
        'Location scouting',
        'Post-production editing',
        'Color grading',
        'Sound design',
        'Multiple format delivery',
        'Distribution consultation'
      ],
      popular: false
    }
  ];

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'photography': return Camera;
      case 'videography': return Video;
      case 'editing': return Edit3;
      case 'audio': return Headphones;
      case 'frames': return ImageIcon;
      default: return Star;
    }
  };

  const openPricingModal = (category: ServiceCategory, service: string) => {
    setSelectedCategory(category);
    setSelectedService(service);
  };

  const closePricingModal = () => {
    setSelectedCategory(null);
    setSelectedService('');
  };

  const serviceImageMap: Record<string, string> = {
    photography: photographyService,
    videography: videographyService,
    editing: editingService,
    audio: audioService,
    design: projectsGraphicDesign
  };

  const filteredPricingData = pricingData.filter(s => s.service !== 'frames');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={pricingHero} alt="Pricing & Packages" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pricing & Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transparent pricing for all our creative services. From individual sessions 
            to comprehensive packages, we offer flexible options to suit your needs and budget.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
            <Download className="w-5 h-5 mr-2" />
            Download Price List
          </Button>
        </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Special Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive packages combine multiple services for complete creative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-studio-navy mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <p className="text-sm text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => addToCart({ service: 'package', name: pkg.name, price: pkg.price })}
                    className={`w-full ${pkg.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Services (Additional Items) - moved just below Special Packages */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Packages & Services</h2>
            <p className="text-lg text-gray-600">Extra services and add-ons available on demand.</p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-white/90 backdrop-blur rounded-xl p-0 border border-gray-200 shadow-sm hover:shadow-lg transition-all ring-0 hover:ring-2 hover:ring-primary/20"
            >
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-xl" />
              <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Web & Maintenance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Website Hosting and Domain</span><span className="font-semibold">100,000 RWF / month</span></li>
                <li className="flex justify-between"><span>Integration of Payment Gateway</span><span className="font-semibold">300,000 RWF</span></li>
                <li className="flex justify-between"><span>Maintenance</span><span className="font-semibold">250,000 RWF / month</span></li>
                <li className="flex justify-between"><span>Simple info website, hosting and Domain</span><span className="font-semibold">600,000 RWF</span></li>
              </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-white/90 backdrop-blur rounded-xl p-0 border border-gray-200 shadow-sm hover:shadow-lg transition-all ring-0 hover:ring-2 hover:ring-primary/20"
            >
              <div className="h-1 w-full bg-gradient-to-r from-rose-500 to-orange-400 rounded-t-xl" />
              <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Content & Branding</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Product Photography</span><span className="font-semibold">5,000 RWF / pc</span></li>
                <li className="flex justify-between"><span>Full Branding kit for your business</span><span className="font-semibold">Custom</span></li>
                <li className="flex justify-between"><span>Logo icon</span><span className="font-semibold">100,000 RWF</span></li>
                <li className="flex justify-between"><span>T-shirt, Bags, Hat</span><span className="font-semibold">20,000 RWF / each</span></li>
                <li className="flex justify-between"><span>T-shirt design & Printing</span><span className="font-semibold">10,000 RWF / pc</span></li>
              </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-white/90 backdrop-blur rounded-xl p-0 border border-gray-200 shadow-sm hover:shadow-lg transition-all ring-0 hover:ring-2 hover:ring-primary/20"
            >
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-t-xl" />
              <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Wedding Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Pre-wedding shoot (20 pcs)</span><span className="font-semibold">100,000 RWF</span></li>
                <li className="flex justify-between"><span>Honeymoon shooting (30 pic/day)</span><span className="font-semibold">100,000 RWF / day</span></li>
                <li className="flex justify-between"><span>Personalized Thank you card</span><span className="font-semibold">20,000 RWF</span></li>
                <li className="flex justify-between"><span>Welcome Banner 1m × 2m</span><span className="font-semibold">100,000 RWF</span></li>
                <li className="flex justify-between"><span>Premium Wedding invitation design</span><span className="font-semibold">30,000 RWF</span></li>
                <li className="flex justify-between"><span>Drone photography</span><span className="font-semibold">2,000,000 RWF / day</span></li>
              </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-white/90 backdrop-blur rounded-xl p-0 border border-gray-200 shadow-sm hover:shadow-lg transition-all ring-0 hover:ring-2 hover:ring-primary/20"
            >
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-t-xl" />
              <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Ceremonies & Memorial</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Burial ceremony booking</span><span className="font-semibold">Custom</span></li>
                <li className="flex justify-between"><span>Frame for deceased one A2</span><span className="font-semibold">80,000 RWF / pic</span></li>
              </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service-Specific Pricing (excluding Frames to avoid duplication) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Individual Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed pricing for our core services. Click "View Details" to see complete 
              tier breakdowns and features.
            </p>
          </div>

          <div className="space-y-12">
            {filteredPricingData.map((serviceData) => {
              const ServiceIcon = getServiceIcon(serviceData.service);
              const bannerImage = serviceImageMap[serviceData.service] || projectsGraphicDesign;
              
              return (
                <div key={serviceData.service} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-56 overflow-hidden">
                    <img src={bannerImage} alt={`${serviceData.service} banner`} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-studio-navy capitalize">
                      {serviceData.service}
                    </h3>
                  </div>

                  <div className="grid gap-6">
                    {serviceData.categories.map((category) => (
                      <div key={category.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-studio-navy">{category.title}</h4>
                            <p className="text-gray-600 text-sm">{category.description}</p>
                          </div>
                          <Button 
                            variant="outline"
                            onClick={() => openPricingModal(category, serviceData.service)}
                          >
                            View Details
                          </Button>
                        </div>

                        {/* Desktop: Table Layout */}
                        <div className="hidden md:block">
                          <div className="grid grid-cols-4 gap-4">
                            <div className="font-medium text-gray-700">Tier</div>
                            <div className="font-medium text-gray-700">Basic</div>
                            <div className="font-medium text-gray-700">Standard</div>
                            <div className="font-medium text-gray-700">Premium</div>
                            
                            <div className="py-2 border-t border-gray-200 font-medium">Price</div>
                            {category.tiers.map((tier) => (
                              <div key={tier.tier} className="py-2 border-t border-gray-200 font-semibold text-primary">
                                {tier.price}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mobile: Card Layout */}
                        <div className="md:hidden space-y-3">
                          {category.tiers.map((tier) => (
                            <div key={tier.tier} className="bg-gray-50 p-4 rounded">
                              <div className="flex justify-between items-center">
                                <span className="font-medium capitalize">{tier.tier}</span>
                                <span className="font-bold text-primary">{tier.price}</span>
                              </div>
                              <div className="mt-3">
                                <Button size="sm" onClick={() => addToCart({ service: serviceData.service, categoryId: category.id, tier: tier.tier })}>Add to Cart</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages & Services (Additional Items) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Packages & Services</h2>
            <p className="text-lg text-gray-600">Extra services and add-ons available on demand.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Web & Maintenance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Website Hosting and Domain</span><span className="font-semibold">100k / month</span></li>
                <li className="flex justify-between"><span>Integration of Payment Gateway</span><span className="font-semibold">300k</span></li>
                <li className="flex justify-between"><span>Maintenance</span><span className="font-semibold">250k / month</span></li>
                <li className="flex justify-between"><span>Simple info website, hosting and Domain</span><span className="font-semibold">600k</span></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Content & Branding</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Product Photography</span><span className="font-semibold">5k / pc</span></li>
                <li className="flex justify-between"><span>Full Branding kit for your business</span><span className="font-semibold">Custom</span></li>
                <li className="flex justify-between"><span>Logo icon</span><span className="font-semibold">100k</span></li>
                <li className="flex justify-between"><span>T-shirt, Bags, Hat</span><span className="font-semibold">20k / each</span></li>
                <li className="flex justify-between"><span>T-shirt design & Printing</span><span className="font-semibold">10k / pc</span></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Wedding Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Pre-wedding shoot (20 pcs)</span><span className="font-semibold">100k</span></li>
                <li className="flex justify-between"><span>Honeymoon shooting (30 pic/day)</span><span className="font-semibold">100k / day</span></li>
                <li className="flex justify-between"><span>Personalized Thank you card</span><span className="font-semibold">20k</span></li>
                <li className="flex justify-between"><span>Welcome Banner 1m × 2m</span><span className="font-semibold">100k</span></li>
                <li className="flex justify-between"><span>Premium Wedding invitation design</span><span className="font-semibold">30k</span></li>
                <li className="flex justify-between"><span>Drone photography</span><span className="font-semibold">2M / day</span></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-studio-navy mb-4">Ceremonies & Memorial</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Burial ceremony booking</span><span className="font-semibold">Custom</span></li>
                <li className="flex justify-between"><span>Frame for deceased one A2</span><span className="font-semibold">80k / pic</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      {selectedCategory && (
        <PricingModal
          isOpen={!!selectedCategory}
          onClose={closePricingModal}
          category={selectedCategory}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Pricing;