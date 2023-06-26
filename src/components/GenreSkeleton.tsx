import { HStack, Image, Skeleton, SkeletonText } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from "../services/image-url"

const GenreSkeleton = () => {
    const { data } = useGenres();
    
    return (
        <Skeleton>
            <SkeletonText></SkeletonText>
        </Skeleton>
    )
}

export default GenreSkeleton