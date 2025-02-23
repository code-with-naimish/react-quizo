import { environment } from "../environments/environment";

export class TriviaService {
  static async getRandomQuestion(queryParam: {
    categories: string,
    difficulties: string,
    limit: string,
  }) {
    const queryString = new URLSearchParams(queryParam).toString();// converting object to query params
    const url = `${environment.triviaBaseUrl}/questions?${queryString}`
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch questions")
    }
    const data = await response.json();
    return data;
  }
}