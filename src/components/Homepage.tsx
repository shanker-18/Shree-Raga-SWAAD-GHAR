<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
import {
  Menu,
  X,
  ShoppingCart,
<<<<<<< HEAD
  
=======
  Star,
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Heart,
  Leaf,
  Award,
<<<<<<< HEAD
  
  Package,
  Sparkles,
  Crown,
  Gift,
  
  Coffee
} from 'lucide-react';

// Custom CSS for premium styling
const customStyles = `
  .corporate-blue {
    color: #1e3a8a;
  }
  .corporate-blue-bg {
    background-color: #1e3a8a;
  }
  .corporate-blue-border {
    border-color: #1e3a8a;
  }
  .corporate-blue-gradient {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  }
  .fast-moving-label {
    background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 8px rgba(220, 38, 38, 0.25);
  }
  .special-dish-label {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 8px rgba(30, 64, 175, 0.25);
  }
  .enhanced-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid rgba(30, 64, 175, 0.1);
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .enhanced-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 25px -5px rgba(30, 64, 175, 0.1), 0 10px 10px -5px rgba(30, 64, 175, 0.05);
    border-color: rgba(30, 64, 175, 0.2);
  }
  .product-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }
  .product-image {
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .product-image-container:hover .product-image {
    transform: scale(1.08);
  }
  .label-badge {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 10;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  .enhanced-header {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(30, 64, 175, 0.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }
  .enhanced-button {
    background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%);
    box-shadow: 0 4px 6px -1px rgba(220, 38, 38, 0.25);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.025em;
  }
  .enhanced-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.3), 0 4px 6px -2px rgba(220, 38, 38, 0.15);
  }
  .enhanced-section {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
  }
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }
  .brand-duo-text {
    background: linear-gradient(135deg, #991b1b 0%, #1e3a8a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 10px rgba(30, 64, 175, 0.1);
  }
`;

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profile } = useAuth();
  // carousel state reserved for future use

  // const featuredProducts = [...];

  const categories = [
    {
      title: 'Powders',
      description: 'Traditional cooking powders made fresh without additives',
      icon: Crown,
      gradient: 'from-red-600 to-rose-500',
      items: [
        'Turmeric Powder', 'Idly Powder', 'Milagu (Pepper) Powder', 'Rasam Powder',
        'Jeera Powder', 'Vathal Powder', 'Malli (Coriander) Powder', 'Puliyokuzhambu Powder'
      ]
    },
    {
      title: 'Mixes',
      description: 'Ready-to-cook mixes for quick authentic meals',
      icon: Package,
      gradient: 'from-amber-600 to-orange-500',
      items: [
        'Puliyotharai (Tamarind) Mix', 'Vathakkuzhambu (Dried veg. Gravy)', 'Vathakkuzhambu Mix'
      ]
    },
    {
      title: 'Vathal',
      description: 'Sun-dried traditional vathals ready to fry',
      icon: Sparkles,
      gradient: 'from-blue-600 to-indigo-500',
      items: [
        'Seeni Avarai Vathal', 'Sundakkai Vathal', 'Manathakkali Vathal', 'Mithukku Vathal',
        'Koozh Vathal', 'Vendaikkai Vathal', 'Pagalkkai Vathal', 'Morr Milagai Vathal'
      ]
    },
    {
      title: 'Appalam',
      description: 'Crispy appalams made from quality ingredients',
      icon: Gift,
      gradient: 'from-emerald-600 to-green-500',
      items: [
        'Pai Appalam', 'Kizangu Appalam', 'Sovi Appalam', 'Ulundhu (Blackgram) Appalam',
        'Arisi Appalam', 'Garlic Appalam', 'Ilai Vadaam'
      ]
    },
    {
      title: 'Pickles',
      description: 'Homemade pickles with medicinal benefits and rich taste',
      icon: Heart,
      gradient: 'from-purple-600 to-indigo-500',
      items: [
        'Salted Lemon', 'Lemon Pickle', 'Avakkai Pickle', 'Kidarangakai Pickle', 'Inji (Ginger) Pickle',
        'Mavadu Pickle', 'Kovaikkai Pickle', 'Mudakatthan Pickle', 'Banana Stem Pickle', 'Kongura Pickle'
      ]
    },
    {
      title: 'Oils',
      description: 'Pure chekku (cold-pressed) oils for cooking and wellness',
      icon: Coffee,
      gradient: 'from-yellow-600 to-amber-500',
      items: [
        'Cekku Groundnut Oil', 'Cekku Coconut Oil', 'Cekku Gingelly Oil'
      ]
    }
  ];

  // testimonials reserved for future use
  // const testimonials = [...];
