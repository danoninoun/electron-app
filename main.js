const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  // Crea la ventana del navegador
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

  // Carga el archivo html
    win.loadFile('index.html')
}

// Cuando la app esté lista, crea la ventana
app.whenReady().then(() => {
    createWindow()
})