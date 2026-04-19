import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  MapPin, Phone, Star, UtensilsCrossed, 
  ArrowRight, Instagram, Facebook, Twitter, Award,
  Sparkles, Coffee, Menu as MenuIcon, X, ChevronLeft,
  MessageCircle, ThumbsUp, Share2, MoreHorizontal, User
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Nasi Lemak",
    price: "RM 8",
    description: "Cloud-like coconut rice served with our signature spicy sambal, crispy anchovies, and slow-boiled farm egg.",
    image: "/nasi-lemak.jpg",
    tag: "Signature"
  },
  {
    id: 2,
    name: "Grilled Satay",
    price: "RM 15",
    description: "Tender beef or chicken skewers, charcoal-grilled to smoky perfection, served with velvet-smooth peanut sauce.",
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=800&q=80",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Laksa Sarawak",
    price: "RM 12",
    description: "Aromatic shrimp broth infused with 12 spices, served over thin rice vermicelli and fresh mountain herbs.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    tag: "Chef's Choice"
  },
  {
    id: 4,
    name: "Char Kway Teow",
    price: "RM 9",
    description: "Wok-fried flat noodles with a deep smoky essence, plump river prawns, and fresh chives.",
    image: "https://images.unsplash.com/photo-1543363363-2fceacb7b6c8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Ayam Penyet",
    price: "RM 13",
    description: "Crispy smashed golden chicken, accompanied by our secret volcanic sambal and savory tempeh.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Roti Canai",
    price: "RM 3",
    description: "Hand-flipped thin flaky bread, served with our golden dhal or aromatic fish curry dip.",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80"
  }
];

const REVIEWS = [
  {
    id: 1,
    author: "火茶",
    type: "Local Guide",
    reviewCount: 11,
    photoCount: 15,
    time: "5 months ago",
    content: "The dishes over here tastes nice, rich of flavours. I like how they cook there food with variety of species and fit perfectly the traditional food they made. For the enviroment, this place is clean and tidy, temperature is not hot even in the afternoon.",
    rating: 5
  },
  {
    id: 2,
    author: "Usman",
    type: "Local Guide",
    reviewCount: 74,
    photoCount: 90,
    time: "3 months ago",
    content: "Food was good, waiters were fast but do not know how to serve or deal with customers. Cashier was rude when I asked for clarification, his tune and response was rude and very surprising for me, because of his behavior food taste bad otherwise it was good.",
    rating: 2,
    response: "Sorry sir but this is not Gamelan. We don’t have those kind of plate. We believe that the place you’re trying to tag is the cafe above our restaurant. Hope you can delete this and post a new review tagging the right place. Thank you.."
  },
  {
    id: 3,
    author: "M",
    type: "Local Guide",
    reviewCount: 39,
    photoCount: 48,
    time: "8 months ago",
    content: "First time here. Akak at counter maybe it’s the owner, is really good at QC their food and drink. Staff sent a not ‘kaw’ kopi ais and she came by to the table to exchange it cause she saw it delivered like that, we didn't even ask for an exchange. Great service!",
    rating: 5
  },
  {
    id: 4,
    author: "Andrew Ang",
    type: "Local Guide",
    reviewCount: 920,
    photoCount: 22085,
    time: "2 years ago",
    content: "Hidden within the enclave of Ara Damansara, Gamelan is a gem of a find. If you're into Malay food, this place has an array of dishes that is full of flavours and not that spicy. There's also ala-carte options like Laksam, Nasi Kerabu and more.",
    rating: 5
  },
  {
    id: 5,
    author: "Nancy Ng",
    type: "Local Guide",
    reviewCount: 556,
    photoCount: 7033,
    time: "2 years ago",
    content: "Nice clean & quiet place for breakfast. The Nasi Kerabu and Laksa Kelantan are the highlight dishes. Nasi Dagang is available here too. Everything tastes authentic and fresh.",
    rating: 4
  },
  {
    id: 6,
    author: "Sam Zane",
    type: "Local Guide",
    reviewCount: 235,
    photoCount: 314,
    time: "6 years ago",
    content: "Had breakfast here. Assorted Malay kuehs. Nasi Kerabu, Nasi Dagang, Nasi Lemak, Laksam, Lontong are available. Others like fried rice, fried mee hoon self serve with accompaniment like fried egg.",
    rating: 5
  }
];

