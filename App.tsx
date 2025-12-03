
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
  Quote,
  Check,
  Calendar,
  Phone
} from 'lucide-react';

// --- IMAGES ---
const IMG_HAPPY_COUPLE = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/couple-heureux-rire.png";
const IMG_CRISIS_COUPLE = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/04/crise-couple-1.jpg";
const IMG_MELISSA = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-17-a-08.57.51_f5249572-768x1293.jpg";
const IMG_OFFICE_1 = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/sexotherapie-saint-cloud-sexologue.jpg";
const IMG_OFFICE_2 = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/Sexotherapeute-a-rueil-malmaison.jpg";
const IMG_THERAPY_SESSION = "https://xn--bullesdepenses-mkb.fr/wp-content/uploads/2025/05/therapie-de-couple.jpg";

// --- COMPONENTS ---

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
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-soft border border-cream-200">
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/melissaboukaia/appel15min?hide_gdpr_banner=1" 
        style={{ minWidth: '320px', height: '700px' }} 
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-cream-100/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
             <span className="font-serif font-bold text-xl text-sage-900 leading-none">Melissa Boukaia</span>
             <span className="text-xs text-sage-600 uppercase tracking-widest mt-1">Thérapeute de couple</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#problemes" className="text-sage-800 hover:text-sage-600 font-medium text-sm transition-colors">Pour qui ?</a>
            <a href="#vision" className="text-sage-800 hover:text-sage-600 font-medium text-sm transition-colors">Approche</a>
            <a href="#qui-suis-je" className="text-sage-800 hover:text-sage-600 font-medium text-sm transition-colors">Qui suis-je ?</a>
            <a 
              href="#contact" 
              className="border border-sage-800 text-sage-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-sage-800 hover:text-white transition-all duration-300"
            >
              Prendre rendez-vous
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-sage-900 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-cream-100 z-40 p-6 animate-in slide-in-from-top-5">
           <div className="flex flex-col space-y-6 text-center pt-10">
            <a href="#problemes" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-sage-900">Pour qui ?</a>
            <a href="#vision" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-sage-900">Approche</a>
            <a href="#qui-suis-je" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-sage-900">Qui suis-je ?</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-sage-600 text-white px-8 py-3 rounded-full text-lg mx-auto w-max mt-4">Prendre rendez-vous</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Left */}
          <div className="relative z-10 order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sage-200 bg-white/50 text-sage-600 text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin size={12} />
                Cabinet Rueil (92) & Visio
             </div>

             <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-serif text-sage-900 mb-8">
               Et si vous pouviez enfin retrouver l'<span className="italic font-light text-sage-500">harmonie</span> dans votre couple ?
             </h1>
             
             <p className="text-lg text-sage-700 mb-10 leading-relaxed font-light max-w-lg">
               Grâce à une thérapie bienveillante, sortez des conflits et recréez un lien solide. Libérez-vous des tensions qui vous freinent.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mb-10">
               <a href="#contact" className="flex items-center justify-center gap-3 bg-sage-600 text-white px-8 py-4 rounded-full font-medium hover:bg-sage-700 transition-all shadow-lg shadow-sage-200 hover:shadow-xl hover:-translate-y-0.5">
                 <Phone size={18} />
                 Appel découverte offert
               </a>
               <a href="#vision" className="flex items-center justify-center px-8 py-4 rounded-full border border-sage-300 text-sage-800 font-medium hover:bg-white transition-colors">
                 Comprendre l'approche
               </a>
             </div>

             <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-cream-100 bg-sage-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Patient" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div className="flex flex-col">
                 <div className="flex gap-0.5 text-gold-500">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <span className="text-xs text-sage-500 font-medium mt-0.5">Recommandé par +40 couples</span>
               </div>
             </div>
             
             <div className="mt-4 text-xs text-sage-400">
               Gratuit • 15 min • Sans engagement
             </div>
          </div>

          {/* Image Right - Arch Shape */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md mx-auto lg:mr-0">
               {/* Main Image */}
               <div className="aspect-[3/4] rounded-[10rem_10rem_2rem_2rem] overflow-hidden shadow-2xl relative z-10">
                 <img src={IMG_HAPPY_COUPLE} alt="Couple heureux" className="w-full h-full object-cover" />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent"></div>
               </div>

               {/* Floating Badge */}
               <div className="absolute bottom-10 -left-6 lg:-left-12 z-20 bg-white/95 backdrop-blur px-6 py-4 rounded-full shadow-lg border border-cream-200 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-sage-400 uppercase font-bold tracking-wide">Prochains créneaux</p>
                    <p className="text-sm font-serif font-bold text-sage-900">Disponibles cette semaine</p>
                  </div>
               </div>

               {/* Decorative Circle */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-100 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      text: "Ressentent un éloignement émotionnel ou physique croissant.",
      icon: <Check size={18} />
    },
    {
      text: "Vivent des conflits fréquents pour des détails du quotidien.",
      icon: <Check size={18} />
    },
    {
      text: "Ont l'impression de ne plus être compris par leur partenaire.",
      icon: <Check size={18} />
    },
    {
      text: "Souffrent de non-dits qui s'accumulent avec le temps.",
      icon: <Check size={18} />
    }
  ];

  return (
    <section id="problemes" className="py-24 bg-sage-500 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Je m'adresse à tous les couples qui...</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="bg-sage-600/50 backdrop-blur-sm border border-sage-400/30 p-8 rounded-2xl flex items-start gap-4 hover:bg-sage-600 transition-colors">
              <div className="bg-white text-sage-600 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                {p.icon}
              </div>
              <p className="text-lg font-light leading-relaxed opacity-95">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="#contact" className="inline-flex items-center gap-2 bg-white text-sage-800 px-8 py-3 rounded-full font-medium hover:bg-cream-100 transition-colors">
             <Phone size={18} />
             Réserver un appel gratuit
           </a>
           <p className="text-sage-200 text-sm mt-4">Gratuit • 15 min • Sans engagement</p>
        </div>
      </div>
    </section>
  );
};

