import AsideFilters from "@/components/AsideFilters";
import CustomInput from "@/components/Custominput";
import { PageWrapper } from "@/components/PageWrapper";
import ProductsSection from "@/components/ProductsSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IoSearch } from "react-icons/io5";

export default function ProductsPage() {
    return (
        <PageWrapper.Root>
            <PageWrapper.Header />
            <PageWrapper.Content title="Todos os Produtos" subtitle="8 produtos encontrados">
                <div className="mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <CustomInput
                            type="text"
                            placeholder="Buscar Produtos..."
                            icon={<IoSearch />}
                        />

                        <Select>
                            <SelectTrigger className="w-48">
                                <SelectValue placeholder="Ordenar Por" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Nome A-Z</SelectItem>
                                <SelectItem value="price-low">Menor Preço</SelectItem>
                                <SelectItem value="price-high">Maior Preço</SelectItem>
                                <SelectItem value="Rating">Melhor Avaliação</SelectItem>
                                <SelectItem value="Reviews">Mais Avaliados</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex gap-8">
                    <AsideFilters />
                    <ProductsSection />
                </div>

            </PageWrapper.Content>
        </PageWrapper.Root>
    )
}

