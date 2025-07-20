import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Star, 
  Clock, 
  Users, 
  Heart, 
  ChefHat, 
  Utensils, 
  Award, 
  Play,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const featuredRecipes = [
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
      servings: 6
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
      servings: 4
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
      servings: 8
    }
  ]

  const categories = [
    { name: 'Entrées', icon: '🥗', count: 45, color: 'bg-green-100 text-green-800' },
    { name: 'Plats', icon: '🍽️', count: 120, color: 'bg-orange-100 text-orange-800' },
    { name: 'Desserts', icon: '🍰', count: 78, color: 'bg-pink-100 text-pink-800' },
    { name: 'Amuse-bouches', icon: '🥨', count: 32, color: 'bg-purple-100 text-purple-800' },
    { name: 'Jus & Boissons', icon: '🧃', count: 25, color: 'bg-blue-100 text-blue-800' },
    { name: 'Marinades', icon: '🫙', count: 18, color: 'bg-yellow-100 text-yellow-800' }
  ]

  const stats = [
    { number: '200+', label: 'Recettes', icon: ChefHat },
    { number: '15+', label: 'Pays', icon: Award },
    { number: '5000+', label: 'Clients satisfaits', icon: Users },
    { number: '10+', label: 'Années d\'expérience', icon: Star }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cuisine du <span className="text-gradient">Monde</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
            Découvrez des saveurs authentiques et des recettes traditionnelles 
            du monde entier avec Chef Amina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/recipes" className="btn-primary text-lg px-8 py-4">
              Découvrir les recettes
            </Link>
            <Link to="/catering" className="btn-outline text-lg px-8 py-4">
              Services traiteur
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
            <ChefHat className="w-8 h-8 text-primary-500" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center">
            <Utensils className="w-6 h-6 text-accent-500" />
          </div>
        </div>
      </section>

      {/* Chef Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-neutral-800">
                Rencontrez <span className="text-gradient">Chef Amina</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Passionnée de cuisine depuis mon enfance, j'ai voyagé aux quatre coins du monde 
                pour découvrir et apprendre les secrets culinaires de chaque culture. 
                Aujourd'hui, je partage avec vous mes recettes authentiques et mes astuces 
                pour vous faire voyager à travers les saveurs.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  Cuisine Marocaine
                </span>
                <span className="px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium">
                  Cuisine Asiatique
                </span>
                <span className="px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
                  Cuisine Française
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/about" className="btn-primary">
                  En savoir plus
                </Link>
                <button className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors">
                  <Play className="w-5 h-5" />
                  Voir la vidéo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chef Amina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-neutral-600">Note moyenne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Explorez nos <span className="text-gradient">Catégories</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              De l'entrée au dessert, découvrez une variété de plats authentiques 
              de différentes cultures culinaires
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/recipes?category=${category.name.toLowerCase()}`}
                className="card card-hover p-6 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  {category.name}
                </h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  {category.count} recettes
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-neutral-800 mb-4">
                Recettes <span className="text-gradient">Populaires</span>
              </h2>
              <p className="text-xl text-neutral-600">
                Découvrez nos recettes les plus appréciées
              </p>
            </div>
            <Link to="/recipes" className="btn-primary mt-6 md:mt-0">
              Voir toutes les recettes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="card card-hover group"
              >
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
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
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">
            Trouvez votre <span className="text-gradient">recette parfaite</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Recherchez par ingrédient, type de plat ou pays d'origine
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-xl shadow-lg p-2">
              <div className="flex-1 flex items-center">
                <Search className="w-5 h-5 text-neutral-400 ml-4" />
                <input
                  type="text"
                  placeholder="Rechercher une recette, un ingrédient..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-none outline-none text-neutral-800 placeholder-neutral-400"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-500 transition-colors">
                <Filter className="w-5 h-5" />
                Filtres
              </button>
              <button className="btn-primary ml-2">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commencer votre voyage culinaire ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez notre communauté et découvrez de nouvelles saveurs chaque jour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recipes" className="bg-white text-primary-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-medium transition-colors shadow-lg">
              Commencer maintenant
            </Link>
            <Link to="/catering" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-medium transition-colors">
              Services traiteur
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home