'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyDetails } from '@/lib/data';

export default function WhatsAppButton() {
  const cleanNumber = companyDetails.whatsappNumber.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent('Hello HydroSync Innovations Team! I would like more information regarding your training programs and IoT solutions.')}`;

  return (
    <aside aria-label="Support Assistance" className="fixed bottom-6 right-6 z-40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
        aria-label="Chat with HydroSync on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">WhatsApp Support</span>
      </a>
    </aside>
  );
}
