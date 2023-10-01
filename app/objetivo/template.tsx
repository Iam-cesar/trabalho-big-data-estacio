import { Boundary } from '#/ui/boundary';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary labels={['Objetivo']}>{children}</Boundary>;
}
