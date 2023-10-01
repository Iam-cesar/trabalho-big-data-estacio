import { Boundary } from '#/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['not-found.tsx']} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">Não encontrado</h2>

        <p className="text-sm">O Conteúdo não pode ser encontrado.</p>
      </div>
    </Boundary>
  );
}
