import { List, ListItem, HStack, Image, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedIMageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selctedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre, selctedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedIMageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={genre.id == selctedGenre?.id ? "bold" : "normal"}
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
  );
};

export default GenreList;
