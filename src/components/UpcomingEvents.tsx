'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: 'RSA Conference',
    date: 'March 23-26, 2026',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    description: 'Premier cybersecurity event focusing on machine learning and data security innovations.',
    details: 'The RSA Conference is the ultimate marketplace for cybersecurity ideas, innovations, and connections. Join thousands of professionals to explore emerging technologies and network with industry leaders. Key topics include AI-driven threat detection, quantum computing security, and zero-trust architectures.'
  },
  {
    id: 2,
    title: 'Cisco Live',
    date: 'May 31 - June 4, 2026',
    location: 'Las Vegas, NV',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    description: 'Networking and IT infrastructure conference with hands-on labs.',
    details: 'Cisco Live brings together networking professionals for technical sessions, certification exams, and world-class keynotes. Learn about next-gen networking, cloud security, and automation. Features hands-on labs and real-world case studies from enterprise deployments.'
  },
  {
    id: 3,
    title: 'COLLIDE Data & AI Conference',
    date: 'September 29 - October 2, 2026',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1516321310764-9f7a25b4a4da?w=400&h=300&fit=crop',
    description: 'Largest Data Science and AI conference with Fortune 500 speakers.',
    details: 'COLLIDE focuses on machine learning technologies and innovations perfect for data engineers and ETL specialists. Network with Fortune 500 CDOs and CDAOs. Sessions cover advanced analytics, generative AI, and scalable data pipelines.'
  }
];

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  details: string;
}

const UpcomingEventsPage: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const toggleFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Events
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Discover exciting tech conferences and networking opportunities ahead.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {eventsData.map((event: Event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * event.id }}
                className="w-full h-[500px] perspective-1000"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => toggleFlip(event.id)}
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCard === event.id ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  
                  <motion.div
                    className="absolute w-full h-full rounded-2xl shadow-2xl border border-gray-100 overflow-hidden bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* BACK: All Details */}
                  <motion.div
                    className="absolute w-full h-full bg-gradient-to-br from-purple-800 to-purple-900 text-white rounded-2xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleFlip(event.id); }}
                        className="mb-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                        aria-label="Back"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-3 opacity-90" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-3 opacity-90" />
                          <span className="font-semibold">{event.location}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 mr-3 mt-0.5 opacity-90 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{event.details}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="#register"
                        className="flex-1 bg-white text-indigo-600 font-semibold py-3 px-6 rounded-xl text-center hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                      >
                        Register Now
                      </a>
                      <button className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
