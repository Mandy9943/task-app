import InsperationalQuotesRepository from "@/services/InsperationalQuotesRepository/InsperationalQuotesRepository";
import useSwr from "swr";

const repository = new InsperationalQuotesRepository();

const useGetInperationalQuote = () => {
  const { data, isLoading, error } = useSwr("https://type.fit/api/quotes", () =>
    repository.getQuotes()
  );

  return {
    quotes: data,
    isLoading: isLoading,
    error: error,
  };
};

export default useGetInperationalQuote;
