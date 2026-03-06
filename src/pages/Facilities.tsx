import { Clock, Car, Armchair as Wheelchair, Wifi, CreditCard, Shield, Thermometer, BedDouble, Microscope, Ambulance, Users, Building2 } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Clock,
      title: '24/7 Emergency Care',
      description:
        'Round-the-clock emergency medical services with experienced doctors and nurses ready to handle any medical emergency.',
    },
    {
      icon: Wheelchair,
      title: 'Wheelchair Accessible Entrance',
      description:
        'Barrier-free access throughout the hospital with ramps and elevators for easy movement of patients with mobility challenges.',
    },
    {
      icon: Car,
      title: 'Wheelchair Accessible Parking',
      description:
        'Dedicated parking spaces close to the entrance for patients requiring wheelchair assistance and easy hospital access.',
    },
    {
      icon: Thermometer,
      title: 'Modern Medical Equipment',
      description:
        'State-of-the-art diagnostic and treatment equipment including ultrasound, X-ray, ECG, and laboratory facilities.',
    },
    {
      icon: Users,
      title: 'Patient Friendly Environment',
      description:
        'Comfortable waiting areas, clean facilities, and a welcoming atmosphere designed to put patients at ease.',
    },
    {
      icon: CreditCard,
      title: 'NFC Mobile Payments',
      description:
        'Convenient cashless payment options including UPI, cards, and mobile wallets for hassle-free transactions.',
    },
    {
      icon: BedDouble,
      title: 'Comfortable Patient Rooms',
      description:
        'Clean, well-maintained rooms with modern amenities ensuring patient comfort during their stay.',
    },
    {
      icon: Ambulance,
      title: 'Ambulance Services',
      description:
        'Emergency ambulance services available 24/7 for patient transport with trained paramedical staff.',
    },
    {
      icon: Microscope,
      title: 'In-House Laboratory',
      description:
        'Fully equipped diagnostic laboratory providing quick and accurate test results for timely treatment.',
    },
    {
      icon: Shield,
      title: 'Infection Control',
      description:
        'Strict hygiene protocols and infection control measures to ensure patient safety and prevent hospital-acquired infections.',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description:
        'Complimentary wireless internet access throughout the hospital for patients and visitors.',
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description:
        'Well-designed hospital building with proper ventilation, lighting, and spacious corridors for patient comfort.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.85), rgba(31, 78, 121, 0.85)), url(https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Our Facilities
          </h1>
          <p className="text-xl text-gray-100">
            Modern Healthcare Infrastructure for Your Comfort & Care
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vayuputra Multi Speciality Hospitals is equipped with state-of-the-art facilities
              and modern amenities to provide the best possible care and comfort to our patients
              and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-secondary hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <facility.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Advanced Medical Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Equipped with the latest diagnostic and treatment equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  Diagnostic Equipment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our hospital is equipped with advanced diagnostic tools including digital
                  X-ray, ultrasound machines, ECG, and comprehensive laboratory equipment for
                  accurate diagnosis.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    Digital X-Ray Machine
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    4D Ultrasound Scanner
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    ECG & Monitoring Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    Clinical Laboratory
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Operation Theater"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  Surgical Facilities
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Modern operation theaters equipped with advanced laparoscopic equipment and
                  surgical instruments for performing complex procedures with precision.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    Modular Operation Theaters
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    Laparoscopic Equipment
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    ICU & Critical Care
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    Post-Operative Care Units
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Experience World-Class Healthcare
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Visit our hospital and experience the difference that modern facilities and
            compassionate care can make in your healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-opacity-90 transition-all"
            >
              Schedule a Visit
            </a>
            <a
              href="tel:9515379249"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              Call: 9515379249
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
