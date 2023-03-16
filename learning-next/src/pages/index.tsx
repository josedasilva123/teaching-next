import ProtectedRoutes from "@/components/ProtectedRoutes";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageExample from "../../public/image.jpg";

interface iPokemon {
   name: string;
   url: string;
}

interface IHomeProps {
   pokemonList: iPokemon[];
}

export default function Home({ pokemonList }: IHomeProps) {
   // useEffect(() => {}, []);

   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ProtectedRoutes>
            <main>
               <div>
                  <Link href="/">Link</Link>
                  <Image src={ImageExample} alt="Imagem" />
                  <button onClick={() => console.log(pokemonList)}></button>
                  <h1>Página principal</h1>
                  <ul>
                     {pokemonList.map((pokemon) => (
                        <li key={pokemon.name}>
                           <h3>{pokemon.name}</h3>
                        </li>
                     ))}
                  </ul>
               </div>
            </main>
         </ProtectedRoutes>
      </>
   );
}

//Acontecendo no back-end
// Static with Regeneration - vai refazer a requisição de tempos em tempos (como base no valor segundos apresentado no  revalidate)
export const getStaticProps: GetStaticProps = async () => {
   const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
   const { results: pokemonList } = await res.json();

   const revalidatingTime = 60 * 60 * 12;

   return {
      props: {
         pokemonList,
      },
      revalidate: revalidatingTime,
   };
};

// Static - fazer uma única requisição e cachear requisição para sempre
/*
export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
  const { results: pokemonList } = await res.json();

  return {
     props: {
        pokemonList,
     },
  };
}
*/

// Serverside - faz uma requisição a cada solicitação do usuário

/*
export async function getServerSideProps() {
   const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
   const { results: pokemonList } = await res.json();

   const revalidatingTime = 60 * 60 * 12;

   return {
      props: {
         pokemonList,
      },
   };
}
*/
