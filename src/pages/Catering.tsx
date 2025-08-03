import { useState } from 'react'
import { /* Calendar */ Users, /* MapPin */ Star, Check, Mail, Phone } from 'lucide-react'

const Catering = () => {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    location: '',
    message: ''
  })
  
  const services = [
    {
      id: 'baby-shower',
      name: 'Baby Shower',
      description: 'Célébrez l\'arrivée de votre petit trésor avec nos délicieuses créations',
      image: 'https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'À partir de 25€/pers',
      features: ['Buffet sucré-salé', 'Décoration thématique', 'Gâteau personnalisé', 'Boissons incluses'],
      minGuests: 15,
      maxGuests: 50
    },
    {
      id: 'wedding',
      name: 'Mariage',
      description: 'Rendez votre jour J inoubliable avec notre service traiteur haut de gamme',
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'À partir de 60€/pers',
      features: ['Menu personnalisé', 'Service à table', 'Vin d\'honneur', 'Pièce montée'],
      minGuests: 50,
      maxGuests: 200
    },
    {
      id: 'birthday',
      name: 'Anniversaire',
      description: 'Fêtez vos anniversaires avec style grâce à nos buffets festifs',
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'À partir de 20€/pers',
      features: ['Buffet varié', 'Gâteau d\'anniversaire', 'Animations culinaires', 'Formules enfants'],
      minGuests: 10,
      maxGuests: 100
    },
    {
      id: 'dinner',
      name: 'Dîner Privé',
      description: 'Intimité et raffinement pour vos dîners privés et réunions familiales',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'À partir de 45€/pers',
      features: ['Menu gastronomique', 'Service discret', 'Accord mets-vins', 'Cuisine sur place'],
      minGuests: 6,
      maxGuests: 30
    },
    {
      id: 'brunch',
      name: 'Brunch',
      description: 'Brunchs gourmands pour vos week-ends et événements matinaux',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'À partir de 18€/pers',
      features: ['Buffet brunch complet', 'Boissons chaudes', 'Viennoiseries fraîches', 'Produits bio'],
      minGuests: 8,
      maxGuests: 60
    },
    {
      id: 'corporate',
      name: 'Événements d\'Entreprise',
      description: 'Solutions professionnelles pour vos séminaires et réunions d\'affaires',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'À partir de 30€/pers',
      features: ['Pause-café', 'Buffet déjeuner', 'Cocktail dînatoire', 'Service professionnel'],
      minGuests: 15,
      maxGuests: 150
    }
  ]

  const testimonials = [
    {
      name: 'Marie Dubois',
      event: 'Mariage',
      rating: 5,
      comment: 'Chef Amina a rendu notre mariage absolument magique ! Tous nos invités parlent encore de ce repas exceptionnel.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Jean Martin',
      event: 'Anniversaire',
      rating: 5,
      comment: 'Service impeccable et saveurs authentiques. Notre anniversaire de mariage était parfait grâce à Chef Amina.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Sarah Johnson',
      event: 'Baby Shower',
      rating: 5,
      comment: 'Créativité et délicatesse au rendez-vous. Mon baby shower était un rêve devenu réalité !',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Votre demande a été envoyée ! Nous vous recontacterons sous 24h.')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Services <span className="text-gradient">Traiteur</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Confiez-nous l'organisation culinaire de vos événements les plus précieux. 
            Des saveurs authentiques du monde entier pour des moments inoubliables. {selectedService}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="card card-hover group">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-neutral-800">{service.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-500 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary-500" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{service.minGuests}-{service.maxGuests} pers.</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedService(service.id)}
                  className="btn-primary w-full"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-6 text-center">
            Demande de <span className="text-gradient">Devis</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Type d'événement *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un type</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Date souhaitée *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Nombre d'invités *
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Lieu de l'événement *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="Ville, adresse complète"
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Message / Demandes spéciales
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Décrivez vos besoins spécifiques, allergies, préférences..."
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full text-lg py-4">
              Envoyer ma demande
            </button>
          </form>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            Ils nous ont fait <span className="text-gradient">confiance</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-neutral-800">{testimonial.name}</h3>
                    <p className="text-sm text-neutral-600">{testimonial.event}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-neutral-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Contactez-nous directement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">Téléphone</p>
                <p className="text-white/90">+33 6 12 34 56 78</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-white/90">contact@chefamina.fr</p>
              </div>
            </div>
          </div>
          <p className="text-white/90 mt-6">
            Réponse garantie sous 24h • Devis gratuit • Déplacement dans toute la région
          </p>
        </div>
      </div>
    </div>
  )
}

export default Catering