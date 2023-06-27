import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from "../services/image-url"
import GenreSkeleton from './GenreSkeleton';

interface Props {
    selectedGenre: Genre | null;
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <List>
            {isLoading && skeletons.map(genre => 
                <ListItem key={genre} paddingY='5px'>
                    <GenreSkeleton></GenreSkeleton>
                </ListItem>
            )}
            {data.map(genre => 
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : ''} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList