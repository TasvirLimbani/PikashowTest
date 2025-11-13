/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.pikashowgames.com/', // ← Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 5000, // splits into multiple files if needed
  changefreq: 'weekly',
  priority: 0.7,
};