const REVIEW_TAGS = [
  { name: "All", count: 303 },
  { name: "nasi dagang", count: 21 },
  { name: "nasi kerabu", count: 21 },
  { name: "laksam", count: 5 },
  { name: "malay food", count: 16 }
];

const EXPERIENCES = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Award Winning",
    desc: "Recognized as a leading destination for authentic Malaysian flavors."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Immersive Decor",
    desc: "A perfect blend of modern luxury and traditional Gamelan heritage."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Artisanal Brews",
    desc: "From traditional Teh Tarik to premium single-origin coffee."
  }
];

const TypingEffect = ({ text }: { text: string }) => {
  return (
    <motion.span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Preloader = ({ onComplete }: { onComplete: () => void; key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => onComplete()}
      className="fixed inset-0 z-[1000] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl font-bold text-amber-500 tracking-[0.4em] mb-6 uppercase"
        >
          GAMELAN
        </motion.h1>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "circInOut" }}
          className="w-full h-px bg-amber-500/50 mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-amber-500/60 font-medium tracking-[0.3em] uppercase text-[10px]"
        >
          Fast, Fresh, and Delicious
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-x-0 bottom-20 flex justify-center"
      >
        <div className="w-[1px] h-20 bg-amber-500 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);
  const [showMenuPage, setShowMenuPage] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const navLinks = ['Home', 'About', 'Menu', 'Experience', 'Reviews', 'Contact'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const menuCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" onComplete={() => {}} />
      ) : (
        <motion.div 
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-amber-500/30 overflow-x-hidden animate-gradient bg-mesh"
        >
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/60377346888"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold text-sm whitespace-nowrap">
          Order on WhatsApp
        </span>
      </motion.a>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
          scrolled || showMenuPage ? "bg-black/90 backdrop-blur-xl h-20 border-b border-white/10" : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          <motion.div 
            onClick={() => { setShowMenuPage(false); setMobileMenuOpen(false); window.scrollTo(0,0); }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group"
          >
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 bg-amber-500 flex items-center justify-center rounded-xl"
            >
              <UtensilsCrossed className="w-5 h-5 text-black" />
            </motion.div>
            <span className="font-serif text-2xl font-bold tracking-tighter text-white">GAMELAN</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                href={item === 'Home' ? '#' : item === 'Menu' ? undefined : `#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (item === 'Menu') {
                    e.preventDefault();
                    setShowMenuPage(true);
                  } else {
                    setShowMenuPage(false);
                  }
                }}
                className={`text-xs uppercase tracking-widest font-bold transition-colors relative group ${
                  (item === 'Menu' && showMenuPage) ? 'text-amber-500' : 'text-neutral-400 hover:text-amber-500'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                  (item === 'Menu' && showMenuPage) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              onClick={() => setShowMenuPage(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-500/20 glow-button flex items-center justify-center"
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-zinc-950 lg:hidden flex flex-col pt-32 px-10"
          >
            <div className="space-y-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item === 'Home' ? '#' : item === 'Menu' ? undefined : `#${item.toLowerCase()}`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item === 'Menu') {
                      e.preventDefault();
                      setShowMenuPage(true);
                      window.scrollTo(0,0);
                    } else {
                      setShowMenuPage(false);
                    }
                  }}
                  className={`block text-3xl font-serif font-bold ${
                    (item === 'Menu' && showMenuPage) ? 'text-amber-500' : 'text-neutral-100 hover:text-amber-500'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => { setMobileMenuOpen(false); setShowMenuPage(false); }}
                className="inline-block w-full py-5 bg-amber-500 text-black text-center font-bold uppercase tracking-[0.2em] rounded-2xl"
              >
                Order Now
              </motion.a>
            </div>
            <div className="mt-auto pb-12 pt-8 border-t border-white/10 flex flex-col gap-6">
              <div className="flex gap-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a 
                    whileHover={{ scale: 1.2, color: '#f59e0b' }}
                    key={i} 
                    href="#" 
                    className="p-3 bg-white/5 rounded-full text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                Experience Harmony &bull; Gamelan Fine Dining
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showMenuPage ? (
          <motion.div
            key="menu-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="pt-32 pb-24"
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.button
                onClick={() => setShowMenuPage(false)}
                className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-xs mb-12 hover:translate-x-[-10px] transition-transform"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Home
              </motion.button>
              
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6"
                >
                  Culinary Heritage
                </motion.div>
                <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8">The <span className="text-amber-500 italic">Menu</span></h2>
                <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                  A carefully curated selection of traditional Malaysian dishes, prepared with authentic ingredients and modern techniques.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {MENU_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="group bg-neutral-900/40 backdrop-blur-md border-white/5 overflow-hidden rounded-[40px] p-4 hover:border-amber-500/30 transition-all duration-500 shadow-2xl">
                      <div className="relative h-72 rounded-[32px] overflow-hidden mb-6">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1626015509749-06b2f4f22bd5?auto=format&fit=crop&w=800&q=80"; }}
                        />
                        {item.tag && (
                          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-black text-[9px] uppercase font-black tracking-widest rounded-full z-20">
                            {item.tag}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="px-4 pb-4">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-500 transition-colors tracking-tight">{item.name}</h3>
                          <span className="text-amber-500 font-bold text-xl">{item.price}</span>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
                          {item.description}
                        </p>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
                        >
                          Add to order
                        </motion.button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Menu page footer / CTA */}
            <div className="max-w-7xl mx-auto px-6 mt-32 mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-amber-500 rounded-[40px] p-12 text-center"
              >
                <h3 className="font-serif text-3xl md:text-5xl text-black font-bold mb-6 italic">Ready to savor the harmony?</h3>
                <motion.a
                  href="#contact"
                  onClick={() => setShowMenuPage(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-12 py-5 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl"
                >
                  Order Now
                </motion.a>
              </motion.div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 text-center">
              <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                Authenticity in every bite &bull; Gamelan Fine Dining
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="home-page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ scale: scaleHero }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=80" 
              alt="Luxury Dining" 
              className="w-full h-full object-cover grayscale-[20%] contrast-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: opacityHero }}
          >
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-amber-500">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3 fill-amber-500" />
                </motion.div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Experience Fine Malaysian Cuisine</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-serif text-6xl md:text-9xl font-medium tracking-tight mb-8"
            >
              The Art of <br />
              <span className="text-amber-500 italic">Fine Dining</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed min-h-[3em]"
            >
              <TypingEffect text="Explore a curated selection of traditional Malaysian dishes, reimagined through modern culinary excellence in the heart of Selangor." />
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
              <motion.button 
                onClick={() => { setShowMenuPage(true); window.scrollTo(0,0); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-amber-500 text-black rounded-full font-bold text-xs md:text-sm uppercase tracking-widest overflow-hidden shadow-xl glow-button inline-flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </motion.button>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-full transition-all shadow-lg font-bold text-xs md:text-sm uppercase tracking-widest inline-flex items-center justify-center"
              >
                Order Now
              </motion.a>

              <motion.a 
                href="#reviews"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-10 md:py-5 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all shadow-lg font-bold text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Reviews
              </motion.a>

              <motion.a 
                href="https://maps.app.goo.gl/u3CuHfq2MA76226K6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/20 hover:border-white transition-all font-bold text-xs md:text-sm uppercase tracking-widest text-white backdrop-blur-sm inline-flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-500" /> Open in Maps
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Luxury Experience Grid */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[40px] bg-neutral-900 shadow-xl border border-white/5 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-500 cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="mb-8 text-amber-500 w-fit"
                >
                  {exp.icon}
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-white group-hover:text-amber-500 transition-colors">{exp.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-white/10">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Fine Dining Culture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-[40px] p-6 hidden md:flex flex-col justify-end shadow-2xl"
              >
                <h4 className="text-black font-serif text-xl font-bold leading-tight">Heritage <br /> Over <br /> Flavor</h4>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber-500" />
                <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px]">The Gamelan Story</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">Where Tradition <br /> <span className="text-amber-500">Meets Harmony</span></h2>
              <p className="text-lg text-neutral-400 mb-10 font-light leading-relaxed">
                Inspired by the rhythmic beauty of Gamelan music, our restaurant is a celebration of balance. Every recipe is a tribute to Malaysian heritage, reimagined for the modern palate.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-1">
                  <span className="block text-3xl font-serif font-bold text-white">4.1</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Google Rating</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl font-serif font-bold text-white">Depuis 2018</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Six Years of Craft</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="font-serif text-5xl font-bold text-white mb-4">Guest <span className="text-amber-500 italic">Voices</span></h2>
                <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">Honest feedback from our community</p>
              </div>

              <div className="p-8 rounded-[40px] bg-neutral-900 border border-white/5 space-y-6 shadow-2xl">
                <div className="flex items-center gap-6">
                  <span className="text-7xl font-serif font-bold text-white leading-none">4.1</span>
                  <div className="space-y-1">
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500" />)}
                      <Star className="w-5 h-5 fill-amber-500/20 text-amber-500" />
                    </div>
                    <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">303 Reviews</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  {[
                    { s: 5, p: 75 },
                    { s: 4, p: 15 },
                    { s: 3, p: 5 },
                    { s: 2, p: 2 },
                    { s: 1, p: 3 }
                  ].map((rate) => (
                    <div key={rate.s} className="flex items-center gap-4 text-[10px] font-bold text-neutral-500">
                      <span className="w-2">{rate.s}</span>
                      <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${rate.p}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-amber-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 mt-4 bg-white/5 border border-white/10 rounded-2xl text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-black transition-all"
                >
                  Write a review
                </motion.button>
              </div>
            </motion.div>

            <div className="lg:col-span-2 space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Popular Tags */}
                <div className="flex flex-wrap gap-2">
                  {REVIEW_TAGS.map((tag, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ y: -2 }}
                      className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${
                        i === 0 ? 'bg-amber-500 border-amber-500 text-black' : 'bg-neutral-900 border-white/10 text-neutral-400 hover:border-amber-500'
                      }`}
                    >
                      {tag.name} <span className="opacity-40 ml-1">{tag.count}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Sort by:</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white hover:border-amber-500 transition-colors">
                    Relevant <ArrowRight className="w-3 h-3 rotate-90" />
                  </button>
                </div>
              </div>

              {/* Review Cards */}
              <div className="space-y-6">
                {REVIEWS.map((rev, idx) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[40px] bg-neutral-900 border border-white/5 hover:border-amber-500/20 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">
                          <User className="w-6 h-6 text-neutral-600" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">{rev.author}</h4>
                          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                            {rev.type} • {rev.reviewCount} reviews
                          </p>
                        </div>
                      </div>
                      <div className="flex text-amber-500 gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-500" />)}
                      </div>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                      {rev.content}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{rev.time}</span>
                      <div className="flex gap-6">
                        <button className="flex items-center gap-2 text-neutral-500 hover:text-amber-500 transition-colors text-[10px] uppercase font-black uppercase tracking-widest">
                          <ThumbsUp className="w-3.5 h-3.5" /> Like
                        </button>
                        <button className="text-neutral-500 hover:text-amber-500 transition-colors">
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {rev.response && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mt-8 pt-8 border-t border-white/5 space-y-4"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-4 bg-amber-500 rounded-full" />
                          <p className="text-white text-[10px] font-black uppercase tracking-widest">Response from owner</p>
                        </div>
                        <p className="text-neutral-500 text-xs italic leading-relaxed bg-black/30 p-4 rounded-2xl border border-white/5">
                          "{rev.response}"
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-amber-500 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 mx-auto"
                >
                  View more reviews on Google <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Reserve Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-amber-500 rounded-[60px] py-20 px-10 text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -left-24 w-64 h-64 border border-black/10 rounded-full"
            />
            <h2 className="font-serif text-5xl md:text-7xl text-black font-bold mb-8 italic">Taste Paradox.</h2>
            <p className="text-black/60 text-xl max-w-xl mx-auto mb-12 font-medium">
              Join us for an evening where tradition meets modern luxury.
            </p>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl glow-button"
            >
              Order Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section id="location" className="py-24 relative overflow-hidden bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber-500" />
                <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px]">Visit our Sanctuary</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Find <span className="text-amber-500 italic">Harmony</span></h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
                Located in the serene Saujana Resort, our space offers a perfect escape for fine dining and cultural immersion.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="text-amber-500 shrink-0 w-6 h-6" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Address</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Dataran PHB, Peremba Square,<br />
                    Saujana Resort, Shah Alam, 40150 Selangor
                  </p>
                </div>
              </div>
            </div>

            <motion.a 
              href="https://maps.app.goo.gl/u3CuHfq2MA76226K6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-black rounded-full font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20"
            >
              Open in Google Maps <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-[60px] overflow-hidden group border border-white/10"
          >
            <div className="absolute inset-0 bg-amber-500/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant Location View" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white text-black p-6 rounded-full shadow-2xl"
              >
                <MapPin className="w-10 h-10" />
              </motion.div>
            </div>
            <div className="absolute bottom-10 left-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <p className="text-amber-500 font-black text-xs uppercase tracking-widest mb-1">Peremba Square</p>
              <p className="text-white text-lg font-serif italic">Harmony at every corner.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-24 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="w-8 h-8 text-amber-500" />
                <span className="font-serif text-3xl font-bold text-white tracking-tighter">GAMELAN</span>
              </div>
              <p className="text-neutral-500 text-lg max-w-sm leading-relaxed">
                Authentic Malaysian flavors served in a sophisticated modern atmosphere.
              </p>
              
              <div className="space-y-10 pt-4">
                <div className="space-y-4">
                  <h5 className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">Instant Contact</h5>
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-amber-500/10 transition-colors">
                      <Phone className="text-amber-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1 text-center lg:text-left">Call us directly</p>
                      <a href="tel:+60377346888" className="text-white font-serif text-3xl md:text-4xl font-bold hover:text-amber-500 transition-colors tracking-tight">+603 7734 6888</a>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a 
                      href="tel:+60377346888" 
                      whileHover={{ scale: 1.05 }}
                      className="group relative px-8 py-4 bg-amber-500 text-black rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                         <Phone className="w-4 h-4 fill-black" /> Call Now
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>

                    <motion.a 
                      href="https://wa.me/60377346888" 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="group relative px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-green-500/20 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                         <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">Our Home</h5>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                      <MapPin className="text-amber-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-neutral-300 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                        Dataran PHB, Peremba Square, Saujana Resort, Shah Alam, 40150 Selangor
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    whileHover={{ scale: 1.2, y: -5, color: '#f59e0b' }} 
                    href="#" 
                    className="p-3 bg-white/5 rounded-full text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4">Opening Hours</h5>
              <div className="space-y-4">
                {[
                  { day: "Saturday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Closed", special: true },
                  { day: "Monday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Tuesday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Wednesday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Thursday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Friday", hours: "7:00 AM – 5:00 PM" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-neutral-500 group-hover:text-amber-500 transition-colors text-xs font-medium">{item.day}</span>
                    <div className="h-px flex-grow mx-4 bg-white/5" />
                    <span className={`text-[11px] font-bold ${item.special ? "text-amber-500" : "text-neutral-300"}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4">Quick Links</h5>
              <div className="grid grid-cols-1 gap-3">
                {['Home', 'About', 'Menu', 'Experience', 'Location'].map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-500 hover:text-amber-500 transition-colors text-xs font-medium w-fit"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Gamelan Fine Dining. Built with Harmony.
            </p>
          </div>
        </div>
      </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



