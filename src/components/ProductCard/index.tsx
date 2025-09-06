import { Products } from "@/interfaces/products"
import Image from "next/image"
import Badge from "../Badge"
import CustomButton from "../CustomButton"
import { CiHeart } from "react-icons/ci"
import { TbShoppingCartPlus } from "react-icons/tb"
import { FaStar } from "react-icons/fa"
import formatCurrency from "@/helpers/formatCurrency"

interface ProductCardProps {
    product: Products
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-lg bg-[#181c22] rounded-lg">
            <div className="relative aspect-square overflow-hidden">
                <Image src={product.image} alt={product.name} width={1920} height={1080}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute top-3 flex flex-col gap-2 left-3">
                    {product.isNew && (
                        <Badge>
                            Novo
                        </Badge>
                    )}

                    {product.discount && (
                        <Badge variant="destructive">
                            -{product.discount}%
                        </Badge>
                    )}
                </div>

                <CustomButton variant="ghost" className="absolute bg-[#181c22] top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[40px] h-[40px]">
                    <CiHeart size={20} />
                </CustomButton>

                <CustomButton variant="ghost" className="border-0 absolute bg-[#5593f7] bottom-3 left-1/2 transform -translate-x-1/2  opacity-0 group-hover:opacity-100 w-[150px] h-[40px] transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <TbShoppingCartPlus size={20} />
                    <span className="text-sm font-medium ml-1">Adicionar</span>
                </CustomButton>
            </div>
            <div className="p-4">
                <div className="space-y-2">
                    <Badge variant="outline">
                        {product.category}
                    </Badge>

                    <h3 className="font-semibold line-clamp-2 text-sm leading-tight">
                        {product.name}
                    </h3>

                    <div className="flex items-center gap-1">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={12}
                                        className={`${index < Math.floor(product.rating) ? "fill-yellow-500" : ""}`}
                                    />
                                )
                            })}
                        </div>
                        <span className="text-xs">
                            &nbsp;({product.reviews})&nbsp;
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#5593f7]">
                            {formatCurrency(product.price)}
                        </span>
                        {product.originalPrice && (
                            <span className="texr-sm line-through text-gray-500">
                            {formatCurrency(product.originalPrice)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}