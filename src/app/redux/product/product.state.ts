import { IProduct } from "src/app/interfaces/product.interface";
import { Product } from "../models/product.model";

export interface ItemsState{
    items: ReadonlyArray<Product>;
}