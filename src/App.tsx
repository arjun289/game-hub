import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import "./App.css";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav " "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selctedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GamesGrid selectedGenre={selectedGenre}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
