import React, { ReactNode, Suspense } from 'react';

export const SuspenseDecorator = (story: () => ReactNode): ReactNode => {
  return <Suspense fallback={<div>Loading...</div>}>{story()}</Suspense>;
};
