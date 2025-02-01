import { DifficultyEnum } from "../_enums/difficulty.enum";

export interface QuestionModel {
  category: string,
  correctAnswer: string,
  difficulty: DifficultyEnum,
  id: string,
  incorrectAnswers: string[],
  isNiche: boolean,
  question: { text: string },
  tags: string[],
  type: string,
}