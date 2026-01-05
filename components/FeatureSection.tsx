
import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  bullets?: string[];
  buttonText?: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  isMobileView?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  bullets,
  buttonText,
  imageSrc,
  imagePosition,
  isMobileView = false
}) => {
  const content = (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-slate-500 mb-8 leading-relaxed">
        {description}
      </p>
      {bullets && (
        <ul className="space-y-4 mb-8">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700">
              <span className="text-slate-400 mt-1 text-sm">+</span>
              <span className="font-medium">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {buttonText && (
        <div>
          <button className="bg-slate-100 text-slate-900 px-6 py-2.5 rounded-full font-semibold hover:bg-slate-200 transition-colors text-sm">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );

  const visual = (
    <div className={`flex justify-center items-center ${isMobileView ? '' : ''}`}>
      {isMobileView ? (
        <img 
          src={imageSrc} 
          alt="Mobile app mockup" 
          className="w-full max-w-sm object-contain"
        />
      ) : (
        <div className="w-full bg-slate-50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <img 
            src={imageSrc} 
            alt="App mockup" 
            className="rounded-xl w-full object-cover shadow-sm border border-slate-200"
          />
        </div>
      )}
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {imagePosition === 'left' ? visual : content}
          {imagePosition === 'left' ? content : visual}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
