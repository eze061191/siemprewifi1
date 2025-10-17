import { ToggleLeft, ShieldCheck } from 'lucide-react';

const PaymentIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="h-8 w-14 bg-white border border-gray-200 rounded-md flex items-center justify-center text-xs shadow-sm">
    {children}
  </div>
);

export const PaymentInfo = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
          <ToggleLeft className="h-6 w-6 text-primary flex-shrink-0" />
          <p className="text-sm text-gray-700">
            Instala tu eSIM antes o durante tu viaje. Tu plan comenzará una vez que llegues a tu destino y actives tu eSIM.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white py-2 px-4 rounded-full border border-gray-200 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Pago Seguro</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <PaymentIcon>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            </PaymentIcon>
            <PaymentIcon>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-5" />
            </PaymentIcon>
            <PaymentIcon>
               <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-5" />
            </PaymentIcon>
            <PaymentIcon>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-5" />
            </PaymentIcon>
            <PaymentIcon>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
            </PaymentIcon>
          </div>
        </div>
      </div>
    </section>
  );
};