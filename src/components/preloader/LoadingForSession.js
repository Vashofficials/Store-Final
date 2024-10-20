import React from "react";
import CMSkeletonTwo from "./CmSkeletonTwo";

const LoadingForSession = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
      <CMSkeletonTwo count={3} width={100} />
      <div className="grid grid-cols-2 gap-1 my-3">
        <CMSkeletonTwo count={10} width={125} />
        <CMSkeletonTwo count={10} width={70} textAlign={true} />
      </div>
      <CMSkeletonTwo count={3} width={100} />
      <div className="my-4">
        <CMSkeletonTwo count={4} width={60} />
      </div>
      <div className="grid md:grid-cols-4 gap-2 mt-4">
        <CMSkeletonTwo count={4} width={100} />
        <CMSkeletonTwo count={4} width={100} />
        <CMSkeletonTwo count={4} width={100} />
        <CMSkeletonTwo count={4} width={100} />
      </div>
      <div className="grid md:grid-cols-4 gap-2 mb-6">
        <CMSkeletonTwo count={4} width={100} />
        <CMSkeletonTwo count={4} width={100} />
        <CMSkeletonTwo count={4} width={100} />
        <CMSkeletonTwo count={4} width={100} />
      </div>
      <CMSkeletonTwo count={5} width={60} />
      <div className="my-3">
        <CMSkeletonTwo count={10} width={100} />
      </div>
    </div>
  );
};

export default LoadingForSession;
