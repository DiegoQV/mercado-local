# Estándares de Desarrollo: Mercado Digital Local (MVP)

Este documento establece las reglas de oro para la construcción del MVP de **Mercado Digital Local**. Todos los agentes autónomos de Antigravity deben seguir estas pautas rigurosamente.

## 1. Filosofía de Diseño: "Mobile-First App Experience"

El 95% de nuestros usuarios accederán desde dispositivos móviles. La interfaz debe sentirse como una aplicación nativa, no como un sitio web tradicional.

- **Mobile-First Real**: Se diseña para móvil y se adapta opcionalmente a desktop.
- **Micro-interacciones**: Transiciones suaves, feedback táctil visual (hovers, scales en botones).
- **Accesibilidad Táctil**: Botones de al menos 44x44px. Evitar elementos de click demasiado pequeños.
- **Espaciado Generoso**: El "aire" entre elementos es clave para una interfaz limpia y moderna.

## 2. Tipografía y Colores

### Tipografía
- **Fuente Principal**: `Outfit` (vía Google Fonts) o `Inter` como fallback.
- **Encabezados**: Semibold para títulos de sección, Medium para subtítulos.
- **Cuerpo**: Regular (14px - 16px para móvil).

### Paleta de Colores (Glassmorphism & Vibrant)
- **Primary**: Indigo/Violet moderno (`#6366f1`).
- **Surface**: Blanco puro o gris ultra claro (`#f9fafb`) con efectos de desenfoque (backdrop-blur) en modales y menús.
- **Accent**: Colores vibrantes según categoría (ej. Verde para Abarrotes, Naranja para Repuestos).
- **Dark Mode**: Soporte nativo desde el inicio usando clases `dark:` de Tailwind.

## 3. Arquitectura del Proyecto

Usaremos una estructura basada en **Features** para escalar fácilmente.

```
/src
  /app           # Rutas (App Router)
  /components    # Componentes globales UI (Atoms/Molecules)
  /features      # Lógica de negocio (Abarrotes, Repuestos, Ropa, Tech)
    /product-list
    /cart
    /checkout
  /hooks         # Custom hooks
  /lib           # Clientes API, Utils (clsx, tailwind-merge)
  /services      # Llamadas a servicios externos
  /store         # Estado global (si fuera necesario)
  /types         # Definiciones TypeScript
```

## 4. Buenas Prácticas de Código

- **TypeScript Estricto**: Nada de `any`. Definir interfaces precisas para productos y categorías.
- **Tailwind CSS**: Uso de la utilidad `cn()` (clsx + tailwind-merge) para manejar clases dinámicas.
- **Componentes Pequeños**: Si un componente supera las 100 líneas, debe ser refactorizado.
- **SEO & Performance**: Uso correcto de componentes de imagen (`next/image`) y metadatos dinámicos.

## 5. Reglas para Agentes (Antigravity Rules)

1. **No Placeholders**: Generar imágenes reales de productos o placeholders visualmente atractivos vía `generate_image`.
2. **Interactividad**: Todo botón debe tener estados `:hover` y `:active` definidos.
3. **Optimización**: Siempre verificar que los componentes funcionen perfectamente en una pantalla de 375px (iPhone SE).
