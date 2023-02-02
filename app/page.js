import CategoriesSelect from "@/components/CategoriesSelect";
import PlayerCount from "@/components/PlayerCount";

export default async function Home() {


  const fetchCategories = async () => {
    const data = await fetch(
      `https://api.boardgameatlas.com/api/game/categories?client_id=EsdgqvppMg`
    );
    const res = await data.json();
    console.log(res.categories)
  }

  // const fetchOutput = async () => {
  //   if (searchResult) {
  //     const data = await fetch(
  //       `https://api.boardgameatlas.com/api/search?client_id=EsdgqvppMg`
  //     );
  //     const res = await data.json();
  //     console.log(res.games[0])
  //   }
  // };
  
  return (
    <main >
      <div className="text-center mt-24 mb-16 text-4xl font-mono">looking for your next boardgame?</div>
      <div className="text-center font-mono px-10 mb-4">
        <span>I want to play a(n) </span>
        <CategoriesSelect/>
        <span> style game with </span>
        <PlayerCount/>
        <span> player(s)</span>
      
      </div>
      <div className="flex">
      <button type="button" className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl">🃏 Hit me!</button>
      </div>
    </main>
  )
}
