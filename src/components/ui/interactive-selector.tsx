import { useState, useEffect } from 'react';
import { Stethoscope, Baby, Activity, Heart, Microscope, Syringe, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveSelector = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
    const [language, setLanguage] = useState<'en' | 'te'>('en');

    const optionsContent = {
        en: [
            {
                title: "Maternity Care",
                description: "Dedicated postnatal and prenatal care for safe motherhood.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
                icon: <Baby size={24} />
            },
            {
                title: "General Medicine",
                description: "Comprehensive primary healthcare for all age groups.",
                image: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <ClipboardList size={24} />
            },
            {
                title: "Gastroenterology",
                description: "Expert diagnostics and treatment for digestive health.",
                image: "https://images.unsplash.com/photo-1628863014032-613d29830595?auto=format&fit=crop&w=800&q=80",
                icon: <Activity size={24} />
            },
            {
                title: "Gynaecology",
                description: "Comprehensive women's health and wellness services.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                icon: <Heart size={24} />
            },
            {
                title: "Laparoscopic Surgery",
                description: "Minimally invasive surgeries with faster recovery.",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
                icon: <Stethoscope size={24} />
            },
            {
                title: "Infertility Treatment",
                description: "Advanced fertility solutions to build your family.",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                icon: <Microscope size={24} />
            },
            {
                title: "Diabetology",
                description: "Specialized care for diabetes and related metabolic issues.",
                image: "https://images.pexels.com/photos/6823336/pexels-photo-6823336.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <Syringe size={24} />
            }
        ],
        te: [
            {
                title: "ప్రసూతి చికిత్స",
                description: "సురక్షితమైన మాతృత్వం కోసం అంకితమైన ప్రసవానంతర మరియు ప్రసవ పూర్వ సంరక్షణ.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
                icon: <Baby size={24} />
            },
            {
                title: "జనరల్ మెడిసిన్",
                description: "అన్ని వయసుల వారికి సమగ్ర ప్రాథమిక ఆరోగ్య సంరక్షణ.",
                image: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <ClipboardList size={24} />
            },
            {
                title: "గ్యాస్ట్రోఎంటరాలజీ",
                description: "జీర్ణ ఆరోగ్యానికి నిపుణుల నిర్ధారణ మరియు చికిత్స.",
                image: "https://images.unsplash.com/photo-1628863014032-613d29830595?auto=format&fit=crop&w=800&q=80",
                icon: <Activity size={24} />
            },
            {
                title: "గైనకాలజీ",
                description: "మహిళల ఆరోగ్యం మరియు సంరక్షణ కోసం సమగ్ర సేవలు.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                icon: <Heart size={24} />
            },
            {
                title: "లాపరోస్కోపిక్ సర్జరీ",
                description: "త్వరగా కోలుకునే కనిష్టంగా ఆక్రమించే శస్త్రచికిత్సలు.",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
                icon: <Stethoscope size={24} />
            },
            {
                title: "సంతానలేమి చికిత్స",
                description: "మీ కుటుంబాన్ని పెంచుకోవడానికి అధునాతన సంతానోత్పత్తి పరిష్కారాలు.",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                icon: <Microscope size={24} />
            },
            {
                title: "డయాబెటాలజీ",
                description: "మధుమేహం మరియు సంబంధిత సమస్యల కోసం ప్రత్యేక సంరక్షణ.",
                image: "https://images.pexels.com/photos/6823336/pexels-photo-6823336.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <Syringe size={24} />
            }
        ]
    };

    const currentOptions = optionsContent[language];

    const handleOptionClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];
        currentOptions.forEach((_, i) => {
            const timer = setTimeout(() => {
                setAnimatedOptions(prev => [...prev, i]);
            }, 180 * i);
            timers.push(timer);
        });
        return () => timers.forEach(timer => clearTimeout(timer));
    }, [language]);

    return (
        <div className="relative flex flex-col items-center justify-center py-4 bg-white font-body text-white">
            {/* Header Section */}
            <div className="w-full max-w-4xl px-6 mb-8 flex flex-col items-center justify-center text-center gap-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-4 tracking-tight animate-fadeInTop delay-300">
                        {language === 'en' ? 'Specialized Services' : 'ప్రత్యేక సేవలు'}
                    </h2>
                    <div className="w-16 h-1.5 bg-secondary mb-6 rounded-full opacity-90 shadow-sm mx-auto"></div>
                    <p className="text-base md:text-lg text-gray-600 font-bold max-w-xl animate-fadeInTop delay-600 leading-relaxed">
                        {language === 'en'
                            ? 'Discover our world-class medical departments in the heart of Guntur.'
                            : 'గుంటూరు నడిబొడ్డున మాతో ఉన్న ప్రపంచ స్థాయి వైద్య విభాగాలను కనుగొనండి.'}
                    </p>
                </div>

                {/* Language Toggle */}
                <div className="flex bg-gray-100 p-1 rounded-2xl border-2 border-gray-200 shadow-inner">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${language === 'en'
                            ? 'bg-primary text-white shadow-lg'
                            : 'text-gray-500 hover:text-primary'
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => setLanguage('te')}
                        className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${language === 'te'
                            ? 'bg-primary text-white shadow-lg'
                            : 'text-gray-500 hover:text-primary'
                            }`}
                    >
                        తెలుగు
                    </button>
                </div>
            </div>

            {/* Options Container */}
            <div className="options flex w-full max-w-[1240px] h-[650px] mx-0 items-stretch overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] rounded-[3rem] bg-gray-50 border-8 border-white p-2">
                <AnimatePresence mode="wait">
                    {currentOptions.map((option, index) => (
                        <div
                            key={`${language}-${index}`}
                            className={`
                                option relative flex flex-col justify-end overflow-hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                                ${activeIndex === index ? 'active' : 'group'}
                            `}
                            style={{
                                backgroundImage: `url('${option.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: animatedOptions.includes(index) ? 1 : 0,
                                transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-40px)',
                                minWidth: '70px',
                                cursor: 'pointer',
                                flex: activeIndex === index ? '15 1 0%' : '1 1 0%',
                                zIndex: activeIndex === index ? 10 : 1,
                                willChange: 'flex-grow',
                                borderRadius: '2rem',
                                margin: '4px'
                            }}
                            onClick={() => handleOptionClick(index)}
                        >
                            {/* Overlay */}
                            <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'bg-black/50' : 'bg-black/25 group-hover:bg-black/40'}`}></div>

                            {/* Label Content */}
                            <div className={`absolute bottom-0 left-0 right-0 z-20 flex items-center transition-all duration-700 ${activeIndex === index ? 'p-12' : 'p-0 pb-16'}`}>
                                <div className={`flex items-center gap-8 w-full ${activeIndex === index ? 'justify-start' : 'justify-center'}`}>
                                    {/* Icon Circle */}
                                    <div className={`flex items-center justify-center rounded-full bg-secondary text-white shadow-2xl transition-all duration-500 border-2 border-white/40 flex-shrink-0 ${activeIndex === index ? 'w-24 h-24' : 'w-16 h-16'}`}>
                                        <div className={`${activeIndex === index ? 'scale-150' : 'scale-75 opacity-70'}`}>
                                            {option.icon}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    {activeIndex === index && (
                                        <div className="transition-all duration-700 delay-300 opacity-100 translate-x-0">
                                            <h3 className="font-heading font-bold text-4xl text-white mb-4 drop-shadow-xl">{option.title}</h3>
                                            <p className="font-body text-xl text-gray-100 leading-snug max-w-xl drop-shadow-lg">{option.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </AnimatePresence>
            </div>

            <style>{`
                @keyframes fadeInFromTop {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInTop {
                    animation: fadeInFromTop 0.8s ease-out forwards;
                }
                .delay-300 { animation-delay: 0.3s; }
                .delay-600 { animation-delay: 0.6s; }
                .font-telugu { font-family: sans-serif; }
            `}</style>
        </div>
    );
};

export default InteractiveSelector;

