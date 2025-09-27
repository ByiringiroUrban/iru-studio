import React, { useMemo, useState } from 'react';
import { ServiceCategory, pricingData } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Check } from 'lucide-react';
import framesBanner from '@/assets/projects-graphic-design.jpg';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const FRAME_SERVICE = pricingData.find(s => s.service === 'frames');

const Frames = () => {
  const categories = FRAME_SERVICE?.categories || [];
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || 'photobook-a3');
  const [cartItems, setCartItems] = useState<Array<{id: string, tier: string, price: string, title: string}>>([]);

  const activeCategory = useMemo<ServiceCategory | undefined>(() => {
    return categories.find(c => c.id === activeId);
  }, [activeId, categories]);

  const addToCart = (tier: string, price: string, title: string) => {
    const itemId = `${activeId}-${tier}`;
    const newItem = {
      id: itemId,
      tier,
      price,
      title: `${activeCategory?.title} - ${tier}`
    };
    
    setCartItems(prev => {
      const exists = prev.find(item => item.id === itemId);
      if (exists) {
        return prev.map(item => 
          item.id === itemId 
            ? { ...item, quantity: (item as any).quantity ? (item as any).quantity + 1 : 2 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const isInCart = (tier: string) => {
    const itemId = `${activeId}-${tier}`;
    return cartItems.some(item => item.id === itemId);
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0">
          <img src={framesBanner} alt="Frames & Photobooks" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Frames & Photobooks</h1>
          <p className="opacity-90 mt-2 max-w-2xl">Explore premium photobooks, classic wood frames, grass frames, and specialized packages.</p>
        </div>
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
                  <div className="mt-6 space-y-2">
                    <Button 
                      onClick={() => addToCart(t.tier, t.price, activeCategory?.title || '')}
                      className={`w-full ${isInCart(t.tier) ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'}`}
                    >
                      {isInCart(t.tier) ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="w-full">
                      Enquire
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-card p-6">
            <h3 className="text-xl font-bold text-studio-navy mb-4 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart Summary ({cartItems.length} items)
            </h3>
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-studio-navy">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.tier} Package</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{item.price}</div>
                    {(item as any).quantity > 1 && (
                      <div className="text-sm text-gray-500">Qty: {(item as any).quantity}</div>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-studio-navy">Total:</span>
                  <span className="text-xl font-bold text-primary">
                    {cartItems.reduce((total, item) => {
                      const price = parseInt(item.price.replace(/[^\d]/g, ''));
                      const quantity = (item as any).quantity || 1;
                      return total + (price * quantity);
                    }, 0).toLocaleString()} RWF
                  </span>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frames;





