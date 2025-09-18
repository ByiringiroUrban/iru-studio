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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
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

      {/* Service-Specific Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Individual Services & Frames</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed pricing for our core services. Click "View Details" to see complete 
              tier breakdowns and features.
            </p>
          </div>

          <div className="space-y-12">
            {pricingData.map((serviceData) => {
              const ServiceIcon = getServiceIcon(serviceData.service);
              
              return (
                <div key={serviceData.service} className="bg-white rounded-lg shadow-lg p-8">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Notes & Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-studio-navy mb-6">Terms & Conditions</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-studio-navy mb-2">Deposit Policy</h4>
                  <p className="text-sm">50% deposit required to secure booking. Remaining balance due upon completion.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-studio-navy mb-2">Delivery Times</h4>
                  <p className="text-sm">Standard turnaround is 5-7 business days. Rush delivery available for additional fee.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-studio-navy mb-2">Travel Fees</h4>
                  <p className="text-sm">Location shoots within Kigali included. Additional travel charges apply for locations outside the city.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-studio-navy mb-6">Payment Methods</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-studio-navy mb-2">Accepted Methods</h4>
                  <p className="text-sm">Bank transfer, Mobile Money (MTN/Airtel), Cash, and major credit cards.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-studio-navy mb-2">Cancellation Policy</h4>
                  <p className="text-sm">24-hour notice required for cancellation. Deposits are non-refundable but can be applied to future bookings.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-studio-navy mb-2">Custom Packages</h4>
                  <p className="text-sm">Need something specific? Contact us for custom package pricing tailored to your requirements.</p>
                </div>
              </div>
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