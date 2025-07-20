import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, Heart, User, ChefHat } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Recettes', path: '/recipes' },
    { name: 'Astuces', path: '/tips' },
    { name: 'Traiteur', path: '/catering' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Chef Amina</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-500'
                    : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 animate-scale-in"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200">
              <Heart className="w-5 h-5" />
            </button>
            <Link to="/profile" className="p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200">
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 animate-slide-up">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <button className="p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200">
                <Heart className="w-5 h-5" />
              </button>
              <Link to="/profile" className="p-2 text-neutral-600 hover:text-primary-500 transition-colors duration-200">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar