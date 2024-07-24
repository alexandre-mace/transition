import { Skeleton } from "@/components/ui/skeleton";

const DebunkSkeleton = () => (
  <div className="flex flex-col space-y-3 rounded-2xl border bg-white p-4">
    <Skeleton className="h-4 w-[90px]" />
    <Skeleton className="h-4 w-[300px]" />
    <Skeleton className="h-36 w-full" />
    <Skeleton className="mx-auto h-[200px] w-[320px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

export default DebunkSkeleton;
