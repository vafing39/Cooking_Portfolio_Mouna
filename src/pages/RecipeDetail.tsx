import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  Heart, 
  Share2, 
  Printer,
  ChefHat,
  ArrowLeft,
  Play,
  CheckCircle
} from 'lucide-react';
import recettes from '../constantes/recettes';

const RecipeDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('ingredients');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [recette, setRecette] = useState<any>(null);

  useEffect(()=>{
     recettes.map( (item: any) => {
      if(item.id === Number(id) ) {
        setRecette(item)
      }
    })
  }, [id])
  
  const toggleStepCompletion = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    )
  }

  const ingredientCategories = recette?.ingredients?.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = []
    }
    acc[ingredient.category].push(ingredient)
    return acc
  }, {} as Record<string, typeof recette.ingredients>)

  if (!recette) return <div>Chargement...</div>;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/recipes" className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          Retour aux recettes
        </Link>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <img
              src={recette.image}
              alt={recette.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-neutral-600 hover:text-red-500" />
              </button>
              <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Share2 className="w-5 h-5 text-neutral-600" />
              </button>
              <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Printer className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  {recette.country}
                </span>
                <span className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm">
                  {recette.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-neutral-800 mb-4">{recette.title}</h1>
              <p className="text-lg text-neutral-600 leading-relaxed">{recette.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">{recette.rating}</span>
                <span className="text-neutral-500">({recette.reviews} avis)</span>
              </div>
              <div className="flex items-center gap-1">
                <ChefHat className="w-5 h-5 text-neutral-500" />
                <span className="text-neutral-600">{recette.chef}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <div className="text-sm text-neutral-600">Temps total</div>
                <div className="font-semibold">{recette.time}</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <Users className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <div className="text-sm text-neutral-600">Portions</div>
                <div className="font-semibold">{recette.servings} pers.</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <div className="w-6 h-6 mx-auto mb-2 text-primary-500 font-bold">⚡</div>
                <div className="text-sm text-neutral-600">Difficulté</div>
                <div className="font-semibold">{recette.difficulty}</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 text-center">
                <div className="w-6 h-6 mx-auto mb-2 text-primary-500 font-bold">🔥</div>
                <div className="text-sm text-neutral-600">Calories</div>
                <div className="font-semibold">{recette.nutrition?.calories}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {recette.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b border-neutral-200">
            {['ingredients', 'preparation', 'nutrition', 'astuces'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-primary-500 border-b-2 border-primary-500 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                {tab === 'ingredients' && 'Ingrédients'}
                {tab === 'preparation' && 'Préparation'}
                {tab === 'nutrition' && 'Nutrition'}
                {tab === 'astuces' && 'Astuces'}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'ingredients' && (
              <div className="space-y-6">
                {/** Transforme l’objet ingredientCategories en tableau de paires [category, ingredients] : */}
                {Object.entries(ingredientCategories).map(([category, ingredients]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                          <span className="text-neutral-800">{ingredient.name}</span>
                          <span className="font-medium text-primary-500">{ingredient.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'preparation' && (
              <div className="space-y-6">
                {recette.steps?.map((step) => (
                  <div key={step.number} className="border border-neutral-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <button
                        onClick={() => toggleStepCompletion(step.number)}
                        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                          completedSteps.includes(step.number)
                            ? 'bg-primary-500 border-primary-500 text-white'
                            : 'border-neutral-300 hover:border-primary-500'
                        }`}
                      >
                        {completedSteps.includes(step.number) ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-semibold">{step.number}</span>
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-neutral-800">{step.title}</h3>
                          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-neutral-600 mb-3">{step.description}</p>
                        {step.tips && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-sm text-yellow-800">
                              <strong>Astuce :</strong> {step.tips}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">
                    {recette.nutrition?.calories}
                  </div>
                  <div className="text-sm text-neutral-600">Calories</div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-500 mb-1">
                    {recette.nutrition?.protein}g
                  </div>
                  <div className="text-sm text-neutral-600">Protéines</div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent-500 mb-1">
                    {recette.nutrition?.carbs}g
                  </div>
                  <div className="text-sm text-neutral-600">Glucides</div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-1">
                    {recette.nutrition?.fat}g
                  </div>
                  <div className="text-sm text-neutral-600">Lipides</div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    {recette.nutrition?.fiber}g
                  </div>
                  <div className="text-sm text-neutral-600">Fibres</div>
                </div>
              </div>
            )}

            {activeTab === 'astuces' && (
              <div className="space-y-4">
                {recette.tips?.map((tip, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-blue-800">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Vidéo de démonstration</h2>
          <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center">
            <button className="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
              <Play className="w-5 h-5" />
              Regarder la vidéo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail