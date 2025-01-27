export interface QuestionModel {
  category: string,
  correctAnswer: string,
  difficulty: string,
  id: string,
  incorrectAnswers: string[],
  isNiche: boolean,
  question: { text: string },
  tags: string[],
  type: string,
}