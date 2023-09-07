import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav " "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          <GamesGrid></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
