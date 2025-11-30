
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  Video, 
  Menu, 
  X, 
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Quote,
  CheckCircle2,
  Calendar
} from 'lucide-react';

// --- IMAGES ---
const IMG_HAPPY_COUPLE = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/couple-heureux-rire.png";
const IMG_CRISIS_COUPLE = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/04/crise-couple-1.jpg";
const IMG_MELISSA = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-17-a-08.57.51_f5249572-768x1293.jpg";
const IMG_OFFICE_1 = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/sexotherapie-saint-cloud-sexologue.jpg";
const IMG_OFFICE_2 = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/Sexotherapeute-a-rueil-malmaison.jpg";

// --- COMPONENTS ---

// 1. Calendly Widget
const CalendlyWidget = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.setAttribute('async', 'true');
        head?.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full h-full min-h-[750px] flex justify-center bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-100">
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/melissaboukaia/appel15min?hide_gdpr_banner=1" 
        style={{ minWidth: '320px', height: '750px' }} 
      />
    </div>
  );
};

// 2. Navigation
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-[#faf9f8] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-brand-100 shadow-sm flex-shrink-0">
               <img src={IMG_MELISSA} alt="Melissa Boukaia" className="w-full h-full object-cover object-top" />
             </div>
             <div className="flex flex-col">
               <span className="font-serif font-bold text-lg md:text-xl text-brand-900 leading-none">Melissa Boukaia</span>
               <span className="font-sans text-xs md:text-sm text-brand-700 leading-none mt-1 tracking-wide">Thérapie de Couple</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problemes" className="text-sand-600 hover:text-brand-800 font-medium text-sm transition-colors">Pour qui ?</a>
            <a href="#vision" className="text-sand-600 hover:text-brand-800 font-medium text-sm transition-colors">Approche</a>
            <a href="#reviews" className="text-sand-600 hover:text-brand-800 font-medium text-sm transition-colors">Avis</a>
            <a 
              href="#contact" 
              className="bg-brand-800 hover:bg-brand-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-brand-900 p-2 rounded-lg active:bg-sand-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col space-y-6 text-center">
            <a href="#problemes" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-900 py-2 border-b border-sand-50">Est-ce pour nous ?</a>
            <a href="#vision" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-900 py-2 border-b border-sand-50">L'approche</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-900 py-2 border-b border-sand-50">Témoignages</a>
            <a href="#qui-suis-je" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-900 py-2 border-b border-sand-50">Qui suis-je ?</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full bg-brand-800 text-white py-4 rounded-full font-medium shadow-lg text-lg mt-4 flex items-center justify-center gap-2">
              <Calendar size={20} />
              Réserver ma séance
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// 3. Hero Section
const Hero = () => {
  return (
    <header className="relative pt-6 pb-16 lg:pt-20 lg:pb-32 overflow-hidden bg-[#faf9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Mobile Image (Visible first on mobile for impact) */}
          <div className="lg:hidden w-full mb-8 relative">
             <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                <img src={IMG_HAPPY_COUPLE} alt="Couple heureux" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-5 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-sand-50 max-w-[200px]">
                 <p className="font-hand text-xl text-brand-800 leading-tight">"On se comprend enfin."</p>
             </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left z-10 relative">
            <div className="inline-flex items-center gap-2 text-brand-700 bg-brand-50 px-3 py-1 rounded-full mb-6 mx-auto lg:mx-0">
              <MapPin size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Rueil-Malmaison & Visio</span>
            </div>
            
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-serif font-medium text-brand-900 mb-6">
              Ne laissez pas la distance <span className="text-brand-600">s'installer.</span>
            </h1>
            
            <p className="text-lg text-sand-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Vous vous aimez, mais le dialogue est rompu ? 
              Je vous aide à sortir des conflits et à recréer une relation saine, avec douceur et sans jugement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-brand-800 text-white rounded-full font-bold text-lg shadow-lg shadow-brand-200 hover:bg-brand-900 transition-all transform hover:-translate-y-0.5">
                Appel découverte offert
              </a>
              <a href="#qui-suis-je" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white text-sand-800 border border-sand-200 rounded-full font-medium text-lg hover:bg-sand-50 transition-colors">
                En savoir plus
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-sand-500">
               <CheckCircle2 size={16} className="text-brand-500" />
               <span>15 min gratuites</span>
               <span className="mx-2">•</span>
               <CheckCircle2 size={16} className="text-brand-500" />
               <span>Sans engagement</span>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block lg:col-span-6 relative px-4 sm:px-0">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mx-auto max-w-lg border-8 border-white">
               <img src={IMG_HAPPY_COUPLE} alt="Couple heureux" className="w-full h-auto object-cover" />
               
               {/* Floating Card */}
               <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-in slide-in-from-bottom-8 duration-700 delay-300">
                 <div className="flex items-start gap-3">
                   <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                      <Quote size={20} />
                   </div>
                   <div>
                     <p className="font-serif text-lg text-brand-900 italic leading-snug">"Nous avons retrouvé le plaisir d'être ensemble."</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

// 4. Problem (Agitation)
const Problem = () => {
  return (
    <section id="problemes" className="py-20 bg-white rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <span className="font-hand text-3xl text-brand-600 block mb-2 rotate-[-2deg]">Est-ce familier ?</span>
           <h3 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4 leading-tight">
             Votre couple traverse une zone de turbulences
           </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
           <div className="order-2 md:order-1 space-y-3">
             {[
               "Les disputes éclatent pour des détails, mais cachent un mal-être plus profond.",
               "Vous avez l'impression de vivre en colocation, l'intimité s'est éteinte.",
               "L'un parle, l'autre se tait ou fuit la discussion.",
               "Vous ne vous sentez plus compris(e) ni soutenu(e).",
               "Vous vous demandez si une aide extérieure pourrait vous aider à y voir plus clair."
             ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-4 p-5 bg-sand-50 rounded-2xl border border-sand-100 transition-colors">
                 <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-500">
                    <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                 </div>
                 <p className="text-base text-sand-700 font-medium leading-relaxed">{item}</p>
               </div>
             ))}
           </div>

           <div className="order-1 md:order-2 relative px-4 md:px-0 mb-6 md:mb-0">
             <div className="aspect-[4/5] md:aspect-square relative rounded-3xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply z-10"></div>
                <img src={IMG_CRISIS_COUPLE} alt="Couple distant" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-full shadow-lg">
                        <span className="font-hand text-2xl text-brand-900">Pas de panique, ça se soigne.</span>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// 5. Solution (Vision)
const Solution = () => {
  const cards = [
    { title: "Apaisement", icon: <Heart className="w-6 h-6" />, text: "Des échanges plus calmes, sans cris ni reproches." },
    { title: "Complicité", icon: <Star className="w-6 h-6" />, text: "Retrouver le rire et la légèreté des débuts." },
    { title: "Écoute", icon: <Video className="w-6 h-6" />, text: "La sensation d'être enfin entendu(e) et reconnu(e)." },
    { title: "Confiance", icon: <CheckCircle2 className="w-6 h-6" />, text: "Une équipe soudée capable d'affronter l'avenir." },
  ];

  return (
    <section id="vision" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-white blur-[100px]"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-brand-500 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-hand text-3xl text-brand-200 block mb-4">Imaginez...</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Et si votre couple retrouvait enfin de l'apaisement ?
            </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/15 transition-all duration-300">
              <div className="bg-brand-800 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-200 mb-4 shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-xl font-serif mb-2 text-white">{card.title}</h3>
              <p className="text-brand-100/80 font-light leading-snug">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="#contact" className="inline-block bg-white text-brand-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
             Je veux vivre cette transformation
           </a>
        </div>
      </div>
    </section>
  );
};

// 6. Reviews (Authentic Google Design)
const GoogleReviewCard = ({ name, date, text, initial, color }: { name: string, date: string, text: string, initial: string, color: string }) => (
  <div className="min-w-[300px] md:min-w-[350px] bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col snap-center h-full">
    {/* Header */}
    <div className="flex items-start gap-3 mb-3">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-medium text-lg flex-shrink-0`}>
        {initial}
      </div>
      <div className="flex-grow">
        <p className="font-bold text-gray-900 text-sm">{name}</p>
        <div className="flex items-center gap-2">
           <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
    </div>

    {/* Stars */}
    <div className="flex items-center gap-0.5 mb-3">
      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#fbbc04] text-[#fbbc04]" />)}
    </div>

    {/* Text */}
    <p className="text-gray-600 text-[0.95rem] leading-relaxed line-clamp-5 flex-grow">
      {text}
    </p>
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <h2 className="text-3xl font-serif text-gray-900 mb-2">Ce qu'ils en pensent</h2>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">5.0</span>
                    <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#fbbc04] text-[#fbbc04]" />)}
                    </div>
                    <span className="text-gray-500 text-sm">(42 avis Google)</span>
                </div>
            </div>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-medium hover:underline text-sm flex items-center gap-1">
                Lire tous les avis <ArrowRight size={14} />
            </a>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
            <GoogleReviewCard 
              initial="T"
              color="bg-purple-600"
              name="Thomas L." 
              date="il y a 2 mois" 
              text="Nous étions au bord de la rupture. Melissa nous a aidés à nous entendre à nouveau. Sa douceur et sa justesse ont sauvé notre couple. Je recommande vivement pour son professionnalisme."
            />
            <GoogleReviewCard 
              initial="C"
              color="bg-orange-500"
              name="Camille R." 
              date="il y a 3 semaines" 
              text="Je me sentais seule et incomprise. Les séances m'ont permis de mettre des mots sur mes maux et de retrouver ma place dans la relation. Une vraie écoute bienveillante."
            />
            <GoogleReviewCard 
              initial="M"
              color="bg-green-600"
              name="Marc D." 
              date="il y a 4 mois" 
              text="Un espace sans jugement où on peut tout dire. On repart avec des clés concrètes pour avancer. Merci pour tout ce chemin parcouru ensemble."
            />
             <GoogleReviewCard 
              initial="S"
              color="bg-blue-500"
              name="Sophie B." 
              date="il y a 1 mois" 
              text="Excellente thérapeute. L'approche est moderne et vraiment adaptée à notre situation. Nous avons vu des changements dès les premières séances."
            />
        </div>
      </div>
    </section>
  );
};

// 7. Bio (Authority)
const Bio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="qui-suis-je" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3 w-full">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute inset-0 bg-brand-100 rounded-[3rem] transform rotate-6 scale-95 z-0"></div>
                <img src={IMG_MELISSA} alt="Melissa Boukaia" className="relative z-10 rounded-[3rem] shadow-xl w-full aspect-[3/4] object-cover grayscale-[10%]" />
            </div>
          </div>

          <div className="lg:w-2/3">
             <span className="font-hand text-3xl text-brand-500 mb-2 block">C'est moi, Melissa.</span>
             <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-6 leading-tight">Mon approche : humaine avant tout.</h2>
             
             <div className="prose prose-lg text-sand-600 font-light leading-relaxed">
               <p className="mb-4">
                 Si je devais résumer mon parcours, je dirais que chaque étape de ma vie m’a fait grandir. J’ai traversé des remises en question, des moments de doute, mais aussi des rencontres qui m’ont permis de mieux me comprendre – et de mieux comprendre les autres.
               </p>
               <p className="mb-4">
                 Mon couple, depuis de nombreuses années, est ma colonne vertébrale. Je suis aussi maman de trois enfants, et comme beaucoup de parents, j’ai expérimenté l’équilibre parfois fragile entre les rôles, les besoins, les émotions.
               </p>
               
               {isExpanded && (
                 <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                   <p className="mb-4">
                     C'est ce vécu, allié à mes formations (Sexothérapie, PNL, Sophrologie), que je mets à votre service. 
                     Arrivée à la quarantaine, c'est devenu une évidence : je voulais aider les autres à traverser ces zones de turbulence que je connais bien.
                   </p>
                   <p className="mb-4 font-medium text-brand-800 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      "Je ne suis pas là pour vous dire qui a tort ou raison, mais pour vous aider à comprendre comment votre danse relationnelle s'est grippée, et comment la relancer."
                   </p>
                 </div>
               )}

               <button 
                 onClick={() => setIsExpanded(!isExpanded)}
                 className="mt-2 text-brand-700 font-bold border-b-2 border-brand-200 hover:border-brand-500 transition-colors pb-1 inline-flex items-center gap-1"
               >
                 {isExpanded ? "Lire moins" : "Lire toute mon histoire"}
                 {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
               </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 8. FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "L'appel découverte m'engage-t-il à quelque chose ?", a: "Non, absolument pas. C'est un moment pour faire connaissance, voir si le courant passe et si je suis la bonne personne pour vous aider." },
    { q: "Mon conjoint refuse de venir, que faire ?", a: "Commencez seul(e). En changeant votre propre posture, vous influencerez positivement la dynamique du couple. Souvent, l'autre finit par être intrigué et rejoint la thérapie." },
    { q: "Est-ce remboursé ?", a: "La thérapie de couple n'est pas remboursée par la Sécurité Sociale. Certaines mutuelles proposent parfois des forfaits 'médecines douces' ou 'psychologie', renseignez-vous auprès de la vôtre." },
    { q: "Combien de temps faut-il pour aller mieux ?", a: "Chaque couple est unique. Parfois 3 ou 4 séances suffisent pour débloquer une situation de crise, parfois c'est un travail de fond sur plusieurs mois. C'est vous qui décidez du rythme." }
  ];

  return (
    <section id="faq" className="py-20 bg-sand-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-serif text-brand-900">Questions fréquentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className={`font-medium text-lg ${openIndex === i ? 'text-brand-800' : 'text-sand-800'}`}>
                  {faq.q}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-500' : 'text-sand-400'}`}>
                   <ChevronDown />
                </div>
              </button>
              <div className={`px-5 pb-5 text-sand-600 font-light leading-relaxed transition-all duration-300 ${openIndex === i ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 9. Contact / Calendly
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info */}
          <div className="space-y-8">
             <div>
                <span className="font-hand text-3xl text-brand-600 block mb-2">Première étape</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-6">Réservez votre appel offert</h2>
                <p className="text-sand-600 text-lg font-light leading-relaxed">
                  C'est un échange simple de 15 minutes par téléphone. Vous me parlez de votre situation, je vous explique comment je peux vous aider. 
                </p>
             </div>
             
             <div className="bg-brand-50/50 rounded-3xl p-6 md:p-8 space-y-6 border border-brand-50">
                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-xl shadow-sm text-brand-600 border border-brand-100"><MapPin size={24} /></div>
                   <div>
                     <h4 className="font-serif font-bold text-brand-900 text-lg">Le Cabinet</h4>
                     <p className="text-sand-600">Rueil-Malmaison (92)</p>
                     <p className="text-sand-500 text-sm mt-1">Adresse exacte envoyée après réservation</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-xl shadow-sm text-brand-600 border border-brand-100"><Video size={24} /></div>
                   <div>
                     <h4 className="font-serif font-bold text-brand-900 text-lg">Visio</h4>
                     <p className="text-sand-600">Disponible via Zoom / WhatsApp</p>
                   </div>
                 </div>
             </div>

             <div className="grid grid-cols-2 gap-4 pt-4">
               <img src={IMG_OFFICE_1} alt="Cabinet" className="rounded-2xl h-32 md:h-40 w-full object-cover shadow-sm border border-sand-100" />
               <img src={IMG_OFFICE_2} alt="Cabinet Rueil" className="rounded-2xl h-32 md:h-40 w-full object-cover shadow-sm border border-sand-100" />
             </div>
          </div>

          {/* Calendly */}
          <div className="w-full bg-white rounded-3xl shadow-2xl shadow-sand-200 border border-sand-100 overflow-hidden relative">
             <div className="p-4 bg-brand-900 text-white text-center">
               <p className="font-medium">👇 Sélectionnez votre créneau ci-dessous</p>
             </div>
             <CalendlyWidget />
          </div>

        </div>

      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-white border-t border-sand-200 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="font-serif text-2xl text-brand-900 mb-2 font-bold">Melissa Boukaia</p>
      <p className="text-sand-500 mb-8">Thérapie de couple & Sexothérapie</p>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center text-sm text-sand-400 mb-8">
        <a href="#" className="hover:text-brand-800 transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-brand-800 transition-colors">Politique de confidentialité</a>
        <a href="#" className="hover:text-brand-800 transition-colors">CGV</a>
      </div>
      
      <p className="text-xs text-sand-300">&copy; {new Date().getFullYear()} - Tous droits réservés</p>
    </div>
  </footer>
);

// Main App
function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-sand-900 bg-[#faf9f8] selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Reviews />
        <Bio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
