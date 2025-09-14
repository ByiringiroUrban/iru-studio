export interface InternshipProgram {
  id: string;
  slug: string;
  title: string;
  duration: string;
  feeRange: string;
  shortDescription: string[];
  longDescription: string;
  deliverables: string[];
  prerequisites: string;
  schedule: string;
  image: string;
}

export const internshipPrograms: InternshipProgram[] = [
  {
    id: 'photography',
    slug: 'photography-internship',
    title: 'Photography Internship',
    duration: '1–2 months',
    feeRange: 'RWF 100,000 – 200,000',
    shortDescription: [
      'hands-on studio shoots',
      'editing basics',
      'lighting & composition'
    ],
    longDescription: 'Gain hands-on experience in professional photography through studio shoots, learn the fundamentals of photo editing, and master lighting techniques and composition principles. You\'ll work alongside our senior photographers on real client projects and develop your own signature style.',
    deliverables: [
      'Personal portfolio piece',
      'Mentor review and feedback',
      'Certificate of completion'
    ],
    prerequisites: 'Basic camera knowledge or willingness to learn',
    schedule: 'Flexible scheduling available, 3-4 days per week',
    image: '/assets/photography-service.jpg'
  },
  {
    id: 'videography',
    slug: 'videography-internship',
    title: 'Videography Internship',
    duration: '1–2 months',
    feeRange: 'RWF 150,000 – 300,000',
    shortDescription: [
      'camera operation',
      'storyboarding',
      'editing workflows'
    ],
    longDescription: 'Learn professional camera operation techniques, develop skills in visual storytelling through storyboarding, and master video editing workflows. You\'ll participate in live shoots and post-production processes while building your videography expertise.',
    deliverables: [
      'Completed video project',
      'Storyboard portfolio',
      'Certificate of completion'
    ],
    prerequisites: 'Interest in filmmaking and basic computer skills',
    schedule: 'Flexible scheduling available, 3-4 days per week',
    image: '/assets/videography-service.jpg'
  },
  {
    id: 'audio',
    slug: 'audio-production-internship',
    title: 'Audio Production Internship',
    duration: '1 month',
    feeRange: 'RWF 100,000 – 200,000',
    shortDescription: [
      'recording basics',
      'mixing & mastering intro'
    ],
    longDescription: 'Master the fundamentals of professional audio recording, learn mixing techniques, and get introduced to the mastering process. You\'ll work with professional equipment and software while contributing to real audio production projects.',
    deliverables: [
      'Mixed and mastered track',
      'Recording session documentation',
      'Certificate of completion'
    ],
    prerequisites: 'Basic understanding of music or audio interest',
    schedule: 'Intensive program, 4-5 days per week',
    image: '/assets/audio-service.jpg'
  },
  {
    id: 'editing',
    slug: 'editing-retouching-internship',
    title: 'Editing & Retouching Internship',
    duration: '1 month',
    feeRange: 'RWF 100,000 – 200,000',
    shortDescription: [
      'photo retouching',
      'color grading',
      'video editing fundamentals'
    ],
    longDescription: 'Develop advanced skills in photo retouching, learn professional color grading techniques, and master video editing fundamentals. You\'ll work on diverse projects while building a comprehensive editing skillset.',
    deliverables: [
      'Before/after portfolio',
      'Edited video samples',
      'Certificate of completion'
    ],
    prerequisites: 'Basic computer skills and creative eye',
    schedule: 'Flexible scheduling available, 3-4 days per week',
    image: '/assets/editing-service.jpg'
  }
];

export const learningOutcomes = [
  'mentorship from industry professionals',
  'portfolio development and curation',
  'production workflows and best practices',
  'client brief interpretation and execution',
  'post-production pipeline mastery',
  'teamwork & professionalism skills'
];

export const internshipFAQs = [
  {
    question: 'Are internships paid?',
    answer: 'Internship fees vary by program. See individual program details for specific costs.'
  },
  {
    question: 'Can I get a certificate?',
    answer: 'Yes – all interns receive a certificate of completion and comprehensive portfolio review.'
  },
  {
    question: 'What equipment do I need?',
    answer: 'We provide all professional equipment. You just need to bring your creativity and willingness to learn.'
  },
  {
    question: 'Can I work part-time during the internship?',
    answer: 'Yes, we offer flexible scheduling to accommodate other commitments.'
  }
];

export const getInternshipBySlug = (slug: string): InternshipProgram | undefined => {
  return internshipPrograms.find(program => program.slug === slug);
};

export const getAllInternships = () => internshipPrograms;