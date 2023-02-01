(() => {

    // arreglo de temperaturas celsius
    //const arrayOfNums = [33.6, 12.34];
    const celsiusDegrees = [33.6, 12.34];
    // Dirección ip del servidor
    //const ip = '123.123.123.123';
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    //const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    
    // Listado de emails de los usuarios
    //const emails = people.map( u => u.email );
    const usersEmails = users.map( user => user.email );
    // Variables booleanas de un video juego
    //const jump = false;
    //const run = true;
    //const noTieneItems = true;
    //const loading = false;
   
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    //const start = new Date().getTime();
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    //const end = new Date().getTime() - start;
    const timeAtTheEnd = new Date().getTime() - initialTime;

    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( u: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( s: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();




