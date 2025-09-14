import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, X } from 'lucide-react';
import { team } from '@/data/team';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4" />
            <Link to="/" className="text-studio-navy hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Our Team</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind Frame & Tune Studio. Our team brings unmatched expertise 
            and passion to every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl shadow-card overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center">
                <img 
                  src={member.photo} 
                  alt={`${member.name} - ${member.title}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEyNS4xNDcgNzEuNzk5IDEwNSAxMDAgMTA1UzE1MCAxMjUuMTQ3IDE1MCAxNTBWMTYwSDUwVjE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHRleHQgeD0iMTAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiI+UGxhY2Vob2xkZXI8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-studio-navy mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-100">
                  <img 
                    src={selectedMember.photo} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEyNS4xNDcgNzEuNzk5IDEwNSAxMDAgMTA1UzE1MCAxMjUuMTQ3IDE1MCAxNTBWMTYwSDUwVjE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHRleHQgeD0iMTAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiI+UGxhY2Vob2xkZXI8L3RleHQ+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-studio-navy mb-2">{selectedMember.name}</h3>
                <p className="text-primary font-medium mb-4">{selectedMember.title}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;