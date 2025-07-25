import Head from 'next/head'
import CursorTrail from '../components/CursorTrail'
import ScrollProgress from '../components/ScrollProgress'
import Header from '../components/Header'
import Hero from '../components/Hero'
import StatsCounter from '../components/StatsCounter'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import PricingCalculator from '../components/PricingCalculator'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Starly - Premium Web Development Agency | Build Brighter Futures</title>
        <meta name="description" content="Custom websites and digital solutions with a stellar edge. Transform your vision into brilliant digital reality with Starly's premium web development services." />
        <meta name="keywords" content="web development, website design, digital agency, custom websites, e-commerce, branding, SEO, premium web services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://starly.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Starly - Premium Web Development Agency" />
        <meta property="og:description" content="Custom websites and digital solutions with a stellar edge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starly.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Starly - Premium Web Development Agency" />
        <meta name="twitter:description" content="Custom websites and digital solutions with a stellar edge" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDesignCompany",
              "name": "Starly",
              "description": "Premium web development agency specializing in custom websites and digital solutions",
              "url": "https://starly.com",
              "serviceArea": "Worldwide",
              "priceRange": "$$"
            })
          }}
        />
      </Head>

      <main className="overflow-x-hidden">
        <CursorTrail />
        <ScrollProgress />
        <Header />
        <Hero />
        <StatsCounter />
        <Services />
        <Portfolio />
        <Testimonials />
        <PricingCalculator />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}