import React, { Suspense, useRef } from "react";
import useFirstViewportEntry from "@/lib/useFirstViewportEntry";
import DebunkSkeleton from "@/components/DebunkSkeleton";

const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  ...wrapperDivProps
}: {
  children: React.ReactNode;
  threshold: number;
  rootMargin?: string;
  root?: any;
}) => {
  const ref: React.MutableRefObject<any> = useRef();
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });
  return (
    <div {...wrapperDivProps} className={"h-full min-h-56"} ref={ref}>
      {entered && <Suspense fallback={<DebunkSkeleton />}>{children}</Suspense>}
    </div>
  );
};

export default RenderOnViewportEntry;
