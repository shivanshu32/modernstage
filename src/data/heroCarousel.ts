export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

// Add preload hint in the document head for the first slide (LCP image)
if (typeof document !== 'undefined') {
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.as = 'image';
  preloadLink.href = '/venue/World-India-Luxury-hotels-in-Goa-Wallpapers.jpg';
  preloadLink.fetchPriority = 'high';
  document.head.appendChild(preloadLink);
}

export const heroSlides: HeroSlide[] = [
  {
    image: '/venue/World-India-Luxury-hotels-in-Goa-Wallpapers.jpg',
    title: 'Modern Stage Events',
    subtitle: 'Creating Unforgettable Moments'
  },
  {
    image: '/liveconcert/livehero.jpg',
    title: 'Live Concerts',
    subtitle: 'Unforgettable Musical Experiences'
  },
  {
    image: '/wedding/2115d2cb-af74-4a12-9c8a-672c32c299ef.jpeg',
    title: 'Wedding Planning',
    subtitle: 'Your Perfect Day, Our Expertise'
  },
  {
    image: '/corporate/corporate-hero.jpg',
    title: 'Corporate Events',
    subtitle: 'Professional Excellence'
  },
  {
    image: '/liveconcert/live6.jpg',
    title: 'Artist Management',
    subtitle: 'Bringing Talent to Life'
  },
  {
    image: '/sarmad-siddiqi-oGdnQKPDmCE-unsplash.jpg',
    title: 'Venue Booking',
    subtitle: 'Perfect Locations for Every Occasion'
  },
  {
    image: '/fashion/fashion-hero.jpg',
    title: 'Fashion Shows',
    subtitle: 'Elegance on Display'
  },
  {
    image: '/wedding/White-and-gold-floral-wedding-reception-decor.jpeg',
    title: 'Decor & Design',
    subtitle: 'Creating Beautiful Spaces'
  },
  {
    image: '/EventProduction/161117_DiljitDosanjhConcert_03.jpg',
    title: 'Entertainment Solutions',
    subtitle: 'Complete Event Production'
  },
  {
    image: '/venue/best-resorts-india-udaivilas.jpg',
    title: 'Destination Events',
    subtitle: 'Memorable Experiences Anywhere'
  }
];
