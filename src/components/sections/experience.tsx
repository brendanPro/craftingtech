
export default function ExperienceSection(props: {id:string}) {
  const {id} = props;
  return (
    <>
      <section id={id} className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Expériences & Témoignages</h2>
        <p className="mt-4 text-gray-300">(À compléter avec des retours clients et expériences clés)</p>
      </section>
    </>
  );
}