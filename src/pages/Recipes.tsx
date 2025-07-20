import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Star, Clock, Users, Heart } from 'lucide-react'

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')

  const recipes = [
    {
      id: 1,
      title: 'Couscous Royal Marocain',
      description: 'Un plat traditionnel aux saveurs authentiques du Maroc',
      country: 'Maroc',
      image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '2h 30min',
      difficulty: 'Intermédiaire',
      rating: 4.8,
      category: 'Plat principal',
      servings: 6,
      tags: ['épicé', 'festif', 'traditionnel']
    },
    {
      id: 2,
      title: 'Pad Thaï Authentique',
      description: 'Nouilles sautées thaïlandaises avec crevettes et cacahuètes',
      country: 'Thaïlande',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '25min',
      difficulty: 'Facile',
      rating: 4.9,
      category: 'Plat principal',
      servings: 4,
      tags: ['rapide', 'asiatique', 'nouilles']
    },
    {
      id: 3,
      title: 'Tiramisu Italien',
      description: 'Le dessert italien emblématique, crémeux et parfumé',
      country: 'Italie',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '4h',
      difficulty: 'Facile',
      rating: 4.7,
      category: 'Dessert',
      servings: 8,
      tags: ['café', 'crémeux', 'italien']
    },
    {
      id: 4,
      title: 'Sushi Maki Maison',
      description: 'Apprenez à préparer des sushis comme un chef japonais',
      country: 'Japon',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '1h 30min',
      difficulty: 'Difficile',
      rating: 4.6,
      category: 'Entrée',
      servings: 4,
      tags: ['japonais', 'poisson', 'technique']
    },
    {
      id: 5,
      title: 'Paella Valencienne',
      description: 'La vraie recette espagnole avec safran et fruits de mer',
      country: 'Espagne',
      image: 'https://images.pexels.com/photos/16743294/pexels-photo-16743294.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '45min',
      difficulty: 'Intermédiaire',
      rating: 4.8,
      category: 'Plat principal',
      servings: 6,
      tags: ['riz', 'fruits de mer', 'safran']
    },
    {
      id: 6,
      title: 'Baklava Turc',
      description: 'Pâtisserie feuilletée aux noix et sirop de miel',
      country: 'Turquie',
      image: 'https://images.pexels.com/photos/7474467/pexels-photo-7474467.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '2h',
      difficulty: 'Intermédiaire',
      rating: 4.5,
      category: 'Dessert',
      servings: 12,
      tags: ['sucré', 'noix', 'miel']
    }
  ]

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'entrée', label: 'Entrées' },
    { value: 'plat principal', label: 'Plats principaux' },
    { value: 'dessert', label: 'Desserts' },
    { value: 'amuse-bouche', label: 'Amuse-bouches' },
    { value: 'boisson', label: 'Boissons' }
  ]

  const countries = [
    { value: 'all', label: 'Tous les pays' },
    { value: 'maroc', label: 'Maroc' },
    { value: 'thaïlande', label: 'Thaïlande' },
    { value: 'italie', label: 'Italie' },
    { value: 'japon', label: 'Japon' },
    { value: 'espagne', label: 'Espagne' },
    { value: 'turquie', label: 'Turquie' }
  ]

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || recipe.category.toLowerCase() === selectedCategory
    const matchesCountry = selectedCountry === 'all' || recipe.country.toLowerCase() === selectedCountry
    
    return matchesSearch && matchesCategory && matchesCountry
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Nos <span className="text-gradient">Recettes</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Découvrez notre collection de recettes authentiques du monde entier, 
            soigneusement sélectionnées et testées par Chef Amina
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une recette..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {countries.map(country => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-neutral-600">
            {filteredRecipes.length} recette{filteredRecipes.length !== 1 ? 's' : ''} trouvée{filteredRecipes.length !== 1 ? 's' : ''}
          </p>
          <button className="flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors">
            <Filter className="w-5 h-5" />
            Filtres avancés
          </button>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="card card-hover group animate-fade-in"
            >
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-neutral-600 hover:text-red-500" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-neutral-800">{recipe.country}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{recipe.rating}</span>
                  </div>
                  <span className="text-neutral-300">•</span>
                  <span className="text-sm text-neutral-600">{recipe.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-500 transition-colors">
                  {recipe.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} pers.</span>
                  </div>
                  <div className="px-2 py-1 bg-neutral-100 rounded-full text-xs">
                    {recipe.difficulty}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
              Aucune recette trouvée
            </h3>
            <p className="text-neutral-600 mb-6">
              Essayez de modifier vos critères de recherche ou de filtrage
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedCountry('all')
              }}
              className="btn-primary"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Recipes