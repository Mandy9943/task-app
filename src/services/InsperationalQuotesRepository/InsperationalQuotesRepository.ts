import { IQuote } from "@/types/quote.interface";
import axios from "axios";
const quotesApi = axios.create({
  baseURL: "https://type.fit/api",
});
class InsperationalQuotesRepository {
  async getQuotes(): Promise<IQuote[]> {
    const { data: allQuotes } = await quotesApi.get<IQuote[]>("/quotes");
    console.log(" allQuotes", allQuotes);

    return allQuotes;
  }
}

export default InsperationalQuotesRepository;
