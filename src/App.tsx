import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import "./App.css";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selctedGenre={gameQuery.genre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </HStack>
          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
