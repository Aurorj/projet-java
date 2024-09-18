//  les co,,entqire ci apres expliaue hglobale,ent toute cette page de code
//  on veut encapsuler lmes ele,ents ici; on veut ; usestate est une fonction et a l'interieure ce cette fonction on cree une fonction et on declare cette fonction; javascript garde les allocation des fonctions ; on cree createroot on fini son execution et on utilise son resultat pour;
// on appele lers fer,eture en javascript l'utilisation des fonction aui n'ont pas ete declacrer
// on ddeclare une fonction dans une fonction; on aura donc une fonction appeler ,aster fonction ; et aopres avoir faire cela on retourne la fonction ,aster:
// c'est ce qu'on apelle en javascript the "closures" "lezs fermetutres"
// et donc ici usestate,registreevenhandler,render;sont appeler ici des fermeture puisque meme si les variable ne sont plus declarer chaque fois,ils sont garder quelaue part
    function createRoot(container){
        const rootContainer = container;
        let rootNote;
        const hooks = [];
        let hooksPointer = 0;
        let evenHandler = [];

        function useState(initialValue) {
            const currentIndex = hooksPointer; // index courant
            if (!hooks[currentIndex]) {
              hooks[currentIndex] = initialValue;
            }

    }
    const registerEventHandler = (evenHandler) =>{
        evenHandler.push(evenHandler);
    };
    // function NewApp(){
    //     const [thumbsUp,setthumbUP] 
    //     id: `clap-button-${props.id}`,
    //     type: "click",
    //     handlerClick,
    //     return`
    //     <div class="title"> this is my first formation in university of dschang`
    // }
    const render = (node) =>{
        hooksPointer = 0;
        evenHandler = [];
        if (!rootNode && node){
            rootNode =node;
        }
        // en javascript on appel ca "conditional chaaining" (rootContainer.innerHTML = rootNote ?.(); )
        rootContainer.innerHTML = rootNote ?.(); 
        registerEventHandler = [];
        document.getElementById("app").innerHTML = App();
        evenHandler.forEach((item) => {
          document
            .getElementById(item.id)
            .addEventListener(item.type, item.handlerClick);
        });
    }
  
    return{useState ,registerEventHandler};
}
const root = createRoot(document.getElementById("app"))
root.useState();
root.registerEventHandler();
root.render(newApp)

render();

