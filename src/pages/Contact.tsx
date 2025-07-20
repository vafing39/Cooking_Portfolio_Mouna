import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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
    alert('Votre message a été envoyé ! Nous vous répondrons rapidement.')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Contactez-<span className="text-gradient">nous</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter. 
            Nous serions ravis de discuter avec vous de vos besoins culinaires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Sujet *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="recette">Question sur une recette</option>
                  <option value="traiteur">Demande de traiteur</option>
                  <option value="cours">Cours de cuisine</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Informations de contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Téléphone</h3>
                    <p className="text-neutral-600">+33 6 12 34 56 78</p>
                    <p className="text-sm text-neutral-500">Lundi - Vendredi : 9h - 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Email</h3>
                    <p className="text-neutral-600">contact@chefamina.fr</p>
                    <p className="text-sm text-neutral-500">Réponse sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Localisation</h3>
                    <p className="text-neutral-600">Paris et région parisienne</p>
                    <p className="text-sm text-neutral-500">Déplacement possible</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Horaires</h3>
                    <p className="text-neutral-600">Lun - Ven : 9h - 18h</p>
                    <p className="text-neutral-600">Sam - Dim : Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Suivez-nous
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 group-hover:text-primary-500 transition-colors">
                      Instagram
                    </h3>
                    <p className="text-sm text-neutral-600">@chefamina_cuisine</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 group-hover:text-primary-500 transition-colors">
                      Facebook
                    </h3>
                    <p className="text-sm text-neutral-600">Chef Amina Cuisine</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <div className="p-2 bg-red-600 rounded-lg">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 group-hover:text-primary-500 transition-colors">
                      YouTube
                    </h3>
                    <p className="text-sm text-neutral-600">Chef Amina</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Newsletter
              </h2>
              <p className="text-white/90 mb-6">
                Recevez nos dernières recettes et astuces culinaires directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 rounded-lg border-none outline-none"
                />
                <button className="bg-white text-primary-500 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact