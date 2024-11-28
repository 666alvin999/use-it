'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import {useRouter} from "next/navigation";

interface Question {
  id: number
  question: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel type de course pratiquez-vous principalement ?",
    options: ['Course sur route', 'Trail', 'Piste', 'Tapis de course']
  },
  {
    id: 2,
    question: 'À quelle fréquence courez-vous ?',
    options: ['Tous les jours', '3-4 fois par semaine', '1-2 fois par semaine', 'Occasionnellement']
  },
  {
    id: 3,
    question: 'Quelle distance parcourez-vous habituellement ?',
    options: ['5-10 km', '10-20 km', '20-30 km', 'Plus de 30 km']
  },
  {
    id: 4,
    question: 'Quel est votre objectif principal en course à pied ?',
    options: ['Performance', 'Santé et bien-être', 'Perte de poids', 'Préparation à une compétition']
  },
  {
    id: 5,
    question: 'Seriez-vous intéressé par notre service de location de chaussures "use-it" ?',
    options: ['Oui, très intéressé', 'Peut-être', 'Non, je préfère acheter', 'J\'aimerais plus d\'informations']
  }
]

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const router = useRouter();
  
  const progress = ((currentStep + 1) / questions.length) * 100
  const currentQuestion = questions[currentStep]
  
  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Réponses finales:', answers);
    router.push('/');
  }

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="w-full max-w-2xl px-4 py-8">
        <div className="mb-8">
          <Progress value={progress} className="h-1 bg-neutral-200" />
          <p className="text-sm mt-2 text-neutral-600">
            Question {currentStep + 1} sur {questions.length}
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left border transition-all duration-200 hover:bg-[#C7F61E] hover:text-[#1D4500]
                  ${
                    answers[currentQuestion.id] === option
                      ? 'bg-[#C7F61E] text-[#1D4500] border-[#C7F61E]'
                      : 'border-neutral-200 text-black'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-8">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="text-black hover:text-neutral-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Précédent
            </Button>

            {currentStep === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!answers[currentQuestion.id]}
                className="bg-[#C7F61E] text-[#1D4500] hover:bg-[#B8E619]"
              >
                Terminer
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="bg-[#C7F61E] text-[#1D4500] hover:bg-[#B8E619]"
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

