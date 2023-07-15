import InsperationalQuotesRepository from "@/services/InsperationalQuotesRepository/InsperationalQuotesRepository";
import useSwr from "swr";

const repository = new InsperationalQuotesRepository();

const useGetInperationalQuote = () => {
  const { data, isLoading, error, mutate } = useSwr(
    "https://type.fit/api/quotes",
    () => repository.getQuotes()
  );

  return {
    tasks: data,
    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
};

export default useGetInperationalQuote;
