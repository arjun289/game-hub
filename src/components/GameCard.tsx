import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedIMageUrl from "../services/image-url";
import Emojis from "./Emojis";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="100%" borderRadius={10} overflow="hidden">
      <Image src={getCroppedIMageUrl(game.background_image)}></Image>{" "}
      <CardBody>
        {" "}
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emojis rating={game.rating_top}></Emojis>{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
