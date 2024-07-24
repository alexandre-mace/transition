"use client";

import React, { useEffect, useRef, useState } from "react";

const useFirstViewportEntry = (
  ref: React.MutableRefObject<any>,
  observerOptions: object,
) => {
  const [entered, setEntered] = useState(false);
  const observer: React.MutableRefObject<undefined | IntersectionObserver> =
    useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => setEntered(entry.isIntersecting),
      observerOptions,
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!observer.current) {
      return;
    }
    const ob = observer.current;
    if (entered) {
      ob.disconnect();
      return;
    }
    if (element && !entered) ob.observe(element);
    return () => ob.disconnect();
  }, [entered, ref]);
  return entered;
};

export default useFirstViewportEntry;
