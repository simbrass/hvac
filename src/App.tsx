ght className="w-6 h-6 text-white" />
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
                (418) 338-8582
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
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-bold text-xl">
                  PG<span className="text-copper">JACQUES</span>
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Expert en chauffage, ventilation et climatisation à Thetford Mines. 
                Votre confort, notre priorité depuis 2009.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Shield className="w-4 h-4 text-copper" />
                <span>RBQ: 2417-5275-31</span>
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
                    50 Chemin du Mont Granit E<br />
                    Thetford Mines, QC G6G 5R7
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-copper flex-shrink-0" />
                  <a href="tel:4181234567" className="text-white/60 hover:text-copper transition-colors text-sm">
                    (418) 338-8582
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-copper flex-shrink-0" />
                  <a href="mailto:info@pgjacques.com" className="text-white/60 hover:text-copper transition-colors text-sm">
                    info@pgjacques.com
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
              <span>© 2026 PG Jacques. Tous droits réservés.</span>
              <span className="hidden md:inline">|</span>
              <span>RBQ: 2417-5275-31</span>
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
