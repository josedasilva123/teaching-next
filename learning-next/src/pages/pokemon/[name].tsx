/* eslint-disable @next/next/no-img-element */
import PokemonStatsCard, { IStat } from "@/components/PokemonStatsCard";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../services/api";
import styles from "@/styles/pages/pokemon.module.scss";

interface IPokemonPageProps {
   pokemon: IPokemon; //tipar futuramente
}

interface IPokemon {
   id: number;
   name: string;
   stats: IStat[];
   sprites: {
      front_default: string;
   };
}

export default function PokemonPage({ pokemon }: IPokemonPageProps) {
   const router = useRouter();
   const { name } = router.query; // Igual a useParams do React Router Dom

   return (
      <>
         <Head>
            <title>Pokémon</title>
         </Head>
         <main>
            <div className={styles.container}>
               <Link href="/">Voltar</Link>
               <h1>
                  #{pokemon.id} - {pokemon.name}
               </h1>
               <img src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
               {pokemon.stats.map((stat, index) => (
                  <PokemonStatsCard key={index} stat={stat} />
               ))}
               <button className="button-primary">Teste</button>
               <button className="button-secondary">Teste</button>
               <button className="button-white">Teste</button>
            </div>
         </main>
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { name } = context.query; // useParams do back-end

   const { data: pokemon } = await api.get(`pokemon/${name}`);

   return {
      props: {
         pokemon,
      },
   };
};
