import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"

export default function ProductPage() {

    const router = useRouter();
    const { id } = router.query;
    return (
        <PageWrapper showHeader={true}>
            <Breadcrumb 
            items={[
                {title: "Smartphone"},
                {title: "Iphone 15 Pro Max"}
            ]}/>
        </PageWrapper>
    )
}