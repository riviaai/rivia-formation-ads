import { NextRequest, NextResponse } from 'next/server';

/**
 * Basic Auth sur toute la formation (contenu payant/privé).
 * Variables d'env requises : AUTH_USER, AUTH_PASS
 * En dev local sans ces vars, l'accès est libre.
 */
export function middleware(req: NextRequest) {
  const user = process.env.AUTH_USER;
  const pass = process.env.AUTH_PASS;

  // Pas de credentials configurés → bypass (dev local ou manque de config)
  if (!user || !pass) return NextResponse.next();

  const authHeader = req.headers.get('authorization') || '';
  const [scheme, encoded] = authHeader.split(' ');

  if (scheme === 'Basic' && encoded) {
    try {
      const decoded = atob(encoded);
      const sep = decoded.indexOf(':');
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      if (u === user && p === pass) return NextResponse.next();
    } catch {}
  }

  return new NextResponse('Accès restreint — Formation Rivia ADS', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Formation ADS Rivia"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
