import images from '#/public/images';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <article>
        <p>Definindo objetivos</p>
        <Image
          src={images.peopleImages.class_room_up}
          alt="class room watched from top"
          width={1280}
          height={1}
        />
      </article>

      <article>
        <p>Analisando possibilidades</p>
        <Image
          src={images.peopleImages.computer_two_persons}
          alt="cumputer with two persons"
          width={1280}
          height={1}
        />
      </article>

      <article>
        <p>Aquele amigo que sempre te ajuda</p>
        <Image
          src={images.peopleImages.computer_focus}
          alt="cumputer with focus"
          width={1280}
          height={1}
        />
      </article>

      <article>
        <p>Codificando a pagina front end</p>
        <Image
          src={images.peopleImages.man_coding}
          alt="a man coding in a black screen"
          width={1280}
          height={1}
        />
      </article>

      <article>
        <p>Aconselhamento do Mestre</p>
        <Image
          src={images.peopleImages.teacher}
          alt="the teacher"
          width={1280}
          height={1}
        />
      </article>

      <article>
        <p>Pensamento sobre quais caminho tomar na aplicação</p>
        <Image
          src={images.peopleImages.two_persons_front}
          alt="two persons front viewed "
          width={1280}
          height={1}
        />
      </article>
    </div>
  );
}
