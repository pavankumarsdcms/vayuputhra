import { useState, useEffect } from 'react';
import { Stethoscope, Baby, Activity, Heart, Microscope } from 'lucide-react';

const InteractiveSelector = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

    const options = [
        {
            title: "Maternity Care",
            description: "Dedicated postnatal and prenatal care for motherhood.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
            icon: <Baby size={24} />
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
            description: "Advanced fertility solutions to help build your family.",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
            icon: <Microscope size={24} />
        }
    ];

    const handleOptionClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        options.forEach((_, i) => {
            const timer = setTimeout(() => {
                setAnimatedOptions(prev => [...prev, i]);
            }, 180 * i);
            timers.push(timer);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center py-12 bg-white font-body text-white">
            {/* Header Section */}
            <div className="w-full max-w-2xl px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 tracking-tight animate-fadeInTop delay-300">Specialized Services</h2>
                <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full animate-fadeInTop delay-300 opacity-90 shadow-sm"></div>
                <p className="text-lg md:text-xl text-gray-600 font-body max-w-xl mx-auto animate-fadeInTop delay-600 leading-relaxed">Discover our world-class medical departments in the heart of Guntur.</p>
            </div>

            {/* Options Container */}
            <div className="options flex w-full max-w-[1200px] h-[600px] mx-0 items-stretch overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[2.5rem] bg-gray-100 border-8 border-white p-2">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`
                            option relative flex flex-col justify-end overflow-hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                            ${activeIndex === index ? 'active' : 'group'}
                        `}
                        style={{
                            backgroundImage: `url('${option.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: animatedOptions.includes(index) ? 1 : 0,
                            transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                            minWidth: '80px',
                            cursor: 'pointer',
                            flex: activeIndex === index ? '12 1 0%' : '1 1 0%',
                            zIndex: activeIndex === index ? 10 : 1,
                            willChange: 'flex-grow',
                            borderRadius: '1.5rem',
                            margin: '4px'
                        }}
                        onClick={() => handleOptionClick(index)}
                    >
                        {/* Overlay to ensure text readability */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'bg-black/40' : 'bg-black/20 group-hover:bg-black/30'}`}
                        ></div>

                        {/* Bottom Gradient */}
                        {activeIndex === index && (
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-700"></div>
                        )}

                        {/* Label Content */}
                        <div className={`absolute bottom-0 left-0 right-0 z-20 flex items-center transition-all duration-700 ${activeIndex === index ? 'p-12' : 'p-0 pb-12'}`}>

                            <div className={`flex items-center gap-8 w-full ${activeIndex === index ? 'justify-start' : 'justify-center'}`}>
                                {/* Icon Circle */}
                                <div className={`flex items-center justify-center rounded-full bg-secondary text-white shadow-2xl transition-all duration-500 border-2 border-white/50 flex-shrink-0 ${activeIndex === index ? 'w-24 h-24' : 'w-14 h-14'}`}>
                                    <div className={`${activeIndex === index ? 'scale-150' : 'scale-90 opacity-80'}`}>
                                        {option.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                {activeIndex === index && (
                                    <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
                                        <h3 className="font-heading font-bold text-4xl text-white mb-3 drop-shadow-lg">{option.title}</h3>
                                        <p className="font-body text-xl text-gray-100 leading-snug max-w-xl drop-shadow-md">{option.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
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
                .cubic-bezier { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
            `}</style>
        </div>
    );
};

export default InteractiveSelector;
