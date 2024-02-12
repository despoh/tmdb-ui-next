import DetailPage from "@/components/DetailPage/DetailPage";
import { getTvDetail } from "@/services/detailService";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

const Detail = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!data) {
    return <div>No data Found</div>;
  }

  return <DetailPage data={data} />;
};

export default Detail;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context?.params?.id as string;

  try {
    const data = await getTvDetail(Number(id));

    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      props: {
        data: null,
      },
    };
  }
}
