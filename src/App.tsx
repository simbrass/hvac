import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Mail, 
  ChevronRight, 
  Thermometer, 
  Wind, 
  Flame, 
  Settings,
  CheckCircle,
  Award,
  Shield,
  Clock,
  ArrowRight,
  Snowflake,
  Home
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Territoire', href: '#territoire' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'bg-navy' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Thermometer className={`w-6 h-6 ${scrolled ? 'text-copper' : 'text-white'}`} />
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
              scrolled ? 'text-navy' : 'text-white'
            }`}>
              CLIMAT<span className="text-copper">PRO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled 
                    ? 'text-navy hover:text-copper' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-copper' : 'bg-white'
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="tel:4181234567"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                scrolled 
                  ? 'bg-navy text-white hover:bg-navy-light' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <Phone className="w-4 h-4" />
              (418) 123-4567
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium ${
                    scrolled ? 'text-navy' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:4181234567"
                className="inline-flex items-center gap-2 text-copper font-semibold"
              >
                <Phone className="w-4 h-4" />
                (418) 123-4567
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Trust Bar Component
function TrustBar() {
  return (
    <div className="bg-white border-b border-cold-gray py-3">
      <div className="w-full section-padding">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-6">
            {/* RBQ Badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-navy rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs">
                <span className="block font-semibold text-navy">RBQ</span>
                <span className="text-slate-custom">0000-0000-01</span>
              </div>
            </div>
            
            {/* CMMTQ Badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-copper rounded flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs">
                <span className="block font-semibold text-navy">CMMTQ</span>
                <span className="text-slate-custom">Certifié</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-slate-custom">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-copper" />
              Assurance complète
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-copper" />
              Garantie 10 ans
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-copper" />
              Service 24/7
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-technician.jpg" 
          alt="Technicien HVAC professionnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-copper" />
            Thetford Mines & Région de l'Amiante
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            EXPERTISE
            <span className="block text-copper">CLIMATIQUE</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Chauffage, ventilation et climatisation à Thetford Mines. 
            Précision technique, confort garanti. Votre confort, notre expertise.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="btn-accent inline-flex items-center gap-2">
                  CONSULTATION GRATUITE
                  <ArrowRight className="w-5 h-5" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-navy">Demandez un devis gratuit</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Prénom" className="border-cold-gray" />
                    <Input placeholder="Nom" className="border-cold-gray" />
                  </div>
                  <Input placeholder="Téléphone" className="border-cold-gray" />
                  <Input placeholder="Courriel" className="border-cold-gray" />
                  <select className="w-full px-3 py-2 border border-cold-gray rounded-md text-sm">
                    <option>Type de service...</option>
                    <option>Installation thermopompe</option>
                    <option>Entretien fournaise</option>
                    <option>Climatisation</option>
                    <option>Ventilation</option>
                    <option>Réparation urgente</option>
                  </select>
                  <Textarea placeholder="Décrivez votre projet..." className="border-cold-gray" />
                  <Button className="w-full bg-navy hover:bg-navy-light text-white">
                    Envoyer la demande
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <a 
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              NOS SERVICES
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-copper">15+</div>
              <div className="text-sm text-white/70">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-copper">2000+</div>
              <div className="text-sm text-white/70">Installations réalisées</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-copper">100%</div>
              <div className="text-sm text-white/70">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Snowflake,
      title: 'Installation Thermopompe',
      description: 'Installation professionnelle de thermopompes murales et centrales. Économisez sur vos coûts de chauffage avec nos systèmes haute efficacité.',
      price: 'Dès 2 995$',
      badge: 'Populaire',
      badgeColor: 'bg-copper',
      image: '/images/polaroid-heatpump.jpg'
    },
    {
      icon: Flame,
      title: 'Entretien Annuel Fournaise',
      description: 'Service complet de maintenance préventive pour prolonger la vie de votre équipement et assurer votre sécurité.',
      price: '149$ /an',
      badge: 'Essentiel',
      badgeColor: 'bg-navy',
      image: '/images/polaroid-furnace.jpg'
    },
    {
      icon: Wind,
      title: 'Climatisation Résidentielle',
      description: 'Solutions de climatisation sur mesure pour un confort estival optimal. Installation et entretien de systèmes centralisés ou muraux.',
      price: 'Sur devis',
      badge: null,
      badgeColor: '',
      image: '/images/polaroid-maintenance.jpg'
    },
    {
      icon: Settings,
      title: 'Ventilation Mécanique',
      description: 'Installation et entretien de systèmes de ventilation mécanique, échangeurs d\'air et purificateurs pour une qualité d\'air optimale.',
      price: 'Sur devis',
      badge: null,
      badgeColor: '',
      image: '/images/polaroid-ventilation.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-cold-gray/30">
      <div className="w-full section-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-copper/10 text-copper text-sm font-semibold rounded-full mb-4">
            NOS EXPERTISES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            SOLUTIONS CLIMATIQUES
          </h2>
          <p className="text-slate-custom">
            Des services complets pour votre confort intérieur, de l'installation à l'entretien, 
            avec une expertise technique reconnue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image w-full h-full object-cover"
                />
                {service.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 ${service.badgeColor} text-white text-xs font-semibold rounded-full`}>
                    {service.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-navy" />
                </div>
                
                {/* Quote Button on Hover */}
                <div className="quote-btn">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full py-2.5 bg-copper text-white text-sm font-semibold rounded-lg hover:bg-copper-light transition-colors">
                        Obtenir un devis
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-display text-2xl text-navy">Devis - {service.title}</DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="Prénom" className="border-cold-gray" />
                          <Input placeholder="Nom" className="border-cold-gray" />
                        </div>
                        <Input placeholder="Téléphone" className="border-cold-gray" />
                        <Input placeholder="Courriel" className="border-cold-gray" />
                        <Textarea placeholder="Décrivez votre projet..." className="border-cold-gray" />
                        <Button className="w-full bg-navy hover:bg-navy-light text-white">
                          Demander un devis
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-custom mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-copper font-semibold">{service.price}</span>
                  <ArrowRight className="w-4 h-4 text-navy opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-12 bg-navy rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-copper rounded-xl flex items-center justify-center animate-pulse-slow">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">Service d'urgence 24/7</h3>
              <p className="text-white/70 text-sm">Dépannage rapide pour vos équipements de chauffage</p>
            </div>
          </div>
          <a 
            href="tel:4181234567"
            className="btn-accent inline-flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}

// Territory Section
function TerritorySection() {
  const locations = [
    'Thetford Mines',
    'Disraeli',
    'East Broughton',
    'Saint-Joseph-de-Coleraine',
    'Kinnear\'s Mills',
    'Adstock'
  ];

  return (
    <section id="territoire" className="py-20 bg-white">
      <div className="w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-navy/10 text-navy text-sm font-semibold rounded-full mb-4">
              NOTRE TERRITOIRE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              THEFORD MINES
              <span className="block text-copper">& RÉGION</span>
            </h2>
            <p className="text-slate-custom mb-6">
              Basés au cœur de la région de l'Amiante, nous connaissons parfaitement les défis climatiques 
              de notre territoire. Des hivers rigoureux aux étés humides, nous avons les solutions adaptées 
              à votre confort.
            </p>
            <p className="text-slate-custom mb-8">
              Notre équipe d'experts intervient rapidement dans toute la région pour vous offrir 
              un service personnalisé et de qualité, avec une compréhension unique des besoins 
              des habitants de Thetford Mines et des environs.
            </p>
            
            {/* Locations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-navy"
                >
                  <MapPin className="w-4 h-4 text-copper flex-shrink-0" />
                  {location}
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-custom">
                <CheckCircle className="w-4 h-4 text-copper" />
                Intervention sous 24h
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-custom">
                <CheckCircle className="w-4 h-4 text-copper" />
                Connaissance locale
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-custom">
                <CheckCircle className="w-4 h-4 text-copper" />
                Service personnalisé
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/territoire-maison.jpg" 
                alt="Maison québécoise en hiver"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-copper" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy">+2 000</div>
                  <div className="text-xs text-slate-custom">Foyers chauffés</div>
                </div>
              </div>
              <p className="text-sm text-slate-custom">
                Dans la région de Thetford Mines depuis plus de 15 ans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Achievements Section (Polaroid Style)
function AchievementsSection() {
  const achievements = [
    { image: '/images/polaroid-thermostat.jpg', caption: 'Thermostats intelligents' },
    { image: '/images/polaroid-furnace.jpg', caption: 'Installation fournaise' },
    { image: '/images/polaroid-heatpump.jpg', caption: 'Thermopompe extérieure' },
    { image: '/images/polaroid-maintenance.jpg', caption: 'Entretien préventif' },
    { image: '/images/polaroid-emergency.jpg', caption: 'Service d\'urgence' },
    { image: '/images/polaroid-ventilation.jpg', caption: 'Ventilation mécanique' },
    { image: '/images/polaroid-family.jpg', caption: 'Confort familial' },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="realisations" className="py-20 bg-navy">
      <div className="w-full section-padding">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-copper/20 text-copper text-sm font-semibold rounded-full mb-4">
              NOS RÉALISATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              PROJETS RÉCENTS
            </h2>
          </div>
          <p className="text-white/70 max-w-md">
            Découvrez nos dernières installations et réparations. 
            Chaque projet reflète notre engagement envers la qualité.
          </p>
        </div>

        {/* Polaroid Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-white rotate-180" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable Content */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 snap-start"
                style={{ 
                  transform: `rotate(${index % 2 === 0 ? '-2' : '2'}deg)`,
                }}
              >
                <div className="polaroid rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <p className="mt-3 text-center font-display text-sm text-navy font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display font-bold text-copper mb-1">2000+</div>
            <div className="text-sm text-white/60">Installations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display font-bold text-copper mb-1">500+</div>
            <div className="text-sm text-white/60">Entretiens/an</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display font-bold text-copper mb-1">24h</div>
            <div className="text-sm text-white/60">Délai moyen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display font-bold text-copper mb-1">4.9/5</div>
            <div className="text-sm text-white/60">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-white">
      {/* CTA Section */}
      <div className="py-16 border-b border-white/10">
        <div className="w-full section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              PRÊT À AMÉLIORER VOTRE <span className="text-copper">CONFORT?</span>
            </h2>
            <p className="text-white/70 mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="btn-accent inline-flex items-center gap-2">
                    DEMANDER UN DEVIS
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl text-navy">Demandez un devis gratuit</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Prénom" className="border-cold-gray" />
                      <Input placeholder="Nom" className="border-cold-gray" />
                    </div>
                    <Input placeholder="Téléphone" className="border-cold-gray" />
                    <Input placeholder="Courriel" className="border-cold-gray" />
                    <select className="w-full px-3 py-2 border border-cold-gray rounded-md text-sm">
                      <option>Type de service...</option>
                      <option>Installation thermopompe</option>
                      <option>Entretien fournaise</option>
                      <option>Climatisation</option>
                      <option>Ventilation</option>
                      <option>Réparation urgente</option>
                    </select>
                    <Textarea placeholder="Décrivez votre projet..." className="border-cold-gray" />
                    <Button className="w-full bg-navy hover:bg-navy-light text-white">
                      Envoyer la demande
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <a 
                href="tel:4181234567"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                (418) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="w-full section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-copper rounded-lg flex items-center justify-center">
                  <Thermometer className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-bold text-xl">
                  CLIMAT<span className="text-copper">PRO</span>
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Expert en chauffage, ventilation et climatisation à Thetford Mines. 
                Votre confort, notre priorité depuis 2009.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Shield className="w-4 h-4 text-copper" />
                <span>RBQ: 0000-0000-01</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                {['Services', 'Territoire', 'Réalisations', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-white/60 hover:text-copper transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Nos services</h4>
              <ul className="space-y-2">
                {[
                  'Installation thermopompe',
                  'Entretien fournaise',
                  'Climatisation',
                  'Ventilation mécanique',
                  'Service d\'urgence'
                ].map((item) => (
                  <li key={item}>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">
                    123 Rue Principale<br />
                    Thetford Mines, QC G6G 1X1
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-copper flex-shrink-0" />
                  <a href="tel:4181234567" className="text-white/60 hover:text-copper transition-colors text-sm">
                    (418) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-copper flex-shrink-0" />
                  <a href="mailto:info@climatpro.ca" className="text-white/60 hover:text-copper transition-colors text-sm">
                    info@climatpro.ca
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="py-4 border-t border-white/10">
        <div className="w-full section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>© 2024 ClimatPro Québec. Tous droits réservés.</span>
              <span className="hidden md:inline">|</span>
              <span>RBQ: 0000-0000-01</span>
              <span className="hidden md:inline">|</span>
              <span>CMMTQ Certifié</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-copper transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-copper transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <TerritorySection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}

export default App;
