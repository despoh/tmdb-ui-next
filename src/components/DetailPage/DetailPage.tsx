import { MovieDetail, TvDetail } from "@/__generated__/graphql";
import Carousel from "../Carousel/Carousel";
import CastCard from "../CastCard/CastCard";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";

type DetailPageProps = {
  data: TvDetail | MovieDetail;
};
const DetailPage = ({ data }: DetailPageProps) => {
  return (
    <div style={{ width: "100%" }}>
      <Header data={data} />
      <MainSection data={data} />
    </div>
  );
};

export default DetailPage;
