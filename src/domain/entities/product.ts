import { Entity } from "@/core/entities/entity";

interface ProductProps {
    infos: string
    color: string
    status: string
    minQuantityStock: number
    stockid: string
}

export class Product extends Entity<ProductProps> {

}