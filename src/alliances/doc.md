# Documentación de Servicios - Alianzas Web API

## Endpoint: `GET /alianzas/webapi`

### Descripción
Obtiene un listado de alianzas activas que cuentan con integración vía Web API.

### Respuesta
Retorna un arreglo de objetos que contienen la información de las alianza que tienen integración via Web API, incluyendo detalles de autenticación, métodos disponibles, y URL de documentación.

#### Ejemplo de respuesta

```json
[
  {
    "id": 1,
    "nombre": "Alianza A",
    "descripcion": "Descripción de la alianza A",
    "logoUrl": "https://ejemplo.com/logo.png",
    "fechaInicio": "2024-01-01",
    "fechaRenovacion": "2025-01-01",
    "endpointBase": "https://api.alianzaa.com",
    "metodosDisponibles": ["GET", "POST"],
    "autenticacionTipo": "Bearer Token",
    "documentacionUrl": "https://docs.alianzaa.com",
    "estado": "activo"
  },
  ...
]
