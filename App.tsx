
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioShowcase from './components/StudioShowcase';
import FeatureSection from './components/FeatureSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StudioShowcase />
        
        {/* Section: Your shareable profile */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Your shareable profile—schedule,<br />and pricing in one place.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-16">
              Share what you do, when you're available, and how to book—all in one public profile. Clients can explore your services, join classes, purchase plans, and book instantly.
            </p>
            <div className="relative mx-auto max-w-4xl bg-slate-100 rounded-3xl p-4 md:p-8 shadow-2xl">
               <img 
                src="/profile.png" 
                alt="Profile View" 
                className="rounded-xl w-full object-cover shadow-lg border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* Section: Let clients purchase */}
        <FeatureSection 
          title="Let clients purchase your offerings in seconds."
          description="We've designed a checkout flow your clients will love—quick, intuitive, and built for conversions. From browsing to booking and payment, everything just flows."
          bullets={[
            "Sell memberships, packs, and drop-in sessions",
            "Accept payments online or in person",
            "Track client purchases and payment history"
          ]}
          buttonText="Accept Payments"
          imageSrc="/mobile1.png"
          imagePosition="right"
          isMobileView={true}
        />

        {/* Section: Clear view of business schedule */}
        <FeatureSection 
          title="A clear view of your business schedule."
          description="Keep everything organized in one place. View upcoming classes and appointments, see who's booked, track payments, and access key details at a glance."
          buttonText="Explore Class Scheduling"
          imageSrc="/tablet.png"
          imagePosition="left"
        />

        {/* Section: Manage clients seamlessly */}
        <FeatureSection 
          title="Manage clients seamlessly."
          description="Easily manage all your clients in one place. See their contact details, track purchased plans, and review upcoming, past, and canceled visits at a glance."
          bullets={[
            "See their memberships and class packs",
            "View upcoming and past appointments",
            "Track full payment history"
          ]}
          imageSrc="/tablet2.png"
          imagePosition="right"
        />

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
