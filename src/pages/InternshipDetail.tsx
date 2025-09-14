import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Camera,
  Video,
  Headphones,
  Edit3,
  BookOpen
} from 'lucide-react';
import { getInternshipBySlug } from '../data/internships';

const InternshipDetail = () => {
  const { slug } = useParams();
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  
  const program = getInternshipBySlug(slug || '');

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-studio-navy mb-4">Internship Not Found</h1>
          <Link to="/internships">
            <Button>Back to Internships</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (id: string) => {
    switch (id) {
      case 'photography': return Camera;
      case 'videography': return Video;
      case 'audio': return Headphones;
      case 'editing': return Edit3;
      default: return BookOpen;
    }
  };

  const Icon = getIcon(program.id);

  const ApplicationModal = () => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-studio-navy">Apply for {program.title}</h2>
            <button 
              onClick={() => setShowApplicationModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CV Upload</label>
              <input type="file" accept=".pdf" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Link (Optional)</label>
              <input type="url" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="https://" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="e.g., Weekdays, evenings, flexible" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join this internship?</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2"></textarea>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button 
                type="button"
                onClick={() => {
                  alert('Thank you! Your application was received. We will contact you shortly.');
                  setShowApplicationModal(false);
                }}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Submit Application
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowApplicationModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link to="/internships" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Internships
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-studio-navy">{program.title}</h1>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{program.duration}</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{program.feeRange}</span>
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {program.longDescription}
              </p>

              <div className="space-y-2">
                <Button 
                  onClick={() => setShowApplicationModal(true)}
                  className="bg-primary hover:bg-primary/90 mr-4"
                >
                  Apply Now
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Have Questions?
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Key Learning Areas */}
              <div>
                <h2 className="text-3xl font-bold text-studio-navy mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.shortDescription.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 capitalize">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-3xl font-bold text-studio-navy mb-6">Program Deliverables</h2>
                <div className="space-y-3">
                  {program.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-3xl font-bold text-studio-navy mb-6">Prerequisites</h2>
                <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                  {program.prerequisites}
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-studio-navy mb-4">Program Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-medium">{program.feeRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium text-right text-sm">{program.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                <p className="mb-4 text-sm opacity-90">
                  Join our internship program and kickstart your creative career.
                </p>
                <Button 
                  onClick={() => setShowApplicationModal(true)}
                  className="w-full bg-white text-primary hover:bg-gray-100"
                >
                  Apply Now
                </Button>
              </div>

              {/* Contact Info */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-studio-navy mb-4">Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact our team for more information about this program.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && <ApplicationModal />}
    </div>
  );
};

export default InternshipDetail;