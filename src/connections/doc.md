# Documentación de Servicios - Conexiones

## Endpoint: `GET /conexiones/diarias`

### Descripción
Obtiene estadísticas de conexiones por día durante un período de tiempo determinado. Se puede filtrar por la cantidad de días recientes a considerar (por defecto, 7 días).

### Parámetros de consulta

| Parámetro | Tipo   | Descripción                                      |
|-----------|--------|--------------------------------------------------|
| `dias`    | Número | (Opcional) Número de días hacia atrás a consultar. Valor por defecto: `7` |

### Respuesta
Retorna un arreglo con estadísticas diarias de conexiones, incluyendo conteo total, conexiones exitosas/fallidas, dispositivo más usado, duración promedio y usuario más activo del día.

#### Ejemplo de respuesta

```json
[
  {
    "fecha": "2025-06-29",
    "totalConexiones": 124,
    "conexionesExitosas": 118,
    "conexionesFallidas": 6,
    "dispositivoMasUsado": "Chrome",
    "promedioDuracion": 4.2,
    "usuarioMasActivo": "Juan Pérez",
    "id_usuario_mas_activo": 42
  },
  ...
]
```

## Endpoint: `GET /conexiones/diarias`
### Descripción
Obtiene un resumen general de las conexiones del día actual, incluyendo el total de conexiones, la variación porcentual respecto al día anterior, y el dispositivo más utilizado.

### Respuesta
Retorna un objeto con tres métricas clave del día actual.

```json
[
{
  "totalHoy": 256,
  "variacionAyer": 12.5,
  "dispositivoPopular": "Android"
}
  ...
]
```