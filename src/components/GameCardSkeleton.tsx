import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return(
        <Card width={{sm: '300px', md: '300px', lg: '300px', xl: '250px'}} borderRadius={10} overflow='hidden'>
            <Skeleton height='200px'></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton