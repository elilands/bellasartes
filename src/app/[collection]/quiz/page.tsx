// src/app/[collection]/quiz/page.tsx
import { notFound } from "next/navigation";
import { Passport } from "@/components/passport/passport";
import { MarbleSurface } from "@/components/effects/marble-surface";
import { CollectionQuizComponent } from "@/components/quiz/collection-quiz";
import { quizzesData } from "@/data/quizzes";
import { SculpturalText } from "@/components/effects/sculptural-text";

interface QuizPageProps {
  params: {
    collection: string;
  };
}

export default function QuizPage({ params }: QuizPageProps) {
  // Buscamos la información del cuestionario basado en la URL
  const quiz = quizzesData.find((q) => q.collectionId === params.collection);

  // Si no existe un cuestionario para esta colección, devolvemos 404
  if (!quiz) {
    notFound();
  }

  return (
    <Passport pageNumber="EV">
      <MarbleSurface />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          
          <div style={{ 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            color: 'var(--accent-red)', 
            marginBottom: '1rem' 
          }}>
            <SculpturalText text={quiz.title} as="h1" />
          </div>
          
          <p style={{ 
            fontFamily: 'var(--font-sans)', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {quiz.description}
          </p>

        </header>

        {/* Instancia del módulo interactivo */}
        <CollectionQuizComponent quizData={quiz} />
      </div>
    </Passport>
  );
}