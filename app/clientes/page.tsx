'use client';

import Graphs from './components/Graphs';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Clientes</h1>
      <Graphs />
    </div>
  );
}
