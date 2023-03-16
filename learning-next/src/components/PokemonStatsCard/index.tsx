export interface IStat{
  base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
}

interface IPokemonStatsCardProps{
    stat: IStat;
}

const PokemonStatsCard = ({stat}: IPokemonStatsCardProps) => {
  return (
    <li>
      <h3>{stat.stat.name}</h3>
      <p>{stat.base_stat}</p>
      <p>{stat.effort}</p>
    </li>
  )
}

export default PokemonStatsCard