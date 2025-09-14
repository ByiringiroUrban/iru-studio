import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ServiceCategory } from '@/data/pricing';
import { useToast } from '@/components/ui/use-toast';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: ServiceCategory;
  service: string;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, category, service }) => {
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trap
      const firstFocusable = document.querySelector('[data-modal] button');
      if (firstFocusable) (firstFocusable as HTMLElement).focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOrder = (tier: string) => {
    const key = 'fts_cart';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ service, categoryId: category.id, tier, quantity: 1 });
    localStorage.setItem(key, JSON.stringify(existing));
    toast({ title: 'Added to cart' });
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
        data-modal
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-studio-navy">
              {category.title}
            </h2>
            <p className="text-gray-600 mt-1">{category.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Pricing Tiers */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {category.tiers.map((tier) => (
              <div 
                key={tier.tier}
                className={`relative border-2 rounded-xl p-6 h-full flex flex-col ${
                  tier.tier === 'standard' 
                    ? 'border-primary bg-primary/5 transform scale-105 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.tier === 'standard' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-2 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-studio-navy mb-2 text-center">
                    {tier.label}
                  </h3>
                  
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-studio-navy">
                      {tier.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button
                    onClick={() => handleOrder(tier.tier)}
                    className={`w-full py-3 font-semibold ${
                      tier.tier === 'standard'
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-lg'
                        : 'bg-studio-navy hover:bg-studio-navy/90 text-white'
                    }`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          <Button
            onClick={onClose}
            variant="outline"
            className="px-6"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;