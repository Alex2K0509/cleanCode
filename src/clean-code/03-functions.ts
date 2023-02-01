(() => {

    // función para obtener información de una película por Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }
    function getMovieById( Id: string ) {
        console.log({ Id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }
    function createMovie(
        title: string, 
        description: string, 
        rating: number, 
        cast: string[] ) {
        console.log({ title, description, rating, cast });
    }
    // Crea un nuevo actor
    
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }
    
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if(!existActor(fullName)) return false;

        console.log('Crear actor');
        return true;        

    }
     function existActor(fullName : string){
        if ( fullName === 'fernando' ){ 
            return false
         }
         return true ;
     }

     //continuacion
     const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    const getCorrectPaymentAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result: number;

        if (isDead) return 1500;
        if (isSeparated) return 2500;
        if (isRetired) return 3000;

        return 4000;
    }


})();




