# Desafío Clases en ES6

Este proyecto es una solución para el desafío de clases en ES6, parte del curso de Desafío Latam - Talento Digital. El objetivo es demostrar el uso de clases en ES6 para gestionar clientes e impuestos.

## Descripción

El proyecto consiste en una implementación básica de una clase `Cliente` que gestiona la información del cliente y calcula impuestos basados en una entrada de datos.

## Estructura del Proyecto

- `src/Cliente.js`: Contiene la definición de la clase `Cliente`.
- `src/Impuestos.js`: Define la clase `Impuestos`.
- `src/main.js`: Archivo principal para la ejecución del script.
- `dist/`: Archivos traspilados por Babel.

## Instalación y Configuración

1. **Clona el Repositorio**

    ```bash
    git clone https://github.com/CaamiVLeiva/DE_ClasesenEs6.git
    cd DE_ClasesEnES6
    ```

2. **Instala las Dependencias**

    Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias necesarias con:

    ```bash
    npm install
    ```

3. **Configura Babel**

    Asegúrate de tener el archivo `.babelrc` configurado con el siguiente contenido para transpilar el código ES6:

    ```json
    {
      "presets": ["@babel/preset-env"]
    }
    ```

4. **Transpila el Código**

    Puedes transpilar el código ES6 a JavaScript compatible con la mayoría de los entornos mediante Babel:

    ```bash
    npx babel src --out-dir dist
    ```

5. **Ejecuta el Script**

    Ejecuta el archivo principal para ver el resultado:

    ```bash
    node dist/main.js
    ```

## Uso

1. **Definir Cliente e Impuestos**

    En `src/main.js`, puedes crear instancias de la clase `Cliente` y calcular impuestos. Asegúrate de pasar un objeto `impuesto` con `montoBrutoAnual` y `deducciones` a la instancia de `Cliente`.

    ```js
    import Cliente from './Cliente.js';

    const impuesto = {
        montoBrutoAnual: 50000,
        deducciones: 5000
    };

    const cliente = new Cliente('Juan Pérez', impuesto);
    console.log(`El impuesto a pagar es: ${cliente.calcularImpuesto()}`);
    ```



