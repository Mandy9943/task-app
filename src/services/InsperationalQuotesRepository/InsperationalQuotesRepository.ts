import { IQuote } from "@/types/quote.interface";
import axios from "axios";
const quotesApi = axios.create({
  baseURL: "https://type.fit/api",
});
class InsperationalQuotesRepository {
  async getQuotes(): Promise<IQuote[]> {
    const { data: allQuotes } = await axios.get<IQuote[]>("/quotes");
    return allQuotes;
  }
}

export default InsperationalQuotesRepository;
