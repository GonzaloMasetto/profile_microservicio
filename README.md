# profile_microservicio

## 1. Casos de uso del microservicio Profile

### Casos de uso principales:

1. **Agregar/Editar preferencias del usuario**:
   - Precondición: el usuario debe estar autenticado.
   - Camino Normal:
        - El usuario accede a su perfil, donde puede seleccionar una o más categorías de productos que le interesen.
        - Estas preferencias se almacenan en su perfil en la base de datos.
        - El sistema utilizará las preferencias del usuario para mostrar productos relevantes en la plataforma, basándose en sus selecciones.
   - Caminos alternativos:
        - Si el usuario no selecciona ninguna categoría, no se filtran productos y se muestran todos por defecto.
        - Si las categorías seleccionadas no existen en el catálogo, devolver un error con el mensaje: "Categoría no válida".

2. **Agregar/Editar datos personales del usuario**:
   - Precondición: el usuario debe estar autenticado.
   - Camino Normal:
        - El usuario accede a su perfil, donde puede cargar o actualizar sus datos personales, como nombre, apellido, dirección de correo electrónico y teléfono.
        - Estos datos se almacenan en la base de datos.
   - Caminos alternativos:
        - Si el formato de algún dato es incorrecto (por ejemplo, email inválido), devolver un error con el mensaje: "Formato inválido".

3. **Agregar/Actualizar imagen de perfil**:
   - Precondición: el usuario debe estar autenticado.
   - Camino Normal:
        - El usuario accede a su perfil y sube una imagen en formato jpeg o png.
        - El sistema almacena la imagen en el microservicio de Image, devolviendo un imageId que se asocia al perfil del usuario.
   - Caminos alternativos:
        - Si el formato de la imagen no es válido (ni jpeg ni png), devolver un error con el mensaje: "Formato de imagen no soportado".

4. **Eliminar imagen de perfil**:
   - Precondición: el usuario debe estar autenticado.
   - Camino Normal:
        - El usuario accede a su perfil y elimina la imagen de su perfil.
        - El sistema elimina la imagen en el microservicio de Image, devolviendo un 204.

5. **Consulta de perfil del usuario**:
   - Precondición: el usuario debe estar autenticado.
   - Camino Normal:
        - El usuario consulta su perfil, y el sistema devuelve su información personal, preferencias y la imagen de perfil (si existe).
        - Si el perfil no está completo (por ejemplo, sin preferencias o imagen), devolver el perfil con los campos vacíos.
     

## 2. Esquema de la base de datos

Definamos cómo almacenar la información del perfil en MongoDB:

### Colección: `profiles`

| Campo          | Tipo         | Descripción                                          |
|----------------|--------------|------------------------------------------------------|
| `id`           | `ObjectId`  | Identificador único del perfil (generado automáticamente por MongoDB). |
| `userId`       | `Integer`   | relación con el usuario autenticado.                 |
| `name`         | `String`    | Nombre del usuario.                                  |
| `lastName`     | `String`    | Apellido del usuario.                                |
| `email`        | `String`    | Email del usuario (debe ser único).                  |
| `Phone`        | `Integer`   | Telefono del usuario.                                |
| `preferences`  | `Array`     | Lista de categorías seleccionadas                    |
| `imageId`      | `Integer`   | Relación con el microservicio de imágenes.           |
| `createdAt`    | `Date`      | Fecha y hora de creación del perfil.                 |
| `updatedAt`    | `Date`      | Fecha y hora de la última actualización del perfil.  |