=======
  Users,
  ChevronLeft,
  Package,
  Sparkles,
  Crown,
  Gift
} from 'lucide-react';

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: 'Traditional Mango Pickle',
      price: '₹299',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 2,
      name: 'Aromatic Garam Masala',
      price: '₹199',
      image: 'https://images.pexels.com/photos/4198793/pexels-photo-4198793.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 3,
      name: 'Pure Chekku Oil',
      price: '₹599',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 4,
      name: 'Homemade Ghee',
      price: '₹449',
      image: 'https://images.pexels.com/photos/8751142/pexels-photo-8751142.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const categories = [
    {
      title: 'Sweets & Snacks',
      description: 'Traditional delicacies made with authentic recipes',
      icon: Gift,
      gradient: 'from-yellow-400 to-orange-500',
      items: [
        'Boondi Appalam', 'Arisi Appalam', 'Milagu Appalam', 'Pappad Appalam', 
        'Seeni Appalam', 'Thenkuzhal Vadam', 'Vadai Vadam', 'Sago Vadam',
        'Omappodi Vadam', 'Rice Flour Murukku', 'Besan Flour Murukku',
        'Pottu Minappappu Murukku', 'Pottu Minappappu Vathal', 'Vathal with Red Chillies',
        'Vathal without Chillies', 'Maavathal', 'Vadam with Salt', 'Fried Appalam',
        'Thin Boondi', 'Small Boondi'
      ],
      image: 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Spice Powders & Cooking Essentials',
      description: 'Aromatic powders for authentic flavors',
      icon: Sparkles,
      gradient: 'from-red-400 to-pink-500',
      items: [
        'Munthiri Podi', 'Sambar Podi', 'Angaya Podi', 'Rasam Podi',
        'Dried Coriander Powder', 'Chilli Powder', 'Pepper Powder',
        'Jeera Powder', 'Turmeric Powder'
      ],
      image: 'https://images.pexels.com/photos/4198793/pexels-photo-4198793.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Pickles & Preserves',
      description: 'Tangy homemade pickles bursting with traditional flavors',
      icon: Crown,
      gradient: 'from-green-400 to-blue-500',
      items: [
        'Elumichai Oorugai', 'Uppili Kothamalli Oorugai', 'Kara Narthangai Oorugai',
        'Boondi Oorugai', 'Mango Pickle', 'Mango Thokku', 'Vadu Mangai',
        'Inji Oorugai', 'Lemon Oorugai', 'Pudina Oorugai', 'Thakkali Oorugai',
        'Mango Avakkai', 'Garlic Pickle', 'Fresh Boondi Pickle', 'Boondi with Curd'
      ],
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'The authentic taste reminds me of my grandmother\'s cooking. Pure quality!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      text: 'Best pickles I\'ve ever tasted. The spice powders are incredibly fresh.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      text: 'Traditional flavors with modern packaging. Excellent quality products.',
      rating: 5
    }
  ];
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

<<<<<<< HEAD
  

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  // };
  // 
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  // };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const toSlug = (input: string): string =>
    input
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
=======
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-100">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      {/* Header */}
      <header className="fixed top-0 w-full enhanced-header shadow-lg z-50">
=======
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
<<<<<<< HEAD
                  src="/logo.jpeg" 
