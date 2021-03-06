
///////////////////////////////      M A P A      ////////////////////////////////////


├─ project-name/            dojo-chat

| ├─ client/
| |     ├─ css/
| |     ├─ docs/
| |     ├─ fonts/
| |     ├─ image/
| |     ├─ index.html           

| ├─ node_modules/          Autogenerado

| ├─ server/
| |     ├─ data/
| |     | ├─ model/                             *base de datos 
| |     | ├─ contenidodata.txt                            
| |     ├─ js/              main.js             *para funciones
| |     ├─ routes/          routes.js
| |     ├─ views/           templates/  loging.ejs  register.ejs
| |     ├─ server.js        server.js

| ├─ .gitignore
| ├─ objetivos.md
| ├─ package-lock.json
| ├─ package.json
| ├─ paso_a_paso.txt           
| ├─ readme.md


///////////////////////////////        F I C H A        /////////////////////////////////////


Colores en Tiempo real

ID                      26  
Proyecto                dojo-chat
                        
Objetivos Pendientes    6/7 ,detalles ver objetivos.md
                        
Estado                  Funcionalidad   completa
                        Comunicación con MYSQL No necesaria
                        Estilos completos

Bonus                   1)  Los mensajes deben quedar guardados en la base de datos.
                        2)  Debe guardar la fecha-hora de cada mensaje.

Para Avanzar/Terminar   avanzar en bonus
Repositorio             SI
GitHub                  https://github.com/Khereltrad/dojo-chat
En Plataforma           Si


--------------------------------------------------------------------------------

var flash = require('connect-flash');
