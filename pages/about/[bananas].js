import { useRouter } from "next/router";
import styled from "styled-components";

const MyDiv = styled.div`
  background: ${(props) => (props.isGreen ? "green" : "blue")};
`;

export default () => {
  const router = useRouter();
  return <MyDiv isGreen>Dynamic about: {router.query.bananas}</MyDiv>;
};