=======
                  src="/logo.png" 
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                  alt="Shree Raga SWAAD GHAR Logo" 
                  className="h-16 w-16 object-contain drop-shadow-lg"
                  onError={(e) => {
                    // Fallback to icon if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden relative bg-white p-2 rounded-full shadow-lg">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div>
<<<<<<< HEAD
                <span className="text-2xl font-bold corporate-blue tracking-tight">Shree Raaga SWAAD GHAR</span>
=======
                <span className="text-2xl font-bold text-amber-800">Shree Raga</span>
                <div className="text-sm font-semibold text-green-600 -mt-1 tracking-wide">SWAAD GHAR</div>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Categories', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
<<<<<<< HEAD
                  className="text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-300 font-semibold"
=======
                  className="text-amber-700 hover:text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg transition-all duration-300 font-semibold"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                >
                  {item}
                </a>
              ))}
<<<<<<< HEAD
              <Link to="/cart">
                <button className="flex items-center space-x-1 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart</span>
                </button>
              </Link>
=======
              <button className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
              </button>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-2">
              {['Home', 'Categories', 'About', 'Contact'].map((item) => (
<<<<<<< HEAD
                                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 px-4 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-all duration-300 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
              ))}
              <Link to="/cart" className="w-full inline-block">
                <button className="w-full flex items-center justify-center space-x-1 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart</span>
                </button>
              </Link>
=======
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-amber-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-all duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full flex items-center justify-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-full">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
              </button>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
            </div>
          </motion.div>
        )}
      </header>

<<<<<<< HEAD
      {/* Demo Mode Banner */}
      <div className="bg-yellow-400 text-yellow-900 px-4 py-2 text-center text-sm font-medium">
        {profile && (
          <span className="ml-2">
            | Logged in as: {profile.name}
          </span>
        )}
      </div>

=======
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
<<<<<<< HEAD
        className="relative min-h-screen flex items-center justify-center"
      >
