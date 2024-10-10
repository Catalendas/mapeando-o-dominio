import { Entity } from "@/core/entities/entity";

interface PurchaseProps {
    productId: string
    quantity: number
    createdAt?: Date
}

export class Purchase extends Entity<PurchaseProps> {

}