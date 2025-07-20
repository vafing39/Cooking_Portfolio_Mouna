import { useState } from 'react'
import { User, Heart, Clock, Settings, BookOpen, Star, Award, Calendar } from 'lucide-react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('favorites')

  const favoriteRecipes = [
    {
      id: 1,
      title: 'Couscous Royal Marocain',
      image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      time: '2h 30min',
      difficulty: 'Intermédiaire'
    },
    {
      id: 2,
      title: 'Tiramisu Italien',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      time: '4h',
      difficulty: 'Facile'
    },
    {
      id: 3,
      title: 'Pad Thaï Authentique',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      time: '25min',
      difficulty: 'Facile'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      action: 'Recette ajoutée aux favoris',
      item: 'Couscous Royal Marocain',
      date: '2 jours',
      icon: Heart
    },
    {
      id: 2,
      action: 'Recette consultée',
      item: 'Pad Thaï Authentique',
      date: '3 jours',
      icon: BookOpen
    },
    {
      id: 3,
      action: 'Avis laissé',
      item: 'Tiramisu Italien',
      date: '1 semaine',
      icon: Star
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'Explorateur Culinaire',
      description: 'Consulté 10 recettes de pays différents',
      icon: '🌍',
      unlocked: true
    },
    {
      id: 2,
      title: 'Chef Amateur',
      description: 'Ajouté 5 recettes aux favoris',
      icon: '👨‍🍳',
      unlocked: true
    },
    {
      id: 3,
      title: 'Critique Gastronomique',
      description: 'Laissé 3 avis sur des recettes',
      icon: '⭐',
      unlocked: false
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-neutral-800 mb-2">
                Bonjour, <span className="text-gradient">Marie</span>
              </h1>
              <p className="text-neutral-600 mb-4">
                Membre depuis mars 2024 • Exploratrice culinaire passionnée
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">12 favoris</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">45 recettes vues</span>
                </div>
                <div className="flex items-center gap-2 bg-accent-100 text-accent-800 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">8 avis</span>
                </div>
              </div>
            </div>
            <button className="btn-outline">
              <Settings className="w-5 h-5 mr-2" />
              Paramètres
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b border-neutral-200">
            {[
              { id: 'favorites', label: 'Mes Favoris', icon: Heart },
              { id: 'activity', label: 'Activité', icon: Clock },
              { id: 'achievements', label: 'Succès', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-500 border-b-2 border-primary-500 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'favorites' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Mes Recettes Favorites
                </h2>
                {favoriteRecipes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteRecipes.map((recipe) => (
                      <div key={recipe.id} className="card card-hover group">
                        <div className="relative">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                            <Heart className="w-5 h-5 text-red-500 fill-current" />
                          </button>
                        </div>
                        
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary-500 transition-colors">
                            {recipe.title}
                          </h3>
                          
                          <div className="flex items-center justify-between text-sm text-neutral-500">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{recipe.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{recipe.time}</span>
                            </div>
                            <div className="px-2 py-1 bg-neutral-100 rounded-full text-xs">
                              {recipe.difficulty}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">💝</div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                      Aucune recette favorite
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Commencez à explorer nos recettes et ajoutez vos préférées !
                    </p>
                    <button className="btn-primary">
                      Découvrir les recettes
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'activity' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Activité Récente
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <activity.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-neutral-800">{activity.action}</p>
                        <p className="text-sm text-neutral-600">{activity.item}</p>
                      </div>
                      <span className="text-sm text-neutral-500">Il y a {activity.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Mes Succès
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`p-6 rounded-xl border-2 transition-all ${
                        achievement.unlocked 
                          ? 'border-primary-200 bg-primary-50' 
                          : 'border-neutral-200 bg-neutral-50 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-neutral-800 mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-neutral-600">
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.unlocked && (
                          <div className="p-2 bg-primary-500 rounded-full">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-neutral-800 mb-6">Actions Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <BookOpen className="w-6 h-6 text-primary-500" />
              <div className="text-left">
                <p className="font-medium text-neutral-800">Découvrir</p>
                <p className="text-sm text-neutral-600">Nouvelles recettes</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
              <Calendar className="w-6 h-6 text-secondary-500" />
              <div className="text-left">
                <p className="font-medium text-neutral-800">Planifier</p>
                <p className="text-sm text-neutral-600">Mes menus</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors">
              <Settings className="w-6 h-6 text-accent-500" />
              <div className="text-left">
                <p className="font-medium text-neutral-800">Paramètres</p>
                <p className="text-sm text-neutral-600">Mon compte</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile