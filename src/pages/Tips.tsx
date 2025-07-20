import { useState } from 'react'
import { Search, Lightbulb, Clock, Leaf, ChefHat, Star } from 'lucide-react'

const Tips = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const tips = [
    {
      id: 1,
      title: 'Comment bien conserver les herbes fraîches',
      content: 'Enveloppez les herbes fraîches dans du papier absorbant humide, puis placez-les dans un sac plastique au réfrigérateur. Elles resteront fraîches plus longtemps.',
      category: 'conservation',
      difficulty: 'Facile',
      readTime: '2 min',
      likes: 89,
      image: 'https://images.pexels.com/photos/1358844/pexels-photo-1358844.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Technique pour éplucher l\'ail rapidement',
      content: 'Écrasez légèrement la gousse d\'ail avec le plat de votre couteau. La peau se détachera facilement et vous pourrez l\'éplucher en quelques secondes.',
      category: 'technique',
      difficulty: 'Facile',
      readTime: '1 min',
      likes: 156,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Réutiliser les épluchures de légumes',
      content: 'Ne jetez plus vos épluchures ! Utilisez-les pour faire un bouillon maison riche en saveurs. Conservez-les au congélateur jusqu\'à avoir assez pour préparer votre bouillon.',
      category: 'zero-gaspi',
      difficulty: 'Intermédiaire',
      readTime: '3 min',
      likes: 203,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Assaisonner parfaitement vos plats',
      content: 'Goûtez toujours vos plats en cours de cuisson. Ajoutez le sel par petites quantités et mélangez bien avant de goûter à nouveau. N\'oubliez pas les épices !',
      category: 'assaisonnement',
      difficulty: 'Débutant',
      readTime: '2 min',
      likes: 134,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Maîtriser la cuisson des pâtes',
      content: 'Utilisez beaucoup d\'eau salée (comme l\'eau de mer) et remuez régulièrement. Goûtez 1-2 minutes avant le temps indiqué sur l\'emballage pour obtenir des pâtes al dente.',
      category: 'cuisson',
      difficulty: 'Facile',
      readTime: '2 min',
      likes: 178,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Organiser sa cuisine efficacement',
      content: 'Mettez en place tous vos ingrédients et ustensiles avant de commencer à cuisiner. Cette technique appelée "mise en place" vous fera gagner du temps et éviter les erreurs.',
      category: 'organisation',
      difficulty: 'Débutant',
      readTime: '3 min',
      likes: 267,
      image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const categories = [
    { value: 'all', label: 'Toutes les catégories', icon: ChefHat },
    { value: 'technique', label: 'Techniques', icon: Star },
    { value: 'conservation', label: 'Conservation', icon: Clock },
    { value: 'zero-gaspi', label: 'Zéro gaspi', icon: Leaf },
    { value: 'assaisonnement', label: 'Assaisonnement', icon: Lightbulb },
    { value: 'cuisson', label: 'Cuisson', icon: ChefHat },
    { value: 'organisation', label: 'Organisation', icon: Star }
  ]

  const difficultyColors = {
    'Débutant': 'bg-green-100 text-green-800',
    'Facile': 'bg-blue-100 text-blue-800',
    'Intermédiaire': 'bg-yellow-100 text-yellow-800',
    'Difficile': 'bg-red-100 text-red-800'
  }

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Astuces <span className="text-gradient">Culinaires</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Découvrez nos conseils pratiques et techniques pour améliorer votre cuisine 
            au quotidien et devenir un chef accompli
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une astuce..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="md:w-64">
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
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedCategory === category.value
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <category.icon className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="card card-hover group">
              <div className="relative">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[tip.difficulty as keyof typeof difficultyColors]}`}>
                    {tip.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-500 transition-colors">
                  {tip.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {tip.content}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tip.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lightbulb className="w-4 h-4" />
                    <span className="capitalize">{tip.category}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="btn-primary text-sm px-4 py-2">
                    Lire plus
                  </button>
                  <div className="flex items-center gap-1 text-neutral-500">
                    <Star className="w-4 h-4" />
                    <span>{tip.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💡</div>
            <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
              Aucune astuce trouvée
            </h3>
            <p className="text-neutral-600 mb-6">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="btn-primary"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Envie d'apprendre encore plus ?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Abonnez-vous à notre newsletter pour recevoir de nouvelles astuces chaque semaine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg border-none outline-none"
            />
            <button className="bg-white text-primary-500 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips