// Génère les pages du blog (/blog et /blog/<slug>) en HTML complet après
// la construction du site, pour Google et les moteurs IA.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { articles } from '../content/blog.mjs';

const SITE = 'https://xn--bullesdepenses-mkb.fr';
const out = resolve(import.meta.dirname, '../dist/blog');
mkdirSync(out, { recursive: true });

const esc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const strip = (h) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const author = {
  '@type': 'Person',
  '@id': `${SITE}/#melissa-boukaia`,
  name: 'Melissa Boukaia',
  jobTitle: 'Thérapeute de couple et sexothérapeute',
  url: `${SITE}/`,
};

const faqFrom = (html) => {
  const part = html.split(/<h2>Questions fréquentes<\/h2>/)[1];
  if (!part) return null;
  const items = [...part.matchAll(/<h3>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)].map(([, q, a]) => ({
    '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) },
  }));
  return items.length ? { '@type': 'FAQPage', mainEntity: items } : null;
};

const page = ({ title, description, url, body, jsonld }) => `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <script>
      tailwind.config = { theme: { extend: {
        fontFamily: { serif: ['"Playfair Display"', 'serif'], sans: ['"Inter"', 'sans-serif'] },
        colors: { cream: { 50: '#FDFBF7', 100: '#F7F4EB', 200: '#EDE8DA' }, sage: { 50: '#F0F9FA', 100: '#E0F2F1', 500: '#649BA6', 600: '#4A7A85', 700: '#3B636C', 900: '#192E33' } }
      } } }
    </script>
    <style>
      body { font-family: 'Inter', sans-serif; background-color: #F7F4EB; color: #192E33; }
      h1, h2, h3 { font-family: 'Playfair Display', serif; }
      .article h2 { font-size: 1.6rem; margin: 2.2rem 0 .8rem; color: #192E33; }
      .article h3 { font-size: 1.2rem; margin: 1.6rem 0 .5rem; color: #192E33; }
      .article p { margin: 0 0 1rem; line-height: 1.8; }
      .article ul { list-style: disc; padding-left: 1.4rem; margin: 0 0 1rem; line-height: 1.8; }
    </style>
    <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body class="bg-cream-100 text-sage-900 antialiased">
    <nav class="fixed top-0 z-50 w-full bg-cream-100/95 backdrop-blur-md shadow-sm py-4">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
            <a href="/" class="flex flex-col">
                <span class="font-serif font-bold text-xl text-sage-900 leading-none">Melissa Boukaia</span>
                <span class="text-xs text-sage-600 uppercase tracking-widest mt-1">Thérapeute de couple • Rueil-Malmaison (92)</span>
            </a>
            <a href="/#contact" class="bg-sage-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sage-700 shadow-md">Appel offert</a>
        </div>
    </nav>
    <main class="pt-32 pb-20">${body}</main>
    <footer class="bg-cream-100 py-12 border-t border-cream-200 text-center">
        <p class="font-serif font-bold text-xl text-sage-900">Melissa Boukaia</p>
        <p class="text-xs text-sage-500 uppercase tracking-widest mt-2">Thérapeute de couple & sexothérapeute</p>
        <p class="text-sm text-sage-600 mt-2">16 bis avenue de Buzenval, 92500 Rueil-Malmaison • Cabinet & visio</p>
        <a href="tel:+33607354124" class="block mt-3 text-sage-700 hover:text-sage-900 font-medium">06 07 35 41 24</a>
        <p class="text-sm text-sage-600 mt-4"><a class="underline" href="/blog">Blog</a> • <a class="underline" href="/therapeute-couple-saint-cloud/">Saint-Cloud</a> • <a class="underline" href="/therapeute-couple-nanterre/">Nanterre</a> • <a class="underline" href="/therapeute-couple-suresnes/">Suresnes</a> • <a class="underline" href="/therapeute-couple-chatou-croissy/">Chatou & Croissy</a></p>
    </footer>
</body>
</html>
`;

const cta = `
        <div class="mt-16 bg-sage-50 rounded-2xl p-8 text-center">
            <h2 class="font-serif text-2xl text-sage-900 mb-2">Besoin d'en parler ?</h2>
            <p class="text-sage-600 mb-6">Appel découverte gratuit de 20 minutes en visio, sans engagement. Cabinet à Rueil-Malmaison ou séances en visio.</p>
            <a href="/#contact" class="inline-block bg-sage-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-sage-700 shadow-md">Réserver mon appel offert</a>
        </div>`;

for (const a of articles) {
  const url = `${SITE}/blog/${a.slug}`;
  const faq = faqFrom(a.html);
  const graph = [
    {
      '@type': 'BlogPosting', headline: a.title, description: a.description, image: SITE + a.image,
      datePublished: a.date, dateModified: a.date, inLanguage: 'fr-FR', mainEntityOfPage: url,
      author, publisher: author,
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: a.title, item: url },
    ] },
  ];
  if (faq) graph.push(faq);
  const body = `
        <article class="max-w-3xl mx-auto px-6">
            <a href="/blog" class="text-sm text-sage-600 hover:text-sage-900">← Tous les articles</a>
            <h1 class="text-3xl md:text-5xl font-serif text-sage-900 mt-6 mb-4 leading-tight">${esc(a.title)}</h1>
            <p class="text-sm text-sage-600 mb-8">Par Melissa Boukaia, thérapeute de couple à Rueil-Malmaison (92)</p>
            <img src="${a.image}" alt="${esc(a.title)}" class="w-full h-64 md:h-96 object-cover rounded-2xl shadow-sm mb-10" loading="eager">
            <div class="article text-lg font-light text-sage-900">${a.html}</div>${cta}
        </article>`;
  writeFileSync(resolve(out, `${a.slug}.html`), page({
    title: `${a.title} | Melissa Boukaia, thérapeute de couple 92`, description: a.description, url, body,
    jsonld: { '@context': 'https://schema.org', '@graph': graph },
  }));
  console.log(`article généré : /blog/${a.slug}`);
}

const list = articles.map((a) => `
            <a href="/blog/${a.slug}" class="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img src="${a.image}" alt="${esc(a.title)}" class="w-full h-48 object-cover" loading="lazy">
                <div class="p-6">
                    <h2 class="font-serif text-xl text-sage-900 mb-3">${esc(a.title)}</h2>
                    <p class="text-sage-600 font-light text-sm">${esc(a.description)}</p>
                </div>
            </a>`).join('');

writeFileSync(resolve(out, 'index.html'), page({
  title: 'Blog thérapie de couple | Conseils de Melissa Boukaia, Rueil-Malmaison (92)',
  description: 'Conseils de thérapeute de couple pour renouer le dialogue, savoir quand consulter et traverser une crise. Cabinet à Rueil-Malmaison (92) et visio.',
  url: `${SITE}/blog`,
  body: `
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
            <div class="text-center mb-12">
                <p class="text-xs font-bold tracking-widest text-sage-500 uppercase mb-3">Le Blog</p>
                <h1 class="text-4xl md:text-5xl font-serif text-sage-900 mb-4">Conseils & relations de couple</h1>
                <p class="text-sage-600 max-w-2xl mx-auto font-light">Des articles pour mieux comprendre votre couple et les dynamiques relationnelles, par Melissa Boukaia, thérapeute de couple à Rueil-Malmaison.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${list}
            </div>
        </div>`,
  jsonld: { '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog de Melissa Boukaia', url: `${SITE}/blog`, author,
    blogPost: articles.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE}/blog/${a.slug}` })) },
}));
console.log('page générée : /blog');
