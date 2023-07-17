import useGetInperationalQuote from "@/hooks/useGetInperationalQuote";
import { Spin, Typography } from "antd";
const { Title } = Typography;

const InspirationalTitle = () => {
  const { quotes, isLoading } = useGetInperationalQuote();

  return (
    <div className="w-full max-w-[800px] flex flex-col px-10 text-center">
      {isLoading ? (
        <div className="min-h-[150px] flex items-center justify-center">
          <Spin />
        </div>
      ) : (
        <>
          <Title level={1}>
            {'"'}
            {quotes && quotes[0].text}
            {'"'}
          </Title>
          <Title level={2} className="!mt-1" italic>
            {quotes && quotes[0].author}
          </Title>
        </>
      )}
    </div>
  );
};

export default InspirationalTitle;
