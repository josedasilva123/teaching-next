import Head from "next/head";
import { useRouter } from "next/router";

export default function PokemonPage() {
   const router = useRouter();
   const { id } = router.query; // Igual a useParams do React Router Dom

   return (
      <>
         <Head>
            <title>Pokémon</title>
         </Head>
         <main>
            <h1>
                O id é: {id}
            </h1>
         </main>
      </>
   );
}
