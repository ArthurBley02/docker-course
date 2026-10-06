### CREACIÓN DE IMAGEN 
- SE CREARÁ UNA IMAGEN PARTIENDO DE UNA APP FUNCIONAL 
### PASOS
- CREACIÓN DEL ARCHIVO DOCKER FILE
- FROM name-image:tag  -> siempre se crea de una imagen previa 
- WORKDIR /app -> crea un directorio de trabajo dentro del contenedor
- COPY app.js package.json ./ -> copia los archivos de la carpeta local al contenedor (ultimo es el destino       referenciado al WORKDIR)
- RUN npm install -> instala las dependencias del proyecto
- CMD ["node", "app.js"] -> comando que se ejecuta al iniciar el contenedor 
- AÑADIR TEST AL DOCKER FILE 

## DOCKER IGNORE
- coloca los archivos no desedo para no copiar en el workdir