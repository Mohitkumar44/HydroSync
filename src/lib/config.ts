export interface IntegrationStatus {
  serviceId: string;
  name: string;
  category: 'database' | 'auth' | 'email' | 'payment' | 'storage' | 'maps' | 'whatsapp' | 'analytics';
  configured: boolean;
  isOptional: boolean;
  details: string;
  keysMissing: string[];
}

export interface AppConfig {
  company: {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    whatsappNumber: string;
    websiteUrl: string;
  };
  database: {
    provider: 'local' | 'postgresql' | 'supabase' | 'mongodb';
    url: string;
  };
  auth: {
    provider: 'local' | 'nextauth' | 'supabase';
    secret: string;
    clientId?: string;
  };
  email: {
    provider: 'mock' | 'resend' | 'smtp';
    apiKey?: string;
    fromEmail: string;
    fromName: string;
    smtpHost?: string;
    smtpPort?: string;
    smtpUser?: string;
    smtpPass?: string;
  };
  payment: {
    provider: 'mock' | 'razorpay' | 'stripe';
    keyId: string;
    keySecret: string;
    webhookSecret: string;
    mode: 'test' | 'live';
  };
  storage: {
    provider: 'local' | 'cloudinary' | 's3';
    cloudName?: string;
    apiKey?: string;
    apiSecret?: string;
  };
  maps: {
    apiKey?: string;
    useGoogleMaps: boolean;
  };
  whatsapp: {
    enabled: boolean;
    phoneNumber: string;
    defaultMessage: string;
  };
  analytics: {
    measurementId?: string;
    enabled: boolean;
  };
}

// Default environment variable reader with safe missing-configuration handling
export function getAppConfig(): AppConfig {
  return {
    company: {
      name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'HydroSync Innovations LLP',
      tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || 'Innovation for a Healthier Tomorrow',
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@hydrosync.in',
      phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91 98765 43210',
      address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Techno-Park Innovation Center, Sector 62, Noida, Uttar Pradesh 201309',
      workingHours: process.env.NEXT_PUBLIC_COMPANY_HOURS || 'Mon – Sat: 9:00 AM – 6:30 PM IST',
      whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
      websiteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hydrosync.in',
    },
    database: {
      provider: (process.env.DB_PROVIDER as any) || (process.env.DATABASE_URL ? 'postgresql' : 'local'),
      url: process.env.DATABASE_URL || '',
    },
    auth: {
      provider: (process.env.AUTH_PROVIDER as any) || 'local',
      secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET || 'hydrosync-local-secret-key-production-ready',
      clientId: process.env.AUTH_CLIENT_ID || '',
    },
    email: {
      provider: (process.env.EMAIL_PROVIDER as any) || (process.env.RESEND_API_KEY ? 'resend' : 'mock'),
      apiKey: process.env.RESEND_API_KEY || '',
      fromEmail: process.env.EMAIL_FROM || 'notifications@hydrosync.in',
      fromName: process.env.EMAIL_FROM_NAME || 'HydroSync Innovations',
      smtpHost: process.env.SMTP_HOST || '',
      smtpPort: process.env.SMTP_PORT || '',
      smtpUser: process.env.SMTP_USER || '',
      smtpPass: process.env.SMTP_PASS || '',
    },
    payment: {
      provider: (process.env.PAYMENT_PROVIDER as any) || (process.env.RAZORPAY_KEY_ID ? 'razorpay' : 'mock'),
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || '',
      keySecret: process.env.RAZORPAY_KEY_SECRET || '',
      webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET || '',
      mode: (process.env.PAYMENT_MODE as any) || 'test',
    },
    storage: {
      provider: (process.env.STORAGE_PROVIDER as any) || 'local',
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
      apiKey: process.env.CLOUDINARY_API_KEY || '',
      apiSecret: process.env.CLOUDINARY_API_SECRET || '',
    },
    maps: {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      useGoogleMaps: Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    },
    whatsapp: {
      enabled: true,
      phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
      defaultMessage: 'Hello HydroSync Team, I am interested in your technical training and IoT solutions.',
    },
    analytics: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
      enabled: Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
    },
  };
}

export function evaluateIntegrations(config: AppConfig): IntegrationStatus[] {
  return [
    {
      serviceId: 'database',
      name: 'Primary Database',
      category: 'database',
      configured: Boolean(config.database.url) || config.database.provider === 'local',
      isOptional: false,
      details: config.database.provider === 'local' 
        ? 'Operating in Embedded High-Speed JSON Store mode. Ready for PostgreSQL / Supabase connection.'
        : `Connected via ${config.database.provider.toUpperCase()} provider`,
      keysMissing: config.database.provider !== 'local' && !config.database.url ? ['DATABASE_URL'] : [],
    },
    {
      serviceId: 'payment',
      name: 'Razorpay Payment Gateway',
      category: 'payment',
      configured: Boolean(config.payment.keyId && config.payment.keySecret),
      isOptional: false,
      details: config.payment.keyId 
        ? `Configured in ${config.payment.mode.toUpperCase()} mode` 
        : 'Running in Secure Simulation Mode (Enrollments & Registrations functional for preview)',
      keysMissing: !config.payment.keyId ? ['NEXT_PUBLIC_RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET'] : [],
    },
    {
      serviceId: 'email',
      name: 'Email Delivery (Resend / SMTP)',
      category: 'email',
      configured: Boolean(config.email.apiKey || config.email.smtpHost),
      isOptional: true,
      details: config.email.apiKey ? 'Connected to Resend API' : 'Operating in Safe Simulation Mode (Submissions logged to server console & DB)',
      keysMissing: !config.email.apiKey && !config.email.smtpHost ? ['RESEND_API_KEY or SMTP_HOST'] : [],
    },
    {
      serviceId: 'maps',
      name: 'Google Maps API',
      category: 'maps',
      configured: Boolean(config.maps.apiKey),
      isOptional: true,
      details: config.maps.apiKey ? 'Google Maps JavaScript API Key Active' : 'Operating via High-Fidelity OpenStreetMap Interactive Embed',
      keysMissing: !config.maps.apiKey ? ['NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'] : [],
    },
    {
      serviceId: 'whatsapp',
      name: 'WhatsApp Support Gateway',
      category: 'whatsapp',
      configured: Boolean(config.whatsapp.phoneNumber),
      isOptional: false,
      details: `Active on +${config.whatsapp.phoneNumber}`,
      keysMissing: [],
    },
    {
      serviceId: 'analytics',
      name: 'Google Analytics 4',
      category: 'analytics',
      configured: Boolean(config.analytics.measurementId),
      isOptional: true,
      details: config.analytics.measurementId ? `Active (Tag: ${config.analytics.measurementId})` : 'Awaiting GA4 Measurement ID in Consolidated Setup',
      keysMissing: !config.analytics.measurementId ? ['NEXT_PUBLIC_GA_MEASUREMENT_ID'] : [],
    },
  ];
}
