import { styled } from "../../styled-system/jsx";

const Wrap = styled("div", {
  base: {
    backgroundColor: "surface.s1",
    padding: "lg",
    borderRadius: "lg",
    "& h1": {
      fontSize: "2xl",
      fontWeight: "bold",
      marginBottom: "lg",
    },
    "& h2": {
      fontSize: "xl",
      fontWeight: "bold",
      marginTop: "lg",
    },

    "& p": {
      marginTop: "lg",
    },
    "& a": {
      color: "primary.default",
    },
  },
});

export default function AboutPokemons() {
  return (
    <Wrap>
      <h1>Pokémon</h1>
      <p>
        <strong>Pokémon</strong> is a Japanese media franchise consisting of
        video games, television shows, trading cards, movies, toys, and more. It
        was created by Satoshi Tajiri and Ken Sugimori and launched by Nintendo,
        Game Freak, and Creatures. The franchise began with the release of
        Pokémon Red and Green in 1996.
      </p>

      <h2>Concept and Name</h2>
      <p>
        The name Pokémon is a romanized contraction of the Japanese brand{" "}
        <em>Pocket Monsters</em> (<strong>ポケットモンスター</strong>). The
        franchise revolves around fictional creatures called Pokémon, which
        humans known as Pokémon Trainers catch and train to battle each other
        for sport and companionship.
      </p>

      <h2>Video Games</h2>
      <p>
        The core of the franchise is its role-playing video game series,
        developed primarily by Game Freak. These games are typically released in
        generations, each introducing new Pokémon, mechanics, and regions. The
        games usually involve capturing wild Pokémon using Poké Balls, training
        them, and battling other trainers.
      </p>

      <h3>Main Series</h3>
      <p>
        As of 2024, there are nine generations of main series games, beginning
        with Pokémon Red and Green in Japan (Red and Blue internationally). Each
        game features a new region, new Pokémon, and new storylines.
      </p>

      <h3>Spin-offs</h3>
      <p>
        In addition to the main games, the franchise has spawned numerous
        spin-off games like Pokémon Mystery Dungeon, Pokémon Snap, and the
        mobile sensation <strong>Pokémon GO</strong>.
      </p>

      <h2>Trading Card Game</h2>
      <p>
        The Pokémon Trading Card Game (TCG) was launched in 1996 and has since
        become one of the most popular card games in the world. Players collect
        cards, build decks, and battle using strategies based on Pokémon types,
        attacks, and abilities.
      </p>

      <h2>Anime and Movies</h2>
      <p>
        The Pokémon animated series began in 1997 and follows the journey of Ash
        Ketchum and his partner Pikachu as they travel through various regions,
        catch Pokémon, and compete in tournaments. The anime has produced over
        1,000 episodes and dozens of movies.
      </p>

      <blockquote>
        “I wanna be the very best, like no one ever was.” – Pokémon Theme Song
      </blockquote>

      <h2>Merchandise and Popularity</h2>
      <p>
        Pokémon is one of the highest-grossing media franchises of all time. Its
        merchandise includes toys, books, clothing, and more. The franchise has
        left a deep mark on global pop culture and continues to attract both
        children and adults worldwide.
      </p>

      <h2>Global Impact</h2>
      <p>
        Pokémon has become a cultural icon, especially since the late 1990s. It
        has been referenced in TV shows, music, fashion, and internet culture.
        The release of Pokémon GO in 2016 brought the franchise to a new
        generation of fans, blending augmented reality with mobile gaming.
      </p>

      <h2>Legacy and Future</h2>
      <p>
        With over 1,000 unique Pokémon species and an ever-growing fan base, the
        franchise shows no sign of slowing down. New games, shows, and
        merchandise continue to be released, ensuring that Pokémon remains a
        cornerstone of modern entertainment.
      </p>

      <p>
        <em>
          This page is a simplified overview. For more detailed information,
          visit the full article on{" "}
          <a
            href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
          .
        </em>
      </p>
    </Wrap>
  );
}
