(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        switch (fruit) {
            case 'manzana':
                return true
                break;
            case 'cereza':                
                return true;
                break;
            case 'ciruela':
                return true;
                break;
            default:
                return false;
        }
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {
        switch (color) {
            case 'red':
                return ['manzana','fresa'];
                break;
            case 'yellow':                
            return ['piña','banana'];
                break;
            case 'purple':
                return ['moras','uvas']
                break;
            default:
                throw Error('the color must be: red, yellow, purple');
        }
    }

    // Simplificar esta función
    //let isFirstStepWorking  = true;
    //let isSecondStepWorking = true;
    //let isThirdStepWorking  = true;
    //let isFourthStepWorking = true;
    //const stepsStatus = [true,false,true,true];
    function workingSteps() {
       if(!isStepWorking(1)) return 'First step broken.';
       if(!isStepWorking(2)) return 'Second step broken.';
       if(!isStepWorking(3 )) return 'Third step broken.';
       return !isStepWorking(4) ? 'Fourth step broken.' :  'Working properly!';
       }
    
    function isStepWorking(step : number){
        switch (step) {
            case 1:
                return true;
                break;
            case 2:
                return true;
                break;
            case 3:
                return false;
                break;
            case 4:
                return true;
                break;                
            default:
                return false;
                break;
        }
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




