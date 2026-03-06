import { Heart, Target, Eye, Award, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and personalized attention.',
    },
    {
      icon: Award,
      title: 'Medical Excellence',
      description: 'Committed to delivering the highest standards of medical care and treatment.',
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Your health and wellbeing are at the center of everything we do.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Maintaining the highest standards of safety and hygiene protocols.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31, 78, 121, 0.85), rgba(31, 78, 121, 0.85)), url(https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-100">
            Excellence in Healthcare Since Years
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                Welcome to Vayuputra Multi Speciality Hospitals
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Located in the heart of Guntur, Andhra Pradesh, Vayuputra Multi Speciality
                Hospitals has been a trusted name in healthcare, serving the community with
                dedication and excellence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are a comprehensive healthcare facility offering a wide range of medical
                services under one roof. Our hospital is equipped with state-of-the-art medical
                technology and staffed by highly experienced doctors and healthcare professionals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From general medicine to specialized treatments in Gynaecology, Gastroenterology,
                Infertility Treatment, and Laparoscopic Surgery, we provide complete healthcare
                solutions for you and your family.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to patient care extends beyond medical treatment. We believe in
                building lasting relationships with our patients based on trust, transparency,
                and compassionate care.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital Building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Target className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services to the
                people of Guntur and surrounding areas. We strive to be a center of medical
                excellence where patients receive comprehensive treatment with compassion and
                dignity.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Eye className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted multispeciality hospital in the region, recognized for
                clinical excellence, innovative treatments, and patient-centered care. We aim to
                continuously improve our services and expand our capabilities to meet the
                evolving healthcare needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to exceptional healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-4xl mb-2">10,000+</div>
              <div className="text-gray-200">Patients Treated</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl mb-2">15+</div>
              <div className="text-gray-200">Years of Service</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl mb-2">7+</div>
              <div className="text-gray-200">Medical Specialties</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Our Commitment to You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Vayuputra Multi Speciality Hospitals, we understand that seeking medical care can
              be stressful. That's why we've created a warm, welcoming environment where patients
              feel comfortable and cared for.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of dedicated healthcare professionals works together to ensure that every
              patient receives personalized attention and the best possible treatment outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are here for you and your family, providing comprehensive healthcare services
              with compassion, expertise, and integrity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
