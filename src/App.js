import { Home } from "./components/Home.component";



const App = () => {
  return (
    // <div className="h-screen flex flex-col bg-purple-400">
    //   <div className="h-auto  bg-yellow-500 ">1</div>
    //   <div className=""></div>
    //   <div className="h-screen sticky left-0 bg-yellow-500">3</div>
    // </div>
    <main class="flex flex-col h-screen">
      <div class="flex flex-1 overflow-hidden ">
        <div class="bg-yellow-500 w-[250px] flex flex-col justify-end bg-sidebar1 bg-center">
          <div className="h-[250px] bg-logo2invert bg-contain bg-no-repeat"></div>
        </div>
        <div class="flex flex-1 flex-col">
          <div class="flex flex-col bg-main bg-cover bg-fixed overflow-y-auto paragraph">
            <Home />
          </div>
        </div>
        <div class="bg-black w-[250px] flex flex-col justify-between">
          <div className="h-[250px] bg-logo2yellow bg-contain bg-no-repeat animate-pulse-slow"></div>
          <div className="h-[500px] bg-black bg-opacity-80 flex justify-center text-[#FFB433] font-tabloid border-2 border-[#FFB433] m-5">
            <h1 className="text-6xl">Basket</h1>
            <ul></ul>
          </div>
          <div className="h-[250px] bg-black text-[#FFB433] font-tabloid text-center">
            <h2 className="bg-[#FFB433] text-black text-3xl">-folka- 2022©</h2>
            Contanct: folka2134@gmail.com
          </div>
        </div>
      </div>
      {/* <div class="flex">Footer</div> */}
    </main>
  );
}

export default App;
