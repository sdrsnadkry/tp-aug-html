import Header from "./_components/banner";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}

      <div className="container mx-auto grid grid-cols-12 gap-6">
        <div className="bg-hero-image bg-cover  col-span-8 h-[600px]"></div>
        <div className="col-span-4 grid grid-rows-2 gap-6">
          <div className="bg-[green] h-full"></div>
          <div className="bg-[yellow] h-full"></div>
        </div>
      </div>
    </div>
  );
}
