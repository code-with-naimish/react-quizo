import { environment } from "../environments/environment";

export class TriviaService {
  static async getRandomQuestion(queryParam: {
    categories: string,
    difficulties: string,
    limit: string
  }) {
    // console.log(queryParam)
    const queryString = new URLSearchParams(queryParam).toString();
    // console.log(queryString)
    const url = `${environment.triviaBaseUrl}/questions?${queryString}`
    console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch questions")
    }
    const data = await response.json();
    return data;
  }
}