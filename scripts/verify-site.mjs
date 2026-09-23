const origin = process.argv[2] || 'https://softform-34r5.netlify.app';
const pages = [
  '/', '/docs.html', '/examples/inbox.html', '/examples/settings.html',
  '/examples/analytics.html', '/examples/planner.html', '/examples/react.html',
  '/examples/elements.html', '/examples/elements-gallery.html',
];

for (const path of pages) {
  const response = await fetch(origin + path);
  const html = await response.text();
  const canonical = `<link rel="canonical" href="${origin + path}">`;
  const checks = [
    response.ok,
    html.includes(canonical),
    html.includes('<meta name="description"'),
    html.includes(`<meta property="og:url" content="${origin + path}">`),
    html.includes(`<meta property="og:image" content="${origin}/og-softform.png">`),
    html.includes('<meta name="twitter:card" content="summary_large_image">'),
  ];
  if (checks.some(result => !result)) throw new Error(`${path}: failed site metadata check (${checks.join(', ')})`);
  console.log(`${response.status} ${path}`);
}

const image = await fetch(origin + '/og-softform.png');
const bytes = new Uint8Array(await image.arrayBuffer());
if (!image.ok || image.headers.get('content-type')?.split(';')[0] !== 'image/png' ||
    bytes.length < 10000 || bytes[0] !== 137 || bytes[1] !== 80 || bytes[2] !== 78 || bytes[3] !== 71) {
  throw new Error('Open Graph image is missing or invalid');
}
for (const name of ['dashboard', 'analytics', 'docs', 'react']) {
  const response = await fetch(`${origin}/screenshots/${name}.png`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (!response.ok || response.headers.get('content-type')?.split(';')[0] !== 'image/png' || bytes.length < 50000) {
    throw new Error(`${name} screenshot is missing or invalid`);
  }
  console.log(`${response.status} /screenshots/${name}.png`);
}
for (const path of ['/favicon.svg', '/robots.txt', '/sitemap.xml']) {
  const response = await fetch(origin + path);
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  console.log(`${response.status} ${path}`);
}
for (const path of ['/storybook/', '/storybook/iframe.html?id=components-sfsegmented--default']) {
  const response = await fetch(origin + path);
  const html = await response.text();
  if (!response.ok || !html.includes('storybook')) throw new Error(`${path}: Storybook is missing`);
  console.log(`${response.status} ${path}`);
}
console.log(`OG image: ${bytes.length} bytes`);
