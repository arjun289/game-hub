import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedIMageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selctedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selctedGenreId }: Props) => {
  const { data } = useGenres();
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3} textAlign={"left"}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre: Genres) => (
          <ListItem key={genre.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedIMageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id == selctedGenreId ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
