
import React from 'react';

const studios = [
  { name: 'Group training', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Pilates studio', image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=600' },
  { name: 'Yoga studio', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
  { name: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600' },
  { name: 'CrossFit gym', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600' },
  { name: 'Boxing studio', image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=600' },
  { name: 'Dance studio', image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Personal training', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600' },
  { name: 'Wellness', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600' }
];

const StudioShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-medium mb-4">One platform for all.</h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          No matter your niche, our software helps you manage bookings, payments, clients, and schedules with ease.
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 hide-scrollbar snap-x">
          {studios.map((studio, idx) => (
            <div 
              key={idx} 
              className="flex-none w-72 h-96 relative group rounded-2xl overflow-hidden snap-center cursor-pointer"
            >
              <img 
                src={studio.image} 
                alt={studio.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white font-semibold text-lg flex items-center gap-2">
                  {studio.name} <span className="text-xs">›</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-2 mt-4">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50">
             <span className="text-xl">‹</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50">
             <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioShowcase;
