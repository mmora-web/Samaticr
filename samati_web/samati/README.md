# Samati — Sitio Web Corporativo

Sitio web corporativo para **Samati**, empresa de soluciones financieras. Desarrollado con HTML5, CSS3 y JavaScript vanilla.

## Estructura del proyecto

```
samati/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos y sistema de diseño
├── js/
│   └── script.js       # Interactividad y validaciones
├── images/
│   └── logo.png        # Logo oficial de Samati
└── README.md
```

## Cómo ejecutar

Abre `index.html` directamente en tu navegador. No requiere servidor ni instalación de dependencias.

```bash
# Opcional: servir con un servidor local
npx serve .
```

## Identidad visual

### Paleta de colores (derivada del logo)

| Variable            | Color     | Uso                          |
|---------------------|-----------|------------------------------|
| `--color-primary`   | `#3A506B` | Textos principales, títulos  |
| `--color-accent`    | `#72C1E5` | Botones, acentos, hover      |
| `--color-accent-dark`| `#4A9BC4`| Hover en botones             |
| `--color-bg-dark`   | `#0D1B2A` | Fondos oscuros (hero, etc.)  |
| `--color-bg-light`  | `#F8FAFC` | Fondos claros                |

### Tipografía

- **Poppins** — sans-serif geométrica, moderna y legible en títulos y cuerpo de texto

## Secciones

1. **Inicio** — Hero, presentación de la empresa y beneficios
2. **Servicios** — Tarjetas con soluciones financieras (contenido editable)
3. **Contacto** — Formulario con validación JavaScript e información de contacto

## Contenido editable

Los textos marcados con `<!-- CONTENIDO EDITABLE -->` en `index.html` son provisionales y deben actualizarse con la información real de Samati:

- Datos de contacto (correo, teléfono, dirección)
- Redes sociales
- Descripciones de servicios
- Información del equipo

## Conectar backend al formulario

El formulario simula el envío en `js/script.js`. Para conectarlo a un servicio real, reemplaza la función `simulateFormSubmit()` con una llamada a tu API:

```javascript
fetch('https://tu-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

Alternativas: EmailJS, Formspree, Resend, o un endpoint propio.

## Características técnicas

- HTML5 semántico
- CSS Variables, Flexbox y Grid
- Diseño responsive (mobile-first)
- Menú hamburguesa en móvil
- Scroll suave entre secciones
- Navbar sticky con efecto al scroll
- Validación de formulario en JavaScript
- Accesibilidad: contraste, focus visible, etiquetas ARIA

## Licencia

© Samati. Todos los derechos reservados.
