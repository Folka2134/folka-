import { Home } from "./components/Home.component";



const App = () => {
  return (
    <div className="h-screen bg-purple-400 grid grid-cols-9">
      <div className="h-auto bg-yellow-500 ">1</div>
      <div className="col-span-7"><Home /></div>
      <div className="h-auto bg-yellow-500 ">3</div>
    </div>
  );
}

export default App;
