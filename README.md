# virket-challenge

Para ejecutar el programa:

1. Instalar dependencias:
npm install


2. Para ejecutar en el navegador (opcional):
ionic serve


3. Compilar para dispositivos: 
npm run build


4. Agregar las plataformas (por separado):

- iOS
npm install @capacitor/ios
npx cap init
npx cap add ios
npx cap sync
npx cap open ios


-ANDROID
npm install @capacitor/android
npx cap init
npx cap add android
npx cap sync
npx cap open android
