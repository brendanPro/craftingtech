
export default function AboutSection(props: {id:string}) {
  const {id} = props;
  return (
    <>
      <section id={id} className="py-20 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Qui suis-je ?</h2>
        <p className="mt-4 text-gray-300">
          Je suis <span className="text-blue-400 font-semibold">Brendan GOUIN</span>, ingénieur passionné par
          l'artisanat du logiciel. De la conception à la mise en production,
          j'accompagne mes clients à chaque étape du développement.
        </p>
      </section>

    </>
  );
}