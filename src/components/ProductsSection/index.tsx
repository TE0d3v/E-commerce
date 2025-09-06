import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import { productsMocks } from "@/mocks/products";
import { Products } from "@/interfaces/products";
import ProductCard from "../ProductCard";
export default function ProductsSection() {
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        async function fetchProducts() {
            setProducts(productsMocks)
        }

        fetchProducts()
    }, [])
    return (
        <section>
            <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl font-bold">Produtos em destaque</h2>
                <CustomButton
                    variant="outline"
                    width="w-[100px]"
                >
                    Ver Todos
                </CustomButton>
            </div>
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 mb-6">
                {products.map((product) => {
                    return (
                        <ProductCard 
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </div>
        </section>
    )
}