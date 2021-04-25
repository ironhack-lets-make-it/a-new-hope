import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  console.log("router:", router);
  return <div>This is a dynamic page: {router.query.slug}</div>;
};
