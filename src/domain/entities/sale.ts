import { Entity } from "@/core/entities/entity";

interface SaleProps {
    productId: string
    quantity: number
    createdAt?: Date
}

export class Sale extends Entity<SaleProps> {

}