=======
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url(/b86eea1b-b30b-4dae-bcf5-f0ab33bb633b.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative text-center px-4 max-w-4xl mx-auto z-10"
        >
          {/* Centered Logo Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <img 
<<<<<<< HEAD
              src="/logo.jpeg" 
=======
              src="/logo.png" 
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              alt="Shree Raga SWAAD GHAR Logo" 
              className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-2xl"
              onError={(e) => {
                // Fallback to icon if logo fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden h-20 w-20 md:h-24 md:w-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center drop-shadow-2xl">
              <Leaf className="h-10 w-10 md:h-12 md:w-12 text-green-300" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
<<<<<<< HEAD
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
          >
            Welcome to <br />
            <span className="text-blue-700">Shree Raaga SWAAD GHAR</span>
=======
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-amber-900"
          >
            Welcome to <br />
            <span className="text-yellow-600">Shree Raga SWAAD GHAR</span>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
<<<<<<< HEAD
            className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-gray-700 italic"
          >
            At Shree Raaga Swaad Ghar, we bring the timeless taste of tradition to your table. From tangy homemade pickles and aromatic podis to fresh ready-mix powders, pure chekku oils, rich ghee, handcrafted masala's, and premium coffee powder— every product is made with purity, care, and love.
=======
            className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-amber-800"
          >
            At Shree Raaga Swaad Ghar, we bring the timeless taste of tradition to your table. From tangy homemade pickles and aromatic podis to fresh ready-mix powders, pure chekku oils, rich ghee, and handcrafted masala's— every product is made with purity, care, and love.
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#categories" className="inline-block">
<<<<<<< HEAD
              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
=======
              <button className="bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                Explore Products
              </button>
            </a>
            <a href="#about" className="inline-block">
<<<<<<< HEAD
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
=======
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                Our Story
              </button>
            </a>
          </motion.div>
        </motion.div>

      </section>

<<<<<<< HEAD


      {/* Premium Brand Values Section */}
      <section className="py-16 enhanced-section relative overflow-hidden">
=======
      {/* Premium Brand Values Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="watermark-logo">SWAAD</div>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
        <div className="pattern-dots absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold corporate-blue mb-4 tracking-tight">
              Why Choose Shree Raaga SWAAD GHAR?
            </h2>
            <p className="text-red-600 max-w-2xl mx-auto font-medium italic">
=======
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Why Choose Shree Raga SWAAD GHAR?
            </h2>
            <p className="text-amber-700 max-w-2xl mx-auto">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              Experience the perfect blend of tradition and quality in every product
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Crown,
                title: "Premium Quality",
                description: "Handpicked ingredients with no artificial additives",
<<<<<<< HEAD
                color: "from-blue-500 to-indigo-600"
=======
                color: "from-yellow-400 to-orange-500"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              },
              {
                icon: Leaf,
                title: "100% Natural",
                description: "Pure, organic, and traditionally prepared",
<<<<<<< HEAD
                color: "from-slate-400 to-slate-600"
=======
                color: "from-green-400 to-emerald-500"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              },
              {
                icon: Award,
                title: "Heritage Recipes",
                description: "Time-tested recipes passed down generations",
<<<<<<< HEAD
                color: "from-indigo-500 to-blue-600"
=======
                color: "from-amber-400 to-yellow-500"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every product crafted with care and passion",
                color: "from-red-400 to-pink-500"
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300 shimmer`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-lg font-bold corporate-blue mb-2">{value.title}</h3>
                  <p className="text-sm text-red-600 leading-relaxed font-medium">{value.description}</p>
                </motion.div>
              );
            })}            
=======
                  <h3 className="text-lg font-bold text-amber-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-amber-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
          </div>
        </div>
      </section>

      {/* Categories Section */}
<<<<<<< HEAD
      <section id="categories" ref={categoriesRef} className="py-20 bg-gradient-to-b from-slate-100 via-blue-50 to-slate-100 relative overflow-hidden">
=======
      <section id="categories" ref={categoriesRef} className="py-20 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold corporate-blue mb-4 tracking-tight">
              Our Categories
            </h2>
            <p className="text-lg text-red-600 max-w-2xl mx-auto font-medium italic">
=======
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
              Our Categories
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              Discover our carefully curated collection of authentic Indian flavors
            </p>
          </motion.div>

<<<<<<< HEAD
            <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {categories.slice(0, 3).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100 hover:border-red-400"
                  >
                    {/* Header with Gradient Background */}
                    <div className={`relative h-40 bg-gradient-to-br ${category.gradient} p-4 flex flex-col justify-between`}>
                      {/* Decorative Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-2 right-2 w-12 h-12 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 border border-white rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/50 rounded-full"></div>
                      </div>
                      
                      {/* Icon and Title */}
                      <div className="relative z-10">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <Crown className="h-4 w-4 text-blue-200" />
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
                      </div>
                      
                      {/* Badge */}
                      <div className="relative z-10 self-start">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                          {category.items.length} Products
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4 space-y-3">
                    <p className="text-red-600 leading-relaxed font-medium">{category.description}</p>
                    
                    {/* Product Preview */}
                   <div className="space-y-2">
                      <h4 className="font-semibold corporate-blue text-xs uppercase tracking-wide italic">Featured Items:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        {category.items.slice(0, 6).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between p-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center space-x-1 flex-1">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 truncate text-xs font-medium">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {category.items.length > 6 && (
                        <p className="text-xs text-red-600 font-medium">+{category.items.length - 6} more</p>
                      )}
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-2">
                      <Link to={`/category/${toSlug(category.title)}`}>
                        <button className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group text-sm`}>
                          <Package className="h-3 w-3" />
                          <span>Explore</span>
                          <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Second Row - Bottom 3 Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(3, 6).map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index + 3}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100 hover:border-red-400"
                >
                  {/* Header with Gradient Background */}
                  <div className={`relative h-40 bg-gradient-to-br ${category.gradient} p-4 flex flex-col justify-between`}>
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-2 right-2 w-12 h-12 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border border-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/50 rounded-full"></div>
=======
          <motion.div
            variants={stagger}
            initial="initial"
            animate={categoriesInView ? "animate" : "initial"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white border-2 border-transparent hover:border-yellow-400"
                >
                  {/* Header with Gradient Background */}
                  <div className={`relative h-48 bg-gradient-to-br ${category.gradient} p-6 flex flex-col justify-between`}>
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border border-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/50 rounded-full"></div>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                    </div>
                    
                    {/* Icon and Title */}
                    <div className="relative z-10">
<<<<<<< HEAD
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <Crown className="h-4 w-4 text-blue-200" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
=======
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <Crown className="h-5 w-5 text-yellow-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">{category.title}</h3>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                    </div>
                    
                    {/* Badge */}
                    <div className="relative z-10 self-start">
<<<<<<< HEAD
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
=======
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                        {category.items.length} Products
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
<<<<<<< HEAD
                  <div className="p-4 space-y-3">
                  <p className="text-red-600 leading-relaxed font-medium">{category.description}</p>
                  
                  {/* Product Preview */}
                 <div className="space-y-2">
                    <h4 className="font-semibold corporate-blue text-xs uppercase tracking-wide italic">Featured Items:</h4>
                    <div className="grid grid-cols-1 gap-1 text-xs">
                      {category.items.slice(0, 6).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex items-center space-x-1 flex-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 truncate text-xs font-medium">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {category.items.length > 6 && (
                      <p className="text-xs text-red-600 font-medium">+{category.items.length - 6} more</p>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="pt-2">
                    <Link to={`/category/${toSlug(category.title)}`}>
                      <button className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group text-sm`}>
                        <Package className="h-3 w-3" />
                        <span>Explore</span>
                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
        </div>
        </div>
      </section>


      {/* Brand Story Section */}
      <section id="about" ref={storyRef} className="py-20 bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-sm h-64 bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl shadow-lg flex items-center justify-center border border-blue-100">
                  <img
                    src="/logo.jpeg"
                    alt="Shree Raga SWAAD GHAR Logo"
                    className="h-40 w-40 object-contain drop-shadow-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden h-40 w-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center drop-shadow-xl">
                    <Leaf className="h-16 w-16 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold corporate-blue tracking-tight">Our Heritage Story</h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Prepared the age-old way with handpicked ingredients and no artificial additives, our foods carry the true flavor of our heritage, straight from our kitchen to yours.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Every product at Shree Raaga Swaad Ghar tells a story of tradition, passed down through generations of culinary expertise and refined with modern care.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Shree Raaga Swaad Ghar is where flavors sing the melody of tradition. Every jar of pickle, every spoon of podi, every drop of chekku oil and ghee is a tribute to timeless recipes passed down through generations. Blended with the purity of nature and the care of handmade preparation, our creations carry the essence of a bygone era, touched with the finesse of modern taste. Here, every bite is not just food — it’s a memory, a story, and a celebration of heritage.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold corporate-blue italic">Premium Quality</p>
                  </div>
                  <div className="text-center">
                    <Leaf className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold corporate-blue italic">Natural Ingredients</p>
                  </div>
                </div>
              </div>
            </div>
=======
                  <div className="p-6 space-y-4">
                    <p className="text-amber-700 leading-relaxed">{category.description}</p>
                    
                    {/* Product Preview */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-amber-800 text-sm uppercase tracking-wide">Featured Items:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {category.items.slice(0, 6).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2 p-2 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-amber-700 truncate font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                      {category.items.length > 6 && (
                        <p className="text-xs text-amber-600 font-medium">+{category.items.length - 6} more items</p>
                      )}
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-4">
                      <button className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-lg text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group`}>
                        <Package className="h-4 w-4" />
                        <span>Explore Collection</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                </motion.div>
              );
            })}
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
          </motion.div>
        </div>
      </section>


<<<<<<< HEAD
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900">
=======
      {/* Brand Story Section */}
      <section id="about" ref={storyRef} className="py-20 bg-gradient-to-r from-amber-50 via-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-green-100 rounded-2xl shadow-lg flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Shree Raga SWAAD GHAR Logo"
                  className="h-48 w-48 object-contain drop-shadow-xl"
                  onError={(e) => {
                    // Fallback to icon if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden h-48 w-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center drop-shadow-xl">
                  <Leaf className="h-24 w-24 text-green-600" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-amber-800">
                Our Heritage Story
              </h2>
              <p className="text-lg text-amber-700 leading-relaxed">
                Prepared the age-old way with handpicked ingredients and no artificial additives, our foods carry the true flavor of our heritage, straight from our kitchen to yours.
              </p>
              <p className="text-lg text-amber-700 leading-relaxed">
                Every product at Shree Raaga Swaad Ghar tells a story of tradition, passed down through generations of culinary expertise and refined with modern care.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                  <p className="font-semibold text-amber-800">Premium Quality</p>
                </div>
                <div className="text-center">
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-amber-800">Natural Ingredients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 via-amber-600 to-green-600">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium italic">
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
              Ready to experience authentic flavors? Contact us today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
<<<<<<< HEAD
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-200" />
                    <span className="text-white text-lg font-medium">+91 12345 67890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-200" />
                    <span className="text-white text-lg font-medium">info@shreeragaswaadghar.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-200" />
                    <span className="text-white text-lg font-medium">Traditional Kitchen, India</span>
=======
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-yellow-300" />
                    <span className="text-white text-lg">+91 12345 67890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-yellow-300" />
                    <span className="text-white text-lg">info@shreeragaswaadghar.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-yellow-300" />
                    <span className="text-white text-lg">Traditional Kitchen, India</span>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
<<<<<<< HEAD
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
=======
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
<<<<<<< HEAD
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-blue-400"
=======
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
<<<<<<< HEAD
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-blue-400"
=======
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
<<<<<<< HEAD
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
=======
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
<<<<<<< HEAD
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                              <div className="flex items-center space-x-2 mb-6">
                  <Coffee className="h-8 w-8 text-red-400" />
                  <span className="text-xl font-bold">Shree Raaga SWAAD GHAR</span>
                </div>
              <p className="text-gray-300 leading-relaxed font-medium">
=======
      <footer className="bg-gradient-to-r from-amber-900 via-green-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">Shree Raga SWAAD GHAR</span>
              </div>
              <p className="text-amber-200 leading-relaxed">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                Bringing timeless taste of tradition to your table with authentic Indian flavors made with love and care.
              </p>
            </div>
            
            <div>
<<<<<<< HEAD
              <h4 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Categories', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
=======
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Categories', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-amber-200 hover:text-yellow-400 transition-colors duration-300">
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
<<<<<<< HEAD
              <h4 className="text-lg font-semibold mb-4 text-red-400">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-red-400" />
                  <span className="text-gray-300">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-red-400" />
                  <span className="text-gray-300">info@shreeragaswaadghar.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <span className="text-gray-300">Traditional Kitchen, India</span>
=======
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  <span className="text-amber-200">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <span className="text-amber-200">info@shreeragaswaadghar.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  <span className="text-amber-200">Traditional Kitchen, India</span>
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
                </div>
              </div>
            </div>
            
            <div>
<<<<<<< HEAD
              <h4 className="text-lg font-semibold mb-4 text-red-400">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors duration-300" />
                <Instagram className="h-6 w-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors duration-300" />
                <Twitter className="h-6 w-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors duration-300" />
              </div>

            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Shree Raaga SWAAD GHAR. All rights reserved. Made with ❤️ for traditional flavors.
=======
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-amber-200 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <Instagram className="h-6 w-6 text-amber-200 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <Twitter className="h-6 w-6 text-amber-200 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
              </div>
              <div className="mt-6">
                <p className="text-sm text-amber-200 mb-2">Subscribe to our newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-amber-300 rounded-l-lg text-white placeholder-amber-300 focus:outline-none focus:border-yellow-400"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-amber-900 px-4 py-2 rounded-r-lg font-semibold transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-700 mt-12 pt-8 text-center">
            <p className="text-amber-300">
              © 2025 Shree Raga SWAAD GHAR. All rights reserved. Made with ❤️ for traditional flavors.
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;