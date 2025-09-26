import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Home, Calendar, MapPin, Phone, Mail, ShoppingCart, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { getCart, clearCart, type CartItem } from '@/lib/cart';

const BookNow = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const cartItems = getCart();
    setCart(cartItems);

    // Pre-fill form if coming from pricing
    const service = searchParams.get('service');
    const category = searchParams.get('category');
    const tier = searchParams.get('tier');
    
    if (service && category && tier) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in the ${tier} tier for ${category.replace(/-/g, ' ')} in ${service}. Please provide more information.`
      }));
    }
  }, [searchParams]);

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('fts_cart', JSON.stringify(newCart));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (cart.length === 0) {
      toast({
        title: "Your cart is empty",
        description: "Please add some items to your cart before booking.",
        variant: "destructive"
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch((import.meta as any).env.VITE_API_URL + '/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          items: cart
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Booking failed');
      }

      toast({
        title: "Booking submitted successfully!",
        description: "You will receive a confirmation email shortly. Our team will contact you within 24 hours."
      });

      // Clear cart and form
      clearCart();
      setCart([]);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        location: '',
        message: ''
      });

    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Booking failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price?.replace(/[^\d.]/g, '') || '0');
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4" />
            <Link to="/" className="text-studio-navy hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/pricing" className="text-studio-navy hover:text-primary">Pricing</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Book Now</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">
            Book Your Session
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete your booking by filling out the form below. We'll confirm your session and get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Cart Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Your Order ({cart.length} item{cart.length !== 1 ? 's' : ''})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your cart is empty</p>
                    <Link to="/pricing" className="text-primary hover:underline">
                      Browse our services
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-studio-navy">
                            {item.name || item.service}
                          </h4>
                          {item.tier && (
                            <p className="text-sm text-gray-600 capitalize">{item.tier}</p>
                          )}
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-primary">
                            {item.price || 'Price TBD'}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-primary">
                          {calculateTotal().toLocaleString()} RWF
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="date"
                        name="eventDate"
                        placeholder="Event Date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="location"
                        placeholder="Event Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Additional notes or special requirements"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={submitting || cart.length === 0}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  >
                    {submitting ? 'Submitting...' : 'Complete Booking'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-studio-navy text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call: 0795 381 733 / 0736 318 111</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@frameandtunestudio.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Gahanga, Kicukiro, Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

