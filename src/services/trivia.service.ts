import { environment } from "../environments/environment";

export class TriviaService {
  static async getRandomQuestion() {
    const url = `${environment.triviaBaseUrl}/questions`
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch questions")
    }
    const data = await response.json();
    return data;
  }
}