import images from '#/public/images';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Produtos</h1>

      <article className="mb-16">
        <p className="text-center text-base font-bold">
          Preço praticado x preço marketing
        </p>
        <Image
          src={images.productImage.salesPerCustomer2}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">
          Preço praticado x preço marketing
        </p>
        <Image
          src={images.productImage.salesPerCustomer3}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">
          Preço praticado x preço marketing
        </p>
        <Image
          src={images.productImage.salesPerCustomer4}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">Grafico de disperção</p>
        <Image
          src={images.productImage.salesPerCustomer5}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">Grafico de disperção</p>
        <Image
          src={images.productImage.salesPerCustomer6}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">Grafico de disperção</p>
        <Image
          src={images.productImage.salesPerCustomer7}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">Grafico de disperção</p>
        <Image
          src={images.productImage.salesPerCustomer8}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="mb-16">
        <p className="text-center text-base font-bold">Comparação de valores</p>
        <Image
          src={images.productImage.salesPerCustomer9}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>

      <article className="">
        <p className="text-center text-base font-bold">
          Diferença do Valor de cada produto com o BOT
        </p>
        <Image
          src={images.productImage.salesPerCustomer10}
          alt="graph"
          className="m-0"
          width={1280}
          height={1}
        />
      </article>
    </div>
  );
}
