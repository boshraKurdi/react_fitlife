import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function GoalSkeleton() {
  const numberRender = Array(3)
    .fill(0)
    .map((_, index) => {
      return (
        <Stack key={index} spacing={1}>
          <Skeleton variant="rounded" width={276} height={555} />
        </Stack>
      );
    });
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' ,  flexWrap: "wrap" }}>
      {numberRender}
    </div>
  );
}
