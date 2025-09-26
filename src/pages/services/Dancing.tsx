import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Check, PlayCircle, CreditCard, Shield, Clock, Users, Star, Zap, Crown, X, User, Mail, Phone, Calendar } from 'lucide-react';
import dancingService from '@/assets/photography-service.jpg';
import videographyService from '@/assets/videography-service.jpg';
import audioService from '@/assets/audio-service.jpg';

const Dancing = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedTeamSize, setSelectedTeamSize] = useState<string>('5');
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedDanceClass, setSelectedDanceClass] = useState<any>(null);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    paymentMethod: '',
    emergencyContact: ''
  });

  const dancePerformancePackages = {
    '5': {
      basic: { price: 375000, description: 'Basic dance performance package' },
      standard: { price: 450000, description: 'Choreography customisation included' },
      premium: { price: 600000, description: 'Custom choreography, costumes, and two performance locations' }
    },
    '10': {
      basic: { price: 750000, description: 'Basic dance performance package' },
      standard: { price: 900000, description: 'Choreography and rehearsal footage' },
      premium: { price: 1200000, description: 'Custom choreography, costumes, rehearsal footage, and three performance locations' }
    },
    '20': {
      basic: { price: 1500000, description: 'Basic dance performance package' },
      standard: { price: 1800000, description: 'Choreography rehearsal footage, costume coordination' },
      premium: { price: 2400000, description: 'All-inclusive with a full day of performances and professional videography' }
    }
  };

  const videoMusicDancingPackages = {
    '5': {
      basic: { price: 175000, description: 'Basic video music dancing package' },
      standard: { price: 250000, description: 'With rehearsal coverage' },
      premium: { price: 400000, description: 'Choreography, rehearsals, costumes, and on-set professional director' }
    },
    '10': {
      basic: { price: 350000, description: 'Basic video music dancing package' },
      standard: { price: 500000, description: 'Rehearsals + on-set assistance' },
      premium: { price: 800000, description: 'Choreography, rehearsals, costumes, director, and behind-the-scenes video' }
    },
    '20': {
      basic: { price: 700000, description: 'Basic video music dancing package' },
      standard: { price: 1000000, description: 'Rehearsals, on-set coordination, and two costume changes' },
      premium: { price: 1500000, description: 'All-inclusive + post-production highlights video' }
    },
    '30': {
      basic: { price: 1050000, description: 'Basic video music dancing package' },
      standard: { price: 1500000, description: 'Full rehearsal + two costumes + on-set choreography adjustments' },
      premium: { price: 2250000, description: 'Complete package with live audience experience + promotional video' }
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('rw-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleBookNow = (service: string, tier: string, teamSize: string) => {
    const packageKey = `${service}-${tier}-${teamSize}`;
    setSelectedPackage(packageKey);
    // Scroll to teaching section
    document.getElementById('teaching-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollNow = (danceClass: any) => {
    setSelectedDanceClass(danceClass);
    setShowEnrollmentModal(true);
  };

  const handleLearnMore = (program: any) => {
    setSelectedProgram(program);
    setShowLearnMoreModal(true);
  };

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment system
    alert(`Enrollment submitted for ${selectedDanceClass?.name}! Payment required: ${selectedDanceClass?.price} RWF`);
    setShowEnrollmentModal(false);
    setEnrollmentForm({
      name: '',
      email: '',
      phone: '',
      age: '',
      experience: '',
      paymentMethod: '',
      emergencyContact: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-studio-navy font-medium">Dancing Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={videographyService} alt="Dance Hero" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Professional <span className="text-primary">Dancing</span> Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Transform your dance performances and music videos with our expert choreography, videography, and production services. From intimate studio sessions to grand performances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-semibold">
                Book Now
                <PlayCircle className="w-5 h-5 ml-2" />
              </Link>
              <button 
                onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-studio-navy transition-all duration-300 font-semibold"
              >
                View Pricing
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Our Dancing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive dance services covering everything from choreography to final production
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Dance Performance */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-studio-navy mb-4">Dance Performance</h3>
                <p className="text-gray-600 mb-6">Professional dance performance coverage with choreography, costumes, and multiple locations.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><Check className="w-5 h-5 text-orange-500 mr-3" />Custom choreography</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-orange-500 mr-3" />Costume coordination</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-orange-500 mr-3" />Multiple performance locations</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-orange-500 mr-3" />Professional videography</li>
                </ul>
              </div>
            </div>

            {/* Video Music Dancing */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-studio-navy mb-4">Video Music Dancing</h3>
                <p className="text-gray-600 mb-6">Complete music video production with choreography, rehearsals, and post-production.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><Check className="w-5 h-5 text-purple-500 mr-3" />Rehearsal coverage</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-purple-500 mr-3" />On-set choreography</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-purple-500 mr-3" />Behind-the-scenes video</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-purple-500 mr-3" />Post-production highlights</li>
                </ul>
              </div>
            </div>

            {/* Audio & Sound Design */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-studio-navy mb-4">Audio & Sound Design</h3>
                <p className="text-gray-600 mb-6">Professional audio production, music licensing, and sound design for dance videos.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-3" />Music selection & licensing</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-3" />Sound design & mix</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-3" />Voice-over recording</li>
                  <li className="flex items-center"><Check className="w-5 h-5 text-blue-500 mr-3" />Audio post-production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package for your dance project. All prices are in Rwandan Francs (RWF).
            </p>
          </div>

          {/* Team Size Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {['5', '10', '20', '30'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedTeamSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedTeamSize === size
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Up to {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dance Performance Pricing */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Dance Performance</h3>
              <p className="text-orange-100">Professional dance performance packages with choreography and costumes</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(dancePerformancePackages[selectedTeamSize as keyof typeof dancePerformancePackages] || {}).map(([tier, details]) => (
                <div key={tier} className={`rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  tier === 'basic' ? 'bg-white border-2 border-orange-200' :
                  tier === 'standard' ? 'bg-white border-2 border-green-200' :
                  'bg-white border-2 border-purple-200'
                }`}>
                  <div className={`p-6 text-center ${
                    tier === 'basic' ? 'bg-orange-50' :
                    tier === 'standard' ? 'bg-green-50' :
                    'bg-purple-50'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      tier === 'basic' ? 'bg-orange-500' :
                      tier === 'standard' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}>
                      {tier === 'basic' ? <Users className="w-8 h-8 text-white" /> :
                       tier === 'standard' ? <Star className="w-8 h-8 text-white" /> :
                       <Crown className="w-8 h-8 text-white" />}
                    </div>
                    <h4 className="text-2xl font-bold text-studio-navy mb-2 capitalize">{tier}</h4>
                    <div className="text-4xl font-bold text-studio-navy mb-4">{formatPrice(details.price)}</div>
                    <p className="text-gray-600 mb-6">{details.description}</p>
                    <button
                      onClick={() => handleBookNow('dance-performance', tier, selectedTeamSize)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        tier === 'basic' ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                        tier === 'standard' ? 'bg-green-500 hover:bg-green-600 text-white' :
                        'bg-purple-500 hover:bg-purple-600 text-white'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Music Dancing Pricing */}
          <div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Video Music Dancing</h3>
              <p className="text-purple-100">Complete music video production with choreography and post-production</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(videoMusicDancingPackages[selectedTeamSize as keyof typeof videoMusicDancingPackages] || {}).map(([tier, details]) => (
                <div key={tier} className={`rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  tier === 'basic' ? 'bg-white border-2 border-orange-200' :
                  tier === 'standard' ? 'bg-white border-2 border-green-200' :
                  'bg-white border-2 border-purple-200'
                }`}>
                  <div className={`p-6 text-center ${
                    tier === 'basic' ? 'bg-orange-50' :
                    tier === 'standard' ? 'bg-green-50' :
                    'bg-purple-50'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      tier === 'basic' ? 'bg-orange-500' :
                      tier === 'standard' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}>
                      {tier === 'basic' ? <PlayCircle className="w-8 h-8 text-white" /> :
                       tier === 'standard' ? <Star className="w-8 h-8 text-white" /> :
                       <Crown className="w-8 h-8 text-white" />}
                    </div>
                    <h4 className="text-2xl font-bold text-studio-navy mb-2 capitalize">{tier}</h4>
                    <div className="text-4xl font-bold text-studio-navy mb-4">{formatPrice(details.price)}</div>
                    <p className="text-gray-600 mb-6">{details.description}</p>
                    <button
                      onClick={() => handleBookNow('video-music-dancing', tier, selectedTeamSize)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        tier === 'basic' ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                        tier === 'standard' ? 'bg-green-500 hover:bg-green-600 text-white' :
                        'bg-purple-500 hover:bg-purple-600 text-white'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Dancing Section */}
      <section id="teaching-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Learn to Dance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of dance with our professional instructors. Choose from traditional Rwandan dances or modern contemporary styles.
            </p>
          </div>

          {/* Dance Categories */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Traditional Dancing */}
            <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Traditional Dancing</h3>
                    <p className="text-red-100">Authentic Rwandan cultural dances</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid gap-6">
                  {/* Intore */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-studio-navy">Intore Dance</h4>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Traditional</span>
                    </div>
                    <p className="text-gray-600 mb-4">The royal dance of Rwanda, featuring warrior movements and traditional storytelling.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">50,000 RWF</div>
                        <div className="text-sm text-gray-500">Per session</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">2 hours</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Mon, Wed, Fri: 6:00 PM - 8:00 PM
                      </div>
                      <button 
                        onClick={() => handleEnrollNow({
                          name: 'Intore Dance',
                          price: 50000,
                          duration: '2 hours',
                          schedule: 'Mon, Wed, Fri: 6:00 PM - 8:00 PM',
                          category: 'Traditional'
                        })}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>

                  {/* Umushayayo */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-studio-navy">Umushayayo</h4>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Traditional</span>
                    </div>
                    <p className="text-gray-600 mb-4">Elegant dance celebrating Rwandan culture with graceful movements and traditional music.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">45,000 RWF</div>
                        <div className="text-sm text-gray-500">Per session</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">1.5 hours</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Tue, Thu: 5:30 PM - 7:00 PM
                      </div>
                      <button 
                        onClick={() => handleEnrollNow({
                          name: 'Umushayayo',
                          price: 45000,
                          duration: '1.5 hours',
                          schedule: 'Tue, Thu: 5:30 PM - 7:00 PM',
                          category: 'Traditional'
                        })}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>

                  {/* Ikinyemera */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-studio-navy">Ikinyemera</h4>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Traditional</span>
                    </div>
                    <p className="text-gray-600 mb-4">Joyful celebration dance with rhythmic footwork and community spirit.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">40,000 RWF</div>
                        <div className="text-sm text-gray-500">Per session</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">1.5 hours</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Sat: 10:00 AM - 11:30 AM
                      </div>
                      <button 
                        onClick={() => handleEnrollNow({
                          name: 'Ikinyemera',
                          price: 40000,
                          duration: '1.5 hours',
                          schedule: 'Sat: 10:00 AM - 11:30 AM',
                          category: 'Traditional'
                        })}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Dancing */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Modern Dancing</h3>
                    <p className="text-purple-100">Contemporary and urban dance styles</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid gap-6">
                  {/* Hip Hop */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-studio-navy">Hip Hop</h4>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Modern</span>
                    </div>
                    <p className="text-gray-600 mb-4">High-energy urban dance with freestyle elements, breaking, and street dance moves.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">60,000 RWF</div>
                        <div className="text-sm text-gray-500">Per session</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">2 hours</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Mon, Wed: 7:00 PM - 9:00 PM
                      </div>
                      <button 
                        onClick={() => handleEnrollNow({
                          name: 'Hip Hop',
                          price: 60000,
                          duration: '2 hours',
                          schedule: 'Mon, Wed: 7:00 PM - 9:00 PM',
                          category: 'Modern'
                        })}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>

                  {/* Contemporary */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-studio-navy">Contemporary</h4>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Modern</span>
                    </div>
                    <p className="text-gray-600 mb-4">Expressive dance combining ballet, modern, and jazz techniques with emotional storytelling.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">55,000 RWF</div>
                        <div className="text-sm text-gray-500">Per session</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">1.5 hours</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Tue, Thu: 6:00 PM - 7:30 PM
                      </div>
                      <button 
                        onClick={() => handleEnrollNow({
                          name: 'Contemporary',
                          price: 55000,
                          duration: '1.5 hours',
                          schedule: 'Tue, Thu: 6:00 PM - 7:30 PM',
                          category: 'Modern'
                        })}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>

                  {/* Afrobeat */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-studio-navy">Afrobeat</h4>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Modern</span>
                    </div>
                    <p className="text-gray-600 mb-4">Vibrant African-inspired dance with modern beats, celebrating African culture and rhythm.</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">50,000 RWF</div>
                        <div className="text-sm text-gray-500">Per session</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">2 hours</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Fri: 6:30 PM - 8:30 PM
                      </div>
                      <button 
                        onClick={() => handleEnrollNow({
                          name: 'Afrobeat',
                          price: 50000,
                          duration: '2 hours',
                          schedule: 'Fri: 6:30 PM - 8:30 PM',
                          category: 'Modern'
                        })}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Programs */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Special Dance Programs</h3>
              <p className="text-indigo-100 text-lg">Intensive courses and workshops for serious dancers</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Beginner Intensive</h4>
                  <p className="text-indigo-100 mb-4">4-week program for complete beginners</p>
                  <div className="text-2xl font-bold mb-2">200,000 RWF</div>
                  <div className="text-sm text-indigo-200 mb-4">8 sessions total</div>
                  <button 
                    onClick={() => handleLearnMore({
                      name: 'Beginner Intensive',
                      price: 200000,
                      sessions: 8,
                      duration: '4 weeks',
                      description: 'Perfect for complete beginners who want to learn dance fundamentals'
                    })}
                    className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Advanced Masterclass</h4>
                  <p className="text-indigo-100 mb-4">Professional-level training program</p>
                  <div className="text-2xl font-bold mb-2">500,000 RWF</div>
                  <div className="text-sm text-indigo-200 mb-4">12 sessions total</div>
                  <button 
                    onClick={() => handleLearnMore({
                      name: 'Advanced Masterclass',
                      price: 500000,
                      sessions: 12,
                      duration: '6 weeks',
                      description: 'Professional-level training for experienced dancers'
                    })}
                    className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Group Workshops</h4>
                  <p className="text-indigo-100 mb-4">Team building through dance</p>
                  <div className="text-2xl font-bold mb-2">300,000 RWF</div>
                  <div className="text-sm text-indigo-200 mb-4">Per group (up to 15)</div>
                  <button 
                    onClick={() => handleLearnMore({
                      name: 'Group Workshops',
                      price: 300000,
                      sessions: 'Custom',
                      duration: 'Flexible',
                      description: 'Team building through dance for groups and organizations'
                    })}
                    className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-studio-navy to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing Dance Content?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's discuss your dance project and create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold">
              Get Started Today
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/gallery" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-studio-navy transition-all duration-300 font-semibold">
              View Our Work
              <PlayCircle className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-studio-navy">Enroll in {selectedDanceClass?.name}</h3>
                <button 
                  onClick={() => setShowEnrollmentModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Price:</span> {formatPrice(selectedDanceClass?.price || 0)}
                  </div>
                  <div>
                    <span className="font-semibold">Duration:</span> {selectedDanceClass?.duration}
                  </div>
                  <div>
                    <span className="font-semibold">Schedule:</span> {selectedDanceClass?.schedule}
                  </div>
                  <div>
                    <span className="font-semibold">Category:</span> {selectedDanceClass?.category}
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleEnrollmentSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={enrollmentForm.name}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, name: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={enrollmentForm.email}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, email: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={enrollmentForm.phone}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, phone: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    min="5"
                    max="100"
                    value={enrollmentForm.age}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, age: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your age"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dance Experience *
                  </label>
                  <select
                    required
                    value={enrollmentForm.experience}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, experience: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (No experience)</option>
                    <option value="intermediate">Intermediate (Some experience)</option>
                    <option value="advanced">Advanced (Experienced dancer)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact *
                  </label>
                  <input
                    type="tel"
                    required
                    value={enrollmentForm.emergencyContact}
                    onChange={(e) => setEnrollmentForm({...enrollmentForm, emergencyContact: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Emergency contact number"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CreditCard className="w-4 h-4 inline mr-1" />
                  Payment Method *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile_money"
                      required
                      onChange={(e) => setEnrollmentForm({...enrollmentForm, paymentMethod: e.target.value})}
                      className="mr-2"
                    />
                    <span>Mobile Money</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      required
                      onChange={(e) => setEnrollmentForm({...enrollmentForm, paymentMethod: e.target.value})}
                      className="mr-2"
                    />
                    <span>Bank Transfer</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      required
                      onChange={(e) => setEnrollmentForm({...enrollmentForm, paymentMethod: e.target.value})}
                      className="mr-2"
                    />
                    <span>Cash Payment</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      required
                      onChange={(e) => setEnrollmentForm({...enrollmentForm, paymentMethod: e.target.value})}
                      className="mr-2"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Payment Required</h4>
                    <p className="text-sm text-yellow-700">
                      Payment of <strong>{formatPrice(selectedDanceClass?.price || 0)}</strong> is required to complete enrollment. 
                      You will be contacted within 24 hours to arrange payment and confirm your enrollment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowEnrollmentModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Enroll & Pay {formatPrice(selectedDanceClass?.price || 0)}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMoreModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-studio-navy">{selectedProgram?.name}</h3>
                <button 
                  onClick={() => setShowLearnMoreModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Price:</span> {formatPrice(selectedProgram?.price || 0)}
                  </div>
                  <div>
                    <span className="font-semibold">Duration:</span> {selectedProgram?.duration}
                  </div>
                  <div>
                    <span className="font-semibold">Sessions:</span> {selectedProgram?.sessions}
                  </div>
                  <div>
                    <span className="font-semibold">Type:</span> Special Program
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-studio-navy mb-3">Program Description</h4>
                <p className="text-gray-600 mb-4">{selectedProgram?.description}</p>
                
                <h4 className="text-lg font-semibold text-studio-navy mb-3">What's Included</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Professional instruction</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />All necessary equipment</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Certificate of completion</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Performance opportunities</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Lifetime access to practice videos</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Flexible Scheduling</h4>
                    <p className="text-sm text-blue-700">
                      We work with your schedule to find the best times for your sessions. 
                      Contact us to discuss available time slots.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setShowLearnMoreModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
                >
                  Contact Us to Enroll
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dancing;
