import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import * as S from "./styles";

export default function Card() {
  return (
    <S.Container>
      <Skeleton
        baseColor="var(--gray-800)"
        highlightColor="var(--gray-900)"
        borderRadius={8}
        width={266}
        height={400}
        style={{
          marginBottom: "2rem",
        }}
      />

      <Skeleton
        baseColor="var(--gray-800)"
        highlightColor="var(--gray-900)"
        borderRadius={8}
        height={20}
        width={150}
      />
    </S.Container>
  );
}
