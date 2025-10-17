import React from 'react';
import { CheckCircle, XCircle, Smartphone, Apple } from 'lucide-react'; // Removed Samsung and Google
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const compatibleDevices = [
  { brand: 'iPhone', models: ['XS', 'XS Max', 'XR', '11', '11 Pro', '11 Pro Max', 'SE (2020)', '12 mini', '12', '12 Pro', '12 Pro Max', '13 mini', '13', '13 Pro', '13 Pro Max', '14', '14 Plus', '14 Pro', '14 Pro Max', '15', '15 Plus', '15 Pro', '15 Pro Max'], icon: Apple },
  { brand: 'Samsung Galaxy', models: ['S20', 'S20+', 'S20 Ultra', 'S21', 'S21+', 'S21 Ultra', 'S22', 'S22+', 'S22 Ultra', 'S23', 'S23+', 'S23 Ultra', 'Note 20', 'Note 20 Ultra', 'Fold', 'Z Fold 2', 'Z Fold 3', 'Z Fold 4', 'Z Flip', 'Z Flip 3', 'Z Flip 4'], icon: Smartphone }, // Changed to Smartphone
  { brand: 'Google Pixel', models: ['3', '3 XL', '3a', '3a XL', '4', '4 XL', '4a', '5', '5a', '6', '6 Pro', '6a', '7', '7 Pro', '7a', '8', '8 Pro'], icon: Smartphone }, // Changed to Smartphone
  { brand: 'Huawei', models: ['P40', 'P40 Pro', 'Mate 40 Pro'], icon: Smartphone },
  { brand: 'Otros', models: ['Oppo Find X3 Pro', 'Oppo Reno 5A', 'Oppo Reno6 Pro 5G', 'Motorola Razr (2019)', 'Motorola Razr 5G', 'Sony Xperia 10 III Lite', 'Sony Xperia 5 IV', 'Xiaomi 12T Pro', 'Xiaomi 13', 'Xiaomi 13 Lite', 'Xiaomi 13 Pro'], icon: Smartphone },
];

export const Compatibility = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Compatibilidad eSIM</h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Verifica si tu dispositivo es compatible con la tecnología eSIM para disfrutar de una conexión global sin complicaciones.
      </p>

      <Card className="bg-primary/5 border-primary/20 shadow-lg mb-12">
        <CardContent className="p-6 flex items-center gap-4">
          <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-bold text-xl text-gray-800">¿Cómo saber si mi teléfono es compatible?</h3>
            <p className="text-gray-700 mt-2">
              La forma más sencilla es revisar la configuración de tu teléfono. Busca la opción "Añadir plan de datos" o "Gestor de SIM" en la sección de redes móviles. Si la encuentras, ¡es muy probable que sea compatible!
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {compatibleDevices.map((device, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <device.icon className="h-8 w-8 text-gray-700" />
              <CardTitle className="text-xl">{device.brand}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {device.models.map((model, modelIndex) => (
                  <li key={modelIndex}>{model}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-red-100/50 border-red-200 shadow-lg mt-12">
        <CardContent className="p-6 flex items-center gap-4">
          <XCircle className="h-8 w-8 text-red-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-xl text-red-800">Dispositivos NO compatibles</h3>
            <p className="text-red-700 mt-2">
              Ten en cuenta que algunos modelos de iPhone comprados en China continental, Hong Kong y Macao no son compatibles con eSIM. Además, la mayoría de los teléfonos Android más antiguos (anteriores a 2020) y los teléfonos bloqueados por operador pueden no ser compatibles.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Compatibility;