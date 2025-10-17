import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, InfinityIcon, BadgeDollarSign, Zap, Wifi } from "lucide-react";

const ComparisonRow = ({ feature, icon: Icon, siempre, local, limited }: { feature: string, icon: React.ElementType, siempre: boolean, local: boolean, limited: boolean }) => (
    <div className="grid grid-cols-4 items-center py-4 border-b last:border-b-0">
        <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <span className="font-medium text-gray-700">{feature}</span>
        </div>
        <div className="flex justify-center">
            {siempre ? <CheckCircle className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
        </div>
        <div className="flex justify-center">
            {local ? <CheckCircle className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
        </div>
        <div className="flex justify-center">
            {limited ? <CheckCircle className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
        </div>
    </div>
);

export const WhyChooseUs = () => {
    const features = [
        { feature: "Datos ilimitados", icon: InfinityIcon, siempre: true, local: false, limited: false },
        { feature: "Sin tarifas ocultas", icon: BadgeDollarSign, siempre: true, local: false, limited: true },
        { feature: "Conexión instantánea", icon: Zap, siempre: true, local: false, limited: true },
        { feature: "Cobertura rápida y confiable", icon: Wifi, siempre: true, local: true, limited: false },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900">¿Por qué elegirnos?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Solo SiempreWIFI ofrece un servicio premium de calidad.
                    </p>
                </div>
                <Card className="bg-secondary">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-4 text-center font-bold text-gray-800 mb-4">
                            <div className="text-left">Característica</div>
                            <div>eSIM SiempreWIFI</div>
                            <div>Proveedor local</div>
                            <div>eSIM con datos limitados</div>
                        </div>
                        {features.map(f => <ComparisonRow key={f.feature} {...f} />)}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}