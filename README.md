# ⚡ PokéVisor 6.2 - Dark Fix

![Electron](https://img.shields.io/badge/Electron-Desktop-blue?logo=electron)
![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-6.2-purple)

Aplicación de escritorio nativa para la gestión y visualización de datos Pokémon, portada desde web a escritorio utilizando **Electron**. Este proyecto integra la [PokéAPI](https://pokeapi.co/) en una interfaz moderna "Cyberpunk/Glassmorphism" optimizada para el rendimiento.

## ✨ Características Detalladas

El sistema **PokéVisor 6.2** incluye las siguientes funcionalidades avanzadas extraídas del código fuente:

* **🔍 Motor de Búsqueda Inteligente:**
    * Barra de búsqueda en tiempo real.
    * Sistema de **autocompletado y sugerencias** instantáneas.
    * Filtrado optimizado para acceso rápido.

* **🧬 Visualización de Datos Completa:**
    * **Stats Base:** Gráficos de barras dinámicos para HP, Ataque, Defensa, Velocidad, etc.
    * **Tipos y Debilidades:** Cálculo automático de relaciones de daño (x2, x4, x0.5, etc.).
    * **Cadena Evolutiva:** Visualización renderizada de todas las evoluciones del Pokémon seleccionado.

* **💎 Modos de Visualización:**
    * **Modo Shiny:** Botón dedicado para alternar instantáneamente entre sprites normales y variocolor (shiny).
    * **Sprites Animados:** Soporte para GIFs de alta calidad (Showdown) y arte oficial.

* **🌍 Navegación Multi-Generación:**
    * Sistema de pestañas para navegar desde la **Gen 1 (Kanto)** hasta la **Gen 9 (Paldea)**.
    * Incluye pestañas para formas especiales (Mega, Giga, Alola, Galar, Hisui).

* **🎨 UI/UX "Dark Fix":**
    * Diseño oscuro con paleta de colores neón (`#00d2ff`, `#3a7bd5`, `#a06cd5`).
    * Efectos *Glassmorphism* (transparencias y desenfoques).
    * Tipografías futuristas (**Orbitron** y **Rajdhani**).

## 🚀 Instalación y Despliegue

Instrucciones para desplegar el proyecto en un entorno local:

### 1. Requisitos Previos
* [Node.js](https://nodejs.org/) (v14 o superior recomendado).
* [Git](https://git-scm.com/).

### 2. Clonación del Repositorio
```bash
git clone [https://github.com/tu-usuario/electron-pokevisor.git](https://github.com/tu-usuario/electron-pokevisor.git)
cd electron-pokevisor

### 3. Instalación de Dependencias
El proyecto utiliza electron como dependencia de desarrollo.
```bash
npm install

### 4. Ejecución (Entorno de Desarrollo)
Para lanzar la aplicación de escritorio:
```bash
npm start
