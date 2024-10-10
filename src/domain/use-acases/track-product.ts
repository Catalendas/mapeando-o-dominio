interface TrackProductUseCaseProps {
    productId: string
    stockId: string
}

export class TrackProductUseCase {

    async execute({
        productId,
        stockId
    }: TrackProductUseCaseProps) {
        
    }
}