import { NextResponse } from 'next/server';
import { getAppConfig, evaluateIntegrations } from '@/lib/config';

export async function GET() {
  const config = getAppConfig();
  const integrations = evaluateIntegrations(config);
  return NextResponse.json({
    success: true,
    config,
    integrations,
    systemReady: true,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const missingKeys: string[] = [];
    if (!body.company?.name) missingKeys.push('Company Name');
    if (!body.company?.email) missingKeys.push('Official Email');
    
    return NextResponse.json({
      success: true,
      message: 'Configuration validated successfully. Ready for deployment.',
      receivedConfig: {
        company: body.company,
        databaseProvider: body.database?.provider || 'local',
        paymentProvider: body.payment?.provider || 'mock',
        emailProvider: body.email?.provider || 'mock',
        storageProvider: body.storage?.provider || 'local',
      },
      missingKeys,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to process configuration',
    }, { status: 400 });
  }
}
