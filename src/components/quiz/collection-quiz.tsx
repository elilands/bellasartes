// src/components/quiz/collection-quiz.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCcw, ArrowRight, Check, X, Award } from "lucide-react";
import { CollectionQuiz, QuizQuestion, shuffleArray } from "@/data/quizzes";
import { SculpturalText } from "@/components/effects/sculptural-text";
import { usePassportProfile } from "@/hooks/use-passport-profile";
import styles from "./collection-quiz.module.css";

interface CollectionQuizProps {
  quizData: CollectionQuiz;
}

export function CollectionQuizComponent({ quizData }: CollectionQuizProps) {
  const router = useRouter();
  const { addStamp } = usePassportProfile();
  
  const [isMounted, setIsMounted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const initializeQuiz = () => {
      const shuffledQuestions = shuffleArray(quizData.questions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      setQuestions(shuffledQuestions);
      setIsMounted(true);
    };
    initializeQuiz();
  }, [quizData]);

  const handleOptionSelect = (optionId: string) => {
    if (isAnswered) return;
    
    setSelectedOption(optionId);
    setIsAnswered(true);
    
    const isCorrect = optionId === questions[currentIndex].correctOptionId;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetry = () => {
    const shuffledQuestions = shuffleArray(quizData.questions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(shuffledQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleAcceptStamp = () => {
    // Registra la estampa obtenida en el perfil local
    addStamp(quizData.collectionId);
    // Redirige al pasaporte (página principal)
    router.push("/");
  };

  if (!isMounted || questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const isCorrectAnswer = selectedOption === currentQuestion.correctOptionId;
  const passPercentage = (score / questions.length) * 100;
  const hasPassed = passPercentage > 50;

  if (isFinished) {
    return (
      <div className={styles.resultContainer}>
        <motion.div 
          className={styles.resultCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.scoreCircle} data-passed={hasPassed}>
            {score} / {questions.length}
          </div>
          
          <h2 className={styles.resultTitle}>
            {hasPassed ? "¡Aprobaste el quiz!" : "No alcanzaste el puntaje"}
          </h2>
          
          <p className={styles.resultMessage}>
            {hasPassed 
              ? "Obtuviste más del 50% de aciertos y ganaste una nueva estampa para tu pasaporte."
              : "Necesitas más del 50% de aciertos para ganar la estampa. Vuelve a intentarlo."}
          </p>

          <div className={styles.resultActions}>
            {hasPassed ? (
              <button onClick={handleAcceptStamp} className={styles.acceptButton}>
                <Award size={20} />
                <span>Aceptar estampa</span>
              </button>
            ) : (
              <button onClick={handleRetry} className={styles.retryButton}>
                <RefreshCcw size={18} />
                <span>Volver a intentar</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer}>
      <header className={styles.quizHeader}>
        <div className={styles.progressText}>
          Pregunta {currentIndex + 1} de {questions.length}
        </div>
        <div className={styles.progressBar}>
          <motion.div 
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={styles.questionBlock}
        >
          <SculpturalText 
            text={currentQuestion.text} 
            as="h3" 
            className={styles.questionText} 
          />

          <div className={styles.optionsList}>
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isCorrectOption = option.id === currentQuestion.correctOptionId;
              
              let statusClass = "";
              if (isAnswered) {
                if (isCorrectOption) statusClass = styles.correct;
                else if (isSelected && !isCorrectOption) statusClass = styles.incorrect;
                else statusClass = styles.dimmed;
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  disabled={isAnswered}
                  className={`${styles.optionButton} ${statusClass}`}
                  aria-pressed={isSelected}
                >
                  <span className={styles.optionLetter}></span>
                  <span className={styles.optionText}>{option.text}</span>
                  {isAnswered && isCorrectOption && <Check size={18} className={styles.statusIcon} />}
                  {isAnswered && isSelected && !isCorrectOption && <X size={18} className={styles.statusIcon} />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={styles.feedbackSection}
              >
                <div className={styles.justificationBox} data-correct={isCorrectAnswer}>
                  <strong className={styles.feedbackTitle}>
                    {isCorrectAnswer ? "Respuesta correcta" : "Respuesta incorrecta"}
                  </strong>
                  <p className={styles.justificationText}>{currentQuestion.justification}</p>
                </div>
                
                <button onClick={handleNext} className={styles.nextButton}>
                  <span>{currentIndex < questions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}