import { Grid, GridItem } from "@chakra-ui/layout";
import NavBar from "./components/NavBar";
import AsideL from "./components/AsideL";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Show } from "@chakra-ui/media-query";
import AsideR from "./components/AsideR";

function App() {
  return (
    <>
      <NavBar />
      <Grid
        templateAreas={{
          base: `'main'`,
          md: `'asideL main'`,
          lg: `'asideL main asideR'`,
        }}
        gridTemplateColumns={{ base: "1fr", md: "1fr 3fr", lg: "1fr 4fr 1fr" }}
      >
        <Show above="md">
          <GridItem area={"asideL"}>
            <AsideL />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Main />
        </GridItem>
        <Show above="lg">
          <GridItem area={"asideR"}>
            <AsideR />
          </GridItem>
        </Show>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
