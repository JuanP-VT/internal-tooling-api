# Documentación de Servicios - Envíos API por Usuario

## Endpoint: `GET /envios/api/usuario/:idUsuario`

### Descripción
Obtiene el historial de envíos realizados por un usuario a través del canal API en los últimos 30 días.

### Parámetros

| Parámetro     | Tipo   | Descripción                         |
|---------------|--------|-------------------------------------|
| `idUsuario`   | Número | Identificador del usuario           |

### Respuesta
Retorna un arreglo de objetos con la información de cada envío hecho por el usuario a través del canal API.

#### Ejemplo de respuesta

```json
[
  {
    "id": 101,
    "idUsuario": 123,
    "referencia": "REQ-001",
    "fechaHora": "2025-06-29T10:12:00.000Z",
    "estado": "completado",
    "tipo": "digital",
    "destino": "Barcelona, España",
    "intentos": 1,
    "detalle": "Envío exitoso",
    "metadata": "{ \"clave\": \"valor\" }"
  },
  ...
]
```

## Endpoint: `GET /envios/api/resumen/:idUsuario`

### Descripción
Obtiene un resumen estadístico de los envíos realizados por un usuario a través del canal API en los últimos 30 días.

| Parámetro     | Tipo   | Descripción                         |
|---------------|--------|-------------------------------------|
| `idUsuario`   | Número | Identificador del usuario           |

### Respuesta
Retorna un objeto con totales y métricas agregadas sobre los envíos.

```json
[
{
  "total": 42,
  "completados": 38,
  "fallidos": 4,
  "promedioDiario": 1.4
}
  ...
]
```