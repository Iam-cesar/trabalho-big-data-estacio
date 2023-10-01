import React from 'react';

const title = 'Loading';

export const metadata = {
  title,
  openGraph: {
    title,
  },
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
