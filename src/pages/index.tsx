// Next
import { GetStaticProps } from "next";

// Page
import HomePage, { HomeProps } from "./_home";

// Services
import TopThreeRecent from "../services/top-three-recent";

export default function Home(props: HomeProps) {
  return (
    <>
      <HomePage {...props} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await new TopThreeRecent().getAll();

  return {
    props: {
      topThreeRecent: data,
    },
    revalidate: 60 * 60 * 3,
  };
};
