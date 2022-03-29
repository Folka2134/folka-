import { Home } from "./components/Home.component";



const App = () => {
  return (
    <div className="h-screen bg-purple-400 grid grid-cols-1 lg:grid-cols-7 grid-rows-2  lg:grid-rows-none">
      <div className="h-28 lg:h-auto bg-yellow-500 col-span-1">1</div>
      <div className="col-span-5"><Home /></div>
      <div className="h-28 lg:h-auto bg-yellow-500 col-span-1">3</div>
    </div>
  );
}

export default App;
