import { Product } from "../entities/product";

export interface ProductReposiotry {
    // create(data: Product): Promise<Product>
    findProduct(productId: string, stockId: string): Promise<Product>
}