// Google Review Card Component
const GoogleReviewCard = ({ name, date, text, initial, color }: any) => (
  <div className="min-w-[300px] md:min-w-[380px] bg-white p-6 rounded-2xl shadow-sm border border-cream-200 flex flex-col snap-center h-full mx-2">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-serif font-bold text-lg`}>
          {initial}
        </div>
        <div>
          <p className="font-bold text-sage-900 text-sm">{name}</p>
          <p className="text-xs text-sage-400">{date}</p>
        </div>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-80" />
    </div>
    <div className="flex mb-3">
      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-[#fbbc04] fill-[#fbbc04]" />)}
    </div>
    <p className="text-sage-600 text-sm leading-relaxed font-light italic">"{text}"</p>
  </div>
);

const Reviews = () => {
  return (
    <section className="py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-12">
         <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm mb-4">
           <span className="font-bold text-sage-900">5.0</span>
           <div className="flex text-[#fbbc04]"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
           <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-4 h-4" />
         </div>
         <h2 className="text-3xl md:text-4xl font-serif text-sage-900">Ce qu'ils disent de <span className="italic font-light text-sage-500">l'expérience</span></h2>
         <p className="text-sage-500 mt-2 text-sm">Retrouvez les avis vérifiés de mes patients sur Google.</p>
      </div>

      <div className="flex overflow-x-auto pb-10 px-6 max-w-7xl mx-auto snap-x snap-mandatory scrollbar-hide -ml-2">
            <GoogleReviewCard 
              initial="T"
              color="bg-sage-400"
              name="Thomas L." 
              date="il y a 2 mois" 
              text="Nous étions au bord de la rupture. Melissa nous a aidés à nous entendre à nouveau. Sa douceur et sa justesse ont sauvé notre couple."
            />
            <GoogleReviewCard 
              initial="C"
              color="bg-gold-500"
              name="Camille R." 
              date="il y a 3 semaines" 
              text="Je me sentais seule et incomprise. Les séances m'ont permis de mettre des mots sur mes maux et de retrouver ma place dans la relation."
            />
            <GoogleReviewCard 
              initial="M"
              color="bg-sage-600"
              name="Marc D." 
              date="il y a 4 mois" 
              text="Un espace sans jugement où on peut tout dire. On repart avec des clés concrètes pour avancer. Merci pour tout ce chemin."
            />
             <GoogleReviewCard 
              initial="S"
              color="bg-blue-400"
              name="Sophie B." 
              date="il y a 1 mois" 
              text="Excellente thérapeute. L'approche est moderne et vraiment adaptée à notre situation. Des changements dès les premières séances."
            />
      </div>
      
      <div className="text-center">
        <a href="https://g.page/r/..." target="_blank" className="text-sage-600 text-sm hover:text-sage-900 underline underline-offset-4">Voir tous les avis sur Google Maps</a>
      </div>
    </section>
  );
};

const Method = () => {
  return (
    <section id="vision" className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
             <p className="text-xs font-bold tracking-widest text-sage-400 uppercase mb-3">La Méthode</p>
             <h2 className="text-4xl md:text-5xl font-serif text-sage-900 leading-tight">
               La thérapie peut littéralement <span className="italic text-sage-500">transformer</span> votre vie
             </h2>
             <p className="mt-6 text-sage-600 max-w-2xl mx-auto font-light">
               Je vous accompagne pour faire disparaître ce qui entrave votre épanouissement relationnel.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: <Heart size={24} />, title: "Apaiser les émotions", text: "Faire disparaître les ressentiments et les douleurs liées aux conflits passés." },
               { icon: <Quote size={24} />, title: "Recréer le dialogue", text: "Instaurer de nouveaux schémas de communication positifs pour se comprendre enfin." },
               { icon: <Check size={24} />, title: "Renforcer le lien", text: "Retrouver la complicité, l'intimité et la confiance pour avancer ensemble." }
             ].map((item, i) => (
               <div key={i} className="bg-cream-50 rounded-3xl p-8 text-center hover:shadow-soft transition-shadow duration-300 border border-cream-100">
                  <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center text-sage-500 shadow-sm mb-6 border border-cream-200">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl text-sage-900 mb-4">{item.title}</h3>
                  <p className="text-sage-600 font-light leading-relaxed">{item.text}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-16 flex justify-center gap-4">
              <a href="#contact" className="bg-sage-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-sage-700 transition-colors">Appel découverte</a>
              <a href="#contact" className="bg-white text-sage-800 border border-sage-200 px-8 py-3 rounded-full font-medium hover:bg-cream-50 transition-colors">Consultation</a>
          </div>
       </div>
    </section>
  );
};

const Bio = () => {
  return (
    <section id="qui-suis-je" className="py-24 bg-sage-500 text-white relative overflow-hidden">
       {/* Texture/Pattern overlay optional */}
       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
         <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[2rem_8rem_2rem_8rem] overflow-hidden shadow-2xl border-4 border-sage-400/30">
                    <img src={IMG_MELISSA} alt="Melissa Boukaia" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-300 rounded-full flex items-center justify-center">
                    <Quote size={32} className="text-sage-800 opacity-50" />
                 </div>
              </div>
            </div>

            <div className="lg:col-span-7">
               <h2 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                 Mais qui suis-je pour vous promettre cela ?
               </h2>
               <h3 className="text-2xl font-serif text-sage-200 mb-6">Je suis Melissa Boukaia, thérapeute.</h3>
               
               <div className="space-y-6 text-lg font-light text-sage-50 leading-relaxed">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-sage-400 flex items-center justify-center flex-shrink-0 mt-1"><Check size={14} /></div>
                    <p>Une approche <strong className="font-normal text-white">bienveillante & personnalisée</strong> pour chaque couple que j'accompagne.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-sage-400 flex items-center justify-center flex-shrink-0 mt-1"><Check size={14} /></div>
                    <p>Un cadre <strong className="font-normal text-white">éthique et confidentiel</strong> où vous pouvez vous exprimer librement.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-sage-400 flex items-center justify-center flex-shrink-0 mt-1"><Check size={14} /></div>
                    <p>Un accompagnement qui <strong className="font-normal text-white">respecte votre rythme</strong>, sans jugement.</p>
                  </div>
               </div>

               <p className="mt-8 text-sage-200 italic font-serif text-xl border-l-2 border-sage-300 pl-6">
                 "Je ne suis pas là pour juger, mais pour vous aider à retrouver le chemin l'un vers l'autre."
               </p>

               <div className="mt-10 flex flex-wrap gap-4">
                 <a href="#contact" className="bg-white text-sage-800 px-8 py-3 rounded-full font-medium hover:bg-cream-100 transition-colors shadow-lg">
                   Appel découverte
                 </a>
               </div>
            </div>

         </div>
       </div>
    </section>
  );
};

const Office = () => (
  <section className="py-24 bg-cream-100">
     <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-12">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-sage-500">
           <MapPin size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-sage-900 mb-4">Je vous accueille dans mon cabinet privé</h2>
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-cream-200 text-sage-600 text-sm">
           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
           5 rue du Petit Potet, <span className="font-bold">21000 Dijon</span> (exemple)
        </div>
     </div>
     
     <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8">
        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft border-4 border-white">
           <img src={IMG_OFFICE_1} alt="Cabinet" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft border-4 border-white">
           <img src={IMG_OFFICE_2} alt="Cabinet" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
     </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Est-ce que l'appel découverte m'engage à commencer une thérapie ?", a: "Non, pas du tout. L'appel découverte est simplement un temps d'échange gratuit et sans engagement, pour faire le point sur votre situation et voir ensemble comment je peux vous aider." },
    { q: "En combien de séances vais-je voir des résultats ?", a: "Chaque couple est différent. Certains débloquent la situation en quelques séances, d'autres souhaitent un travail plus profond sur la durée. Nous en discuterons ensemble." },
    { q: "Vais-je perdre le contrôle sous hypnose ?", a: "Non, l'hypnose thérapeutique est un état de conscience modifié mais vous restez conscient et maître de vous-même. (Note: À adapter si vous faites de l'hypnose ou non)" },
    { q: "Comment se déroule l'appel de découverte ?", a: "C'est un échange téléphonique de 15-20 minutes où vous m'expliquez brièvement votre problématique, et je vous explique comment je travaille." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif text-sage-900 mb-4">Questions fréquentes</h2>
           <p className="text-sage-500">Tout ce que vous devez savoir avant de commencer</p>
        </div>
        
        <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="border border-cream-200 rounded-2xl p-2 bg-cream-50 hover:border-sage-300 transition-colors">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium text-sage-900 pr-8">{faq.q}</span>
                  <div className={`bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-sage-500 transition-transform ${openIndex === i ? 'rotate-180 bg-sage-600 text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="px-4 pb-4 text-sage-600 font-light text-sm leading-relaxed">{faq.a}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-sage-900 text-white overflow-hidden">
       {/* Background Image Overlay */}
       <div className="absolute inset-0 opacity-20">
         <img src={IMG_THERAPY_SESSION} alt="Background" className="w-full h-full object-cover" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/90 to-sage-900/80"></div>

       <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            Venez découvrir <span className="italic text-sage-300">tout ce que</span><br/>
            la thérapie peut vous apporter.
          </h2>
          <p className="text-xl text-sage-200 mb-12 font-light max-w-2xl mx-auto">
            Faites le premier pas vers votre bien-être aujourd'hui. Le changement commence par une simple décision.
          </p>
          
          <div className="flex justify-center gap-6 mb-16">
             <button className="bg-white text-sage-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-cream-100 transition-colors shadow-lg shadow-white/10">
                <Phone size={20} />
                Appel découverte
             </button>
             <button className="bg-transparent border border-sage-500 text-white px-8 py-4 rounded-full font-medium hover:bg-sage-800 transition-colors">
                Consultation
             </button>
          </div>
          
          <div className="text-xs text-sage-400 mb-16">
             Gratuit • 15 min • Sans engagement • Cabinet (Rueil) ou Visio
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-2xl max-w-4xl mx-auto">
             <CalendlyWidget />
          </div>
       </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-cream-100 py-12 border-t border-cream-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
       <div>
         <p className="font-serif font-bold text-xl text-sage-900">Kaveh Jahanshai</p>
         <p className="text-xs text-sage-500 uppercase tracking-widest mt-1">Hypnothérapeute</p>
       </div>
       <p className="text-xs text-sage-400">Copyright © 2025 Kaveh Jahanshahi - Mentions Légales</p>
    </div>
  </footer>
);

// Switch footer name back to Melissa for the user
const FooterUser = () => (
  <footer className="bg-cream-100 py-12 border-t border-cream-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
       <div>
         <p className="font-serif font-bold text-xl text-sage-900">Melissa Boukaia</p>
         <p className="text-xs text-sage-500 uppercase tracking-widest mt-1">Thérapeute de couple</p>
       </div>
       <p className="text-xs text-sage-400">Copyright © 2025 Melissa Boukaia - Mentions Légales</p>
    </div>
  </footer>
);


function App() {
  return (
    <div className="min-h-screen font-sans text-sage-900 bg-cream-100 selection:bg-sage-200 selection:text-sage-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Reviews />
        <Method />
        <Bio />
        <Office />
        <FAQ />
        <Contact />
      </main>
      <FooterUser />
    </div>
  );
}

export default App;
