self.addEventListener('install', (e) => {
    console.log('instalando')
})

self.addEventListener('activate', () => {
    console.log('WS - activo')
})

self.addEventListener('fetch', () => {
    console.log('fetching...')
})


self.addEventListener("message", (e) => {
    console.log("2) SW - Mensage agarrado del Navegador")
    console.log("SW::recivio mensage--", e.data)
    e.source.postMessage("3) SW - segunda Respuesta")
})