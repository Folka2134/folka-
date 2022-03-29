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
          <div className="h-[250px] bg-logo2 bg-contain bg-no-repeat"></div>
        </div>
        <div class="flex flex-1 flex-col">
          <div class="flex flex-col bg-main bg-cover bg-fixed overflow-y-auto paragraph">
            <Home />
          </div>
        </div>
        <div class="bg-yellow-500 w-[250px] flex flex-col justify-between bg-sidebar1 bg-center "></div>
      </div>
      {/* <div class="flex">Footer</div> */}
    </main>
  );
}

export default App;
