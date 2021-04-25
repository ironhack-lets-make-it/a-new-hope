import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return <div>Dynamic about: {router.query.bananas}</div>;
};
