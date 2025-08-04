import { Link } from 'react-router-dom'
import { ChefHat, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Chef Amina</span>
            </Link>
            <p className="text-neutral-300 text-sm">
              Découvrez les saveurs authentiques du monde entier avec nos recettes 
              traditionnelles et nos services traiteur de qualité.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/?hl=fr" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-neutral-300 hover:text-white transition-colors">
                  Recettes
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-neutral-300 hover:text-white transition-colors">
                  Astuces
                </Link>
              </li>
              <li>
                <Link to="/catering" className="text-neutral-300 hover:text-white transition-colors">
                  Traiteur
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.facebook.com" className="text-neutral-300 hover:text-white transition-colors">
                  Mariages
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" className="text-neutral-300 hover:text-white transition-colors">
                  Événements privés
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" className="text-neutral-300 hover:text-white transition-colors">
                  Cours de cuisine
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" className="text-neutral-300 hover:text-white transition-colors">
                  Consultation culinaire
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" className="text-neutral-300 hover:text-white transition-colors">
                  Livraison
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-neutral-300">+33 7 54 40 55 17</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-neutral-300">mounak.traiteur@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-neutral-300">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              © 2024 Chef Amina. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-1 text-sm text-neutral-400 mt-2 md:mt-0">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>par Chef Mouna</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer