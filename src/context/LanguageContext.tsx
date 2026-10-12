'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const translations: Translations = {
  home: { en: 'Home', hi: 'होम' },
  aboutUs: { en: 'About Us', hi: 'हमारे बारे में' },
  services: { en: 'Services', hi: 'सेवाएं' },
  internships: { en: 'Internships', hi: 'इंटर्नशिप' },
  courses: { en: 'Courses', hi: 'कोर्सेस' },
  liveClasses: { en: 'Live Classes', hi: 'लाइव कक्षाएं' },
  events: { en: 'Events', hi: 'इवेंट्स' },
  forSchools: { en: 'For Schools', hi: 'स्कूलों के लिए' },
  forColleges: { en: 'For Colleges', hi: 'कॉलेजों के लिए' },
  projects: { en: 'Projects', hi: 'प्रोजेक्ट्स' },
  team: { en: 'Team', hi: 'हमारी टीम' },
  gallery: { en: 'Gallery', hi: 'गैलरी' },
  blog: { en: 'Blog / Resources', hi: 'ब्लॉग व संसाधन' },
  taskProgress: { en: 'Task & Progress', hi: 'कार्य और प्रगति' },
  contact: { en: 'Contact', hi: 'संपर्क करें' },
  applyNow: { en: 'Apply Now', hi: 'आवेदन करें' },
  portals: { en: 'Portals', hi: 'पोर्टल' },
  tagline: { 
    en: 'Innovation for a Healthier Tomorrow', 
    hi: 'स्वस्थ कल के लिए नवाचार' 
  },
  heroTitle: {
    en: 'Pioneering IoT, Embedded Systems & AI Solutions',
    hi: 'आईओटी, एम्बेडेड सिस्टम और एआई समाधानों में अग्रणी'
  },
  heroSubtitle: {
    en: 'Empowering students, researchers, and industries through cutting-edge technology training, hardware innovation, and live hands-on project engineering.',
    hi: 'अत्याधुनिक प्रौद्योगिकी प्रशिक्षण, हार्डवेयर नवाचार और प्रत्यक्ष प्रोजेक्ट इंजीनियरिंग के माध्यम से छात्रों और उद्योगों को सशक्त बनाना।'
  },
  exploreCourses: { en: 'Explore Courses', hi: 'कोर्स देखें' },
  joinInternship: { en: 'Join Internship', hi: 'इंटर्नशिप से जुड़ें' },
  verifiedHighlights: { en: 'Verified Achievements', hi: 'सत्यापित उपलब्धियां' },
  focusAreas: { en: 'Core Focus Areas', hi: 'प्रमुख कार्यक्षेत्र' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('hydrosync_lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'hi')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('hydrosync_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
