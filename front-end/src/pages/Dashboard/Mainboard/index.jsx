import Card from "../../../components/Card";

export default function MainBoard() {
  return (
    <div className="w-full h-full">
      <header className="w-full h-60 rounded-xl bg-white/80 overflow-hidden">
        <img
          className="object-contain w-full"
          src="https://img.freepik.com/fotos-gratis/organizacao-do-dia-da-educacao-em-uma-mesa-com-espaco-de-copia_23-2148721266.jpg"
          alt="teste"
        />
      </header>
      <main className="flex gap-10 my-10 md:flex-wrap">
        <Card name={"Turmas"} info={"Crie suas turmas"} route={"classroom"} />
        <Card
          name={"Transferências"}
          info={"Liste a quantidade de transferências"}
          route={"transfers"}
        />
      </main>
    </div>
  );
}
