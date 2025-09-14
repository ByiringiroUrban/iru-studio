import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Video, 
  Headphones, 
  Edit3, 
  Clock, 
  DollarSign,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  BookOpen,
  Target,
  Briefcase,
  Star
} from 'lucide-react';
import { internshipPrograms, learningOutcomes, internshipFAQs } from '../data/internships';

const Internships = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const getIconForProgram = (id: string) => {
    switch (id) {
      case 'photography': return Camera;
      case 'videography': return Video;
      case 'audio': return Headphones;
      case 'editing': return Edit3;
      default: return BookOpen;
    }
  };

  const ApplicationModal = () => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-studio-navy">Apply for Internship</h2>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Program</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Select a program</option>
                {internshipPrograms.map(program => (
                  <option key={program.id} value={program.id}>{program.title}</option>
                ))}
              </select>
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
                  // Simulate form submission
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Internships at Frame & Tune Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Join Frame & Tune Studio's internship program to gain hands-on experience in photography, 
            videography, editing, audio production, and creative design. Our internships are project-based 
            with mentorship from senior team members and opportunities to exhibit or publish your work.
          </p>
          <Button 
            onClick={() => setShowApplicationModal(true)}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Programs Offered</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our specialized internship programs designed to give you real-world experience 
              in your area of interest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipPrograms.map((program) => {
              const Icon = getIconForProgram(program.id);
              return (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-studio-navy mb-2 text-center">
                      {program.title}
                    </h3>

                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {program.feeRange}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {program.shortDescription.map((bullet, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2">
                      <Link to={`/internships/${program.slug}`}>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                      <Button 
                        onClick={() => setShowApplicationModal(true)}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">What You'll Learn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive internship program covers all aspects of creative production 
              and professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningOutcomes.map((outcome, index) => {
              const icons = [Users, Award, BookOpen, Target, Briefcase, Star];
              const Icon = icons[index % icons.length];
              
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-studio-navy mb-2 capitalize">
                      {outcome}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Develop skills and knowledge in {outcome.toLowerCase()} through hands-on experience and expert guidance.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-studio-navy mb-6">How to Apply</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to start your creative journey? Click Apply to open the application form 
            with your details, CV upload, preferred program, and availability. 
            Applications are reviewed weekly.
          </p>
          <Button 
            onClick={() => setShowApplicationModal(true)}
            className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {internshipFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-studio-navy">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && <ApplicationModal />}
    </div>
  );
};

export default Internships;