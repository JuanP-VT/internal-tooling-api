# Documentación de Servicios - Destinos Frecuentes

## Endpoint: `GET /destinos/frecuentes/:usuarioId`

### Descripción
Obtiene los 10 destinos más frecuentes a los que un usuario ha enviado documentos, ordenados por cantidad de envíos. Incluye también información adicional como el tipo de documento más utilizado y la fecha del último envío a cada destino.

### Parámetros

| Parámetro     | Tipo   | Descripción                         |
|---------------|--------|-------------------------------------|
| `usuarioId`   | Número | Identificador del usuario en el sistema |

### Respuesta
Retorna un objeto con el ID del usuario consultado y un arreglo de hasta 10 destinos frecuentes.

#### Ejemplo de respuesta

```json
{
  "usuarioId": 123,
  "destinosFrecuentes": [
    {
      "ciudad": "Madrid",
      "pais": "España",
      "cantidadEnvios": 8,
      "ultimoEnvio": "2025-06-20T14:32:00.000Z",
      "tipoDocumentoMasUsado": "Factura"
    },
    {
      "ciudad": "Buenos Aires",
      "pais": "Argentina",
      "cantidadEnvios": 5,
      "ultimoEnvio": "2025-06-18T11:20:00.000Z",
      "tipoDocumentoMasUsado": "Contrato"
    },
    ...
  ]
}
