import { productsReviewsMocks } from "@/mocks/productsreviews";

interface getProductReviewsMockProps {
    id: number;
}

export default function getProductReviewsMock({ id }: getProductReviewsMockProps){
    return productsReviewsMocks.find((product) => product.id === id)?.reviews || []
}