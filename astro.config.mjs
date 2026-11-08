import { defineConfig } from 'astro/config';
// Alle Seiten liegen unter https://echtcosplay.de/tools/
export default defineConfig({ site: 'https://echtcosplay.de', base: '/tools', trailingSlash: 'always', build: { format: 'directory' } });
