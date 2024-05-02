import RenderCards from "./components/RenderCards";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-2">
        <form className="flex items-center items-center w-4/5 mt-10">
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full"
            type="text"
            placeholder="Search..."
            
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>
        </form>
        <RenderCards />
      </div>
    </>
  );
}

export default App;
