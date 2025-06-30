# Documentación de Servicios - Reviews

## Endpoint: `GET /reviews`

### Descripción
Obtiene una lista de reviews o calificaciones hechas por los usuarios, incluyendo información adicional del usuario que la emitió y la fecha de su última documentación registrada.

### Respuesta
Retorna un arreglo de objetos con información sobre cada review, combinando datos de calificación, identidad del usuario, y su última actividad documental.

#### Ejemplo de respuesta

```json
[
  {
    "id": 1,
    "idusuario": 123,
    "calificacion": 4.8,
    "comentario": "Excelente servicio.",
    "fecha": "2025-06-29T09:15:00.000Z",
    "nombrecliente": "Empresa XYZ",
    "nombreUsuario": "María López",
    "pathFoto": "https://cdn.example.com/users/123.jpg",
    "correoContacto": "maria@example.com",
    "ultimaDocumentacion": "2025-06-28T16:47:00.000Z"
  },
  ...
]
