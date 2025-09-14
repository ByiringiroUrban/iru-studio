import React from 'react';
import { 
  Camera, 
  Video, 
  Headphones, 
  Brush, 
  Settings, 
  Target, 
  Users, 
  Gem, 
  Handshake, 
  DollarSign, 
  Trophy, 
  CheckCircle, 
  Eye,
  Cog,
  Image,
  Play,
  Palette,
  Edit3,
  Mic
} from 'lucide-react';

// Icon mapping for consistent usage across the app
export const ServiceIcons = {
  photography: Camera,
  videography: Video,
  audio: Headphones,
  creative: Brush,
  editing: Edit3,
  design: Palette,
  play: Play,
  image: Image,
  mic: Mic
};

export const FeatureIcons = {
  comprehensive: Palette,
  team: Users,
  tailored: Target,
  equipment: Cog,
  quality: Gem,
  collaborative: Handshake,
  affordable: DollarSign,
  proven: Trophy,
  mission: CheckCircle,
  vision: Eye
};

// Icon component with consistent styling
interface IconProps {
  icon: keyof typeof ServiceIcons | keyof typeof FeatureIcons;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'circle' | 'square';
  className?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  icon, 
  size = 'md', 
  variant = 'circle', 
  className = '', 
  ...ariaProps 
}) => {
  const IconComponent = ServiceIcons[icon as keyof typeof ServiceIcons] || 
                       FeatureIcons[icon as keyof typeof FeatureIcons];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const variantClasses = {
    circle: 'rounded-full',
    square: 'rounded-lg'
  };

  return (
    <IconComponent 
      className={`${sizeClasses[size]} ${className}`}
      {...ariaProps}
    />
  );
};

// Service Icon Tile Component for consistent service badges
interface ServiceIconTileProps {
  icon: keyof typeof ServiceIcons;
  size?: number;
  className?: string;
}

export const ServiceIconTile: React.FC<ServiceIconTileProps> = ({ 
  icon, 
  size = 56, 
  className = '' 
}) => {
  const IconComponent = ServiceIcons[icon];
  
  if (!IconComponent) {
    console.warn(`Service icon "${icon}" not found`);
    return null;
  }

  return (
    <div 
      className={`bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <IconComponent 
        className="w-6 h-6 text-gray-700" 
        aria-hidden="true"
      />
    </div>
  );
};

export default Icon;