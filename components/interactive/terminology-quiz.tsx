"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Trophy, XCircle } from "lucide-react"
import { useEffect, useState } from "react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

// Expanded pool of questions
const allQuestions: Question[] = [
  {
    id: 1,
    question: 'Ano ang "Alay" sa konteksto ng pagmimina sa Jose Panganiban?',
    options: [
      "Isang uri ng kagamitan sa pagmimina",
      "Puting manok o baboy na iniaalay tuwing Martes o Biyernes ng gabi",
      "Isang uri ng bato na may ginto",
      "Isang seremonya pagkatapos ng pagmimina",
    ],
    correctAnswer: 1,
    explanation:
      'Ang "Alay" ay tumutukoy sa puting manok o baboy na iniaalay tuwing Martes o Biyernes ng gabi bilang bahagi ng ritwal sa pagmimina.',
  },
  {
    id: 2,
    question: 'Ano ang "Kabod" sa pagmimina?',
    options: [
      "Isang uri ng kagamitan",
      "Ang proseso ng paghukay ng lupa at pagkuha ng yamang mineral",
      "Isang uri ng bato",
      "Isang posisyon sa minahan",
    ],
    correctAnswer: 1,
    explanation:
      'Ang "Kabod" ay tumutukoy sa proseso ng paghukay ng lupa at pagkuha ng yamang mineral, partikular ang ginto.',
  },
  {
    id: 3,
    question: 'Ano ang "Alpombra" sa pagmimina?',
    options: [
      "Isang uri ng damit na suot ng mga minero",
      "Isang seremonya bago magsimula ang pagmimina",
      "Inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto",
      "Isang uri ng pagkain na kinakain ng mga minero",
    ],
    correctAnswer: 2,
    explanation: 'Ang "Alpombra" ay inilalagay sa ilalim ng kahon upang magsilbing pansapin at pansala ng ginto.',
  },
  {
    id: 4,
    question: 'Ano ang "Asoge" sa pagmimina?',
    options: [
      "Isang uri ng bato",
      "Isang uri ng kagamitan",
      "Tumutulong sa pagbuo ng amalgam sa ginto",
      "Isang uri ng pagkain",
    ],
    correctAnswer: 2,
    explanation: 'Ang "Asoge" ay tumutulong sa pagbuo ng amalgam sa ginto.',
  },
  {
    id: 5,
    question: 'Ano ang "Bita" sa pagmimina?',
    options: [
      "Isang linya sa apad na siyang sinususugan para makakita ng ginto",
      "Isang uri ng kagamitan",
      "Isang posisyon sa minahan",
      "Isang seremonya",
    ],
    correctAnswer: 0,
    explanation: 'Ang "Bita" ay isang linya sa apad na siyang sinususugan para makakita ng ginto.',
  },
  {
    id: 6,
    question: 'Ano ang "Bareta" o "Barita" sa pagmimina?',
    options: [
      "Isang uri ng bato",
      "Mahabang bakal na patulis ang dulo at lapad na ginagamit panghukay",
      "Isang seremonya bago magsimula ang pagmimina",
      "Isang posisyon sa minahan",
    ],
    correctAnswer: 1,
    explanation:
      'Ang "Bareta" o "Barita" ay isang mahabang bakal na patulis ang dulo at lapad na ginagamit panghukay upang makagawa ng butas.',
  },
  {
    id: 7,
    question: 'Ano ang "Barena" sa pagmimina?',
    options: [
      "Isang uri ng bato",
      "Isang posisyon sa minahan",
      "Ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 2,
    explanation:
      'Ang "Barena" ay ginagamit na pambutas sa pagitan ng apad para paglagyan ng dinamita upang mabasag ang mga batong malapit sa bita.',
  },
  {
    id: 8,
    question: 'Ano ang "Blower" sa pagmimina?',
    options: [
      "Nagbibigay at nagsisilbing hangin ng mga tao sa ilalim upang hindi malason",
      "Isang uri ng kagamitan para sa pagdurog ng bato",
      "Isang posisyon sa minahan",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 0,
    explanation: 'Ang "Blower" ay nagbibigay at nagsisilbing hangin ng mga tao sa ilalim upang hindi malason.',
  },
  {
    id: 9,
    question: 'Ano ang "Butas" sa konteksto ng pagmimina?',
    options: [
      "Isang uri ng kagamitan",
      "Malalim na hukay na kinukuhaan ng ginto o sakada sa ilalim ng lupa",
      "Isang posisyon sa minahan",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 1,
    explanation: 'Ang "Butas" ay tumutukoy sa malalim na hukay na kinukuhaan ng ginto o sakada sa ilalim ng lupa.',
  },
  {
    id: 10,
    question: 'Ano ang "Kahon" sa pagmimina?',
    options: [
      "Isang uri ng bato",
      "Isang posisyon sa minahan",
      "Salaan ng mga ginto at dito binubuhos ang pinong buhangin",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 2,
    explanation:
      'Ang "Kahon" ay ginagamit pangkuha ng ginto. Ito ay salaan ng mga ginto at dito binubuhos ang pinong buhangin habang sa ilalim nito ay may mga barani na nagsasalo sa ginto.',
  },
  {
    id: 11,
    question: 'Ano ang "Kabudan" sa pagmimina?',
    options: [
      "Isang uri ng kagamitan",
      "Lugar kung saan nagkakabud ang mga minero para makakuha ng ginto",
      "Isang posisyon sa minahan",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 1,
    explanation: 'Ang "Kabudan" ay tumutukoy sa lugar kung saan nagkakabud ang mga minero para makakuha ng ginto.',
  },
  {
    id: 12,
    question: 'Ano ang "Bosero" sa pagmimina?',
    options: [
      "Isang uri ng kagamitan",
      "Isang uri ng bato",
      "Taong sumusisid sa ilalim ng butas para maghukay upang mapalalim ang butas",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 2,
    explanation:
      'Ang "Bosero" ay tumutukoy sa taong sumusisid sa ilalim ng butas para maghukay upang mapalalim ang butas.',
  },
  {
    id: 13,
    question: 'Ano ang "Bulmilan" sa pagmimina?',
    options: [
      "Makina na ginagamit na pandurog sa mga bato na mayroong ginto",
      "Isang uri ng bato",
      "Isang posisyon sa minahan",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 0,
    explanation: 'Ang "Bulmilan" ay tumutukoy sa makina na ginagamit na pandurog sa mga bato na mayroong ginto.',
  },
  {
    id: 14,
    question: 'Ano ang "Compressor" sa pagmimina?',
    options: [
      "Isang uri ng bato",
      "Isang posisyon sa minahan",
      "Makina na ginagamit sa pagsisid ng mga bosero",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 2,
    explanation:
      'Ang "Compressor" ay tumutukoy sa makina na ginagamit sa pagsisid ng mga bosero. Ito ang pinagkukuhaan nila ng hangin para nakakahinga sila sa ilalim ng tubig.',
  },
  {
    id: 15,
    question: 'Ano ang "Mangkakabod" sa pagmimina?',
    options: [
      "Isang uri ng kagamitan",
      "Isang uri ng bato",
      "Taong naghuhukay ng lupa at kumukuha ng yamang mineral",
      "Isang seremonya bago magsimula ang pagmimina",
    ],
    correctAnswer: 2,
    explanation: 'Ang "Mangkakabod" ay tumutukoy sa taong naghuhukay ng lupa at kumukuha ng yamang mineral.',
  },
]

export function TerminologyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])

  // Initialize quiz with random questions
  useEffect(() => {
    selectRandomQuestions()
  }, [])

  // Function to select 5 random questions from the pool
  const selectRandomQuestions = () => {
    // Create a copy of all questions and shuffle them
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
    // Take the first 5 questions
    setQuizQuestions(shuffled.slice(0, 5))
    // Reset quiz state
    setCurrentQuestion(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setShowResults(false)
  }

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handleRestartQuiz = () => {
    // Select new random questions when restarting
    selectRandomQuestions()
  }

  // If questions haven't been loaded yet, show loading
  if (quizQuestions.length === 0) {
    return <div className="text-center p-4">Naglo-load...</div>
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  if (showResults) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card
          className="w-full max-w-4xl mx-auto border-none bg-gradient-to-br from-[#1a1f35] to-[#0f1525] backdrop-blur-lg"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(126, 181, 189, 0.2)",
            borderImage: "linear-gradient(135deg, rgba(126, 181, 189, 0.3), rgba(158, 141, 173, 0.1)) 1",
          }}
        >
          <CardHeader className="text-center border-b border-teal/10 pb-6">
            <CardTitle className="text-2xl text-teal-light">Resulta ng Quiz</CardTitle>
            <CardDescription className="text-slate/80">
              Nakakuha ka ng {score} sa {quizQuestions.length} na mga tanong
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-8 pt-8">
            <motion.div
              className="relative w-32 h-32 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-teal/10 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-teal/30 animate-spin-slow"></div>
              <Trophy className="w-16 h-16 text-teal-light drop-shadow-[0_0_10px_rgba(126,181,189,0.5)]" />
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-2xl font-bold text-teal-light mb-3 drop-shadow-[0_0_10px_rgba(126,181,189,0.5)]">
                {score === quizQuestions.length
                  ? "Perpekto!"
                  : score >= quizQuestions.length / 2
                    ? "Magaling!"
                    : "Subukan muli!"}
              </p>
              <p className="text-slate/80">
                {score === quizQuestions.length
                  ? "Napakahusay! Ikaw ay isang eksperto sa mga terminolohiya ng pagmimina."
                  : score >= quizQuestions.length / 2
                    ? "Maganda ang iyong kaalaman sa mga terminolohiya ng pagmimina."
                    : "Patuloy na pag-aralan ang mga terminolohiya ng pagmimina."}
              </p>
            </motion.div>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              onClick={handleRestartQuiz}
              className="w-full bg-gradient-to-r from-teal to-teal-dark hover:from-teal-light hover:to-teal text-white font-semibold transition-all duration-300"
              style={{ boxShadow: "0 0 15px rgba(126, 181, 189, 0.3)" }}
            >
              Subukan Muli
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={currentQuestion}
    >
      <Card
        className="w-full max-w-4xl mx-auto border-none bg-gradient-to-br from-[#1a1f35] to-[#0f1525] backdrop-blur-lg"
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(126, 181, 189, 0.2)",
          borderImage: "linear-gradient(135deg, rgba(126, 181, 189, 0.3), rgba(158, 141, 173, 0.1)) 1",
        }}
      >
        <CardHeader className="border-b border-teal/10 pb-4">
          <div className="flex justify-between items-center mb-3">
            <CardTitle className="text-xl text-teal-light">Pagsusulit sa mga Terminolohiya ng Pagmimina</CardTitle>
            <span className="text-sm text-teal-light bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
              {currentQuestion + 1} sa {quizQuestions.length}
            </span>
          </div>
          <div className="h-2 bg-charcoal-dark/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-dark via-teal to-teal-light rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <motion.div
            className="text-lg font-medium mb-4 text-slate"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {quizQuestions[currentQuestion].question}
          </motion.div>
          <RadioGroup value={selectedOption?.toString()} className="space-y-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "flex items-center space-x-2 rounded-md border p-4 cursor-pointer transition-all duration-300",
                    selectedOption === index &&
                      !isAnswered &&
                      "border-teal bg-teal/10 shadow-[0_0_15px_rgba(126,181,189,0.3)]",
                    isAnswered &&
                      index === quizQuestions[currentQuestion].correctAnswer &&
                      "border-green-500 bg-green-500/10 shadow-[0_0_15px_rgba(72,187,120,0.3)]",
                    isAnswered &&
                      selectedOption === index &&
                      selectedOption !== quizQuestions[currentQuestion].correctAnswer &&
                      "border-red-500 bg-red-500/10 shadow-[0_0_15px_rgba(245,101,101,0.3)]",
                    !isAnswered &&
                      "hover:border-teal hover:bg-teal/5 hover:shadow-[0_0_15px_rgba(126,181,189,0.2)] hover:-translate-y-1",
                  )}
                  onClick={() => handleOptionSelect(index)}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} className="sr-only" />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-normal text-slate">
                    {option}
                  </Label>
                  {isAnswered && index === quizQuestions[currentQuestion].correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {isAnswered &&
                    selectedOption === index &&
                    selectedOption !== quizQuestions[currentQuestion].correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                </div>
              </motion.div>
            ))}
          </RadioGroup>

          {isAnswered && (
            <motion.div
              className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-md backdrop-blur-sm"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium text-teal-light mb-1">Paliwanag:</p>
              <p className="text-slate/80">{quizQuestions[currentQuestion].explanation}</p>
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {!isAnswered ? (
            <Button
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              className="w-full bg-gradient-to-r from-teal to-teal-dark hover:from-teal-light hover:to-teal text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ boxShadow: "0 0 15px rgba(126, 181, 189, 0.3)" }}
            >
              Suriin ang Sagot
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="w-full bg-gradient-to-r from-teal to-teal-dark hover:from-teal-light hover:to-teal text-white font-semibold transition-all duration-300 group"
              style={{ boxShadow: "0 0 15px rgba(126, 181, 189, 0.3)" }}
            >
              {currentQuestion < quizQuestions.length - 1 ? (
                <span className="flex items-center">
                  Susunod na Tanong
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              ) : (
                "Tingnan ang Resulta"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

