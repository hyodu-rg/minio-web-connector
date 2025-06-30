# Conector Web a MinIO (PoC)

Este proyecto es una prueba de concepto (PoC) para conectarse a un servicio privado de **MinIO** desde una aplicación web simple. Permite a los usuarios ingresar su `Endpoint`, `Access Key` y `Secret Key` y, si la conexión es exitosa, muestra los buckets disponibles.

---

## Características

- Ingreso manual de credenciales MinIO
- Conexión mediante el SDK oficial de MinIO
- Visualización de buckets disponibles
- Manejo básico de errores (credenciales inválidas, problemas de certificado, etc.)

---

## Requisitos

- npm install

---

## Instalar dependencias

- Node.js 18 o superior
- Git (si clonas el repositorio)
- Acceso a un servidor MinIO funcional (puerto API habilitado)

---

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/minio-web-connector.git
cd minio-web-connector

## Ejecucion

- node server.js
- http://localhost:3000
