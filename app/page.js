import CategoriesSelect from "@/components/CategoriesSelect";
import PlayerCount from "@/components/PlayerCount";
import SpendSelect from "@/components/SpendSelect";

export default async function Home() {

  // const fetchOutput = async () => {
  //   if (searchResult) {
  //     const data = await fetch(
  //       `https://api.boardgameatlas.com/api/search?client_id=EsdgqvppMg`
  //     );
  //     const res = await data.json();
  //     console.log(res.games[0])
  //   }
  // };
  
// console.log(chosenCategory)

  return (
    <main >
      <div className="text-center mt-24 mb-16 text-4xl font-mono">looking for your next boardgame?</div>
      <div className="text-center font-mono px-10 mb-4">
        <span>I want to play a(n) </span>
        <CategoriesSelect 
        // chosenCategory={chosenCategory}
        />
        <span> game with at least </span>
        <PlayerCount/>
        <span> other player(s). My budget is up to: </span>
        <SpendSelect/>
        <span> USD</span>
      
      </div>
      <div className="flex">
      <button type="button" className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl">🎲 Find my game 🎰</button>
      </div>
    </main>
  )
}
