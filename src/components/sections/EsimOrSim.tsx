import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const EsimOrSim = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 rounded-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/10479/10479937.png" alt="eSIM icon" className="h-24 w-24" />
              <div className="mt-6 p-4 border-2 border-dashed rounded-lg">
                <div className="bg-gray-200 h-32 w-32 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">QR Code</span>
                </div>
              </div>
              <p className="mt-4 font-semibold text-gray-800">Escanea y Activa</p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900">
                eSIM o SIM física - <span className="text-orange-500">Tú eliges</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Nuestra tecnología eSIM te permite activar tu plan de datos sin necesidad de una tarjeta SIM física. Solo escanea el código QR y listo.
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-gray-800">Dispositivos compatibles con eSIM:</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>iPhone XS y posteriores</span></li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Samsung Galaxy S20 y posteriores</span></li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Google Pixel 3 y posteriores</span></li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Huawei P40 y posteriores</span></li>
                </ul>
              </div>
              <Button variant="outline" className="mt-8">
                Ver compatibilidad completa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};