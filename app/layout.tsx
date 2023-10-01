import '#/styles/globals.css';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Trabalho Big Data Estácio',
    template: '%s | Trabalho Big Data Estácio',
  },
  description: ' Trabalho Big Data.',
  openGraph: {
    title: 'Trabalho Big Data Estácio Playground',
    description: ' Trabalho Big Data.',
    images: [`/api/og?title=Trabalho Big Data Estácio`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1 overflow-y-scroll pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-6xl space-y-8 px-2 pt-20 lg:px-16 lg:py-16">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
