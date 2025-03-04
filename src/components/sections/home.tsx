
export default function HomeSection(props: {id:string}) {
  const {id} = props;
  return (
    <>
      <section id={id} className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold">Crafting Tech</h1>
        <p className="text-lg mt-4">The Art of Software Craftsmanship</p>
        <p className="mt-6 text-gray-300 max-w-lg">
          Je conçois des applications performantes et évolutives avec une approche
          <span className="text-blue-400 font-semibold"> product-oriented</span>.
        </p>
      </section>
    </>
  );
}