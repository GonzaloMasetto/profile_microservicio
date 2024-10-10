# profile_microservicio

## 1. Casos de uso del microservicio Profile

### Casos de uso principales:

1. **Crear un perfil de usuario**:
   - Los usuarios pueden crear un perfil que incluya datos personales como nombre, email, gustos e imagen de perfil.

2. **Leer un perfil de usuario**:
   - Permitir que los usuarios vean su perfil.

3. **Actualizar un perfil de usuario**:
   - Los usuarios pueden actualizar su información personal y gustos.

4. **Eliminar un perfil de usuario**:
   - Los usuarios pueden eliminar su perfil.

5. **Agregar Imagen de Perfil**:
   - Los usuarios pueden agregar o actualizar la imagen de perfil.

6. **Eliminar Imagen de Perfil**:
   - Los usuarios pueden eliminar la imagen de perfil.

7. **Ver Imagen de Perfil**:
   - Los usuarios pueden Ver la imagen de perfil actual mas grande.

8. **Agregar categorias de gustos**:
  
9. **Ver Productos de Preferencias**:
     

## 2. Esquema de la base de datos

Definamos cómo almacenar la información del perfil en MongoDB:

### Colección: `profiles`

| Campo          | Tipo         | Descripción                                          |
|----------------|--------------|------------------------------------------------------|
| `_id`          | `ObjectId`  | Identificador único del perfil (generado automáticamente por MongoDB). |
| `name`         | `String`    | Nombre del usuario.                                   |
| `email`        | `String`    | Email del usuario (debe ser único).                  |
| `preferences`  | `Array`     | Lista de gustos o preferencias del usuario.          |
| `profileImage` | `String`    | URL de la imagen de perfil del usuario.              |
| `createdAt`    | `Date`      | Fecha y hora de creación del perfil.                 |
| `updatedAt`    | `Date`      | Fecha y hora de la última actualización del perfil.  |
