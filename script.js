// Base de datos simulada en memoria para análisis
const BaseDatosSimulada = {
    proyectos: [
        { id: 1, nombre: "Módulo Backend Laravel Core", estado: "Estable", optimizacion: "98%" },
        { id: 2, nombre: "API Restful Python / Django", estado: "Producción", optimizacion: "95%" },
        { id: 3, nombre: "Aplicación de Escritorio Multiplataforma", estado: "Fase de Pruebas", optimizacion: "90%" }
    ],
    servidores: [
        { nodo: "Servidor Principal Producción", os: "Ubuntu Server", status: "ONLINE", uptime: "99.9%" },
        { nodo: "Servidor de Base de Datos / SQL", os: "Debian Enterprise", status: "ONLINE", uptime: "99.8%" },
        { nodo: "Servidor de Respaldos Integrales", os: "Rocky Linux", status: "Mantenimiento", uptime: "95.0%" }
    ]
};

// Función del Analizador Interactiva
function ejecutarQuery(tipo) {
    const outputElement = document.getElementById("resultado-consola");
    outputElement.innerHTML = "Analizando estructuras de datos e indexando registros...\n";

    setTimeout(() => {
        if (tipo === 'PROYECTOS') {
            let resultado = "<strong>Query: SELECT * FROM aplicaciones WHERE criticidad = 'ALTA';</strong>\n\n";
            resultado += "ID  | NOMBRE PROYECTO                        | ESTADO        | OPTIMIZACIÓN\n";
            resultado += "-----------------------------------------------------------------------\n";
            BaseDatosSimulada.proyectos.forEach(p => {
                resultado += `${p.id.toString().padEnd(3)} | ${p.nombre.padEnd(36)} | ${p.estado.padEnd(13)} | ${p.optimizacion}\n`;
            });
            outputElement.innerHTML = resultado;
        } else if (tipo === 'SERVIDORES') {
            let resultado = "<strong>Query: SELECT nodo, os, status FROM infraestructura_red;</strong>\n\n";
            resultado += "NODO SERVIDOR                       | SISTEMA OPERATIVO | STATUS      | UPTIME\n";
            resultado += "------------------------------------------------------------------------------\n";
            BaseDatosSimulada.servidores.forEach(s => {
                resultado += `${s.nodo.padEnd(35)} | ${s.os.padEnd(17)} | ${s.status.padEnd(11)} | ${s.uptime}\n`;
            });
            outputElement.innerHTML = resultado;
        } else if (tipo === 'LIMPIAR') {
            outputElement.innerHTML = "Consola limpia. Esperando comandos del analista...";
        }
    }, 500); // Pequeño delay de 500ms para simular procesamiento
}