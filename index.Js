// Create an Array of mock Data
//Cette partie du code crée un tableau d'objets data qui contient des informations sur différents articles, tels que le titre, le sous-titre, l'auteur, le temps de lecture, la date de publication, et le nombre de claps (initialement à 0). Chaque objet représente un post et contient un id unique.
const data = [
  {
    id: 1,
    title: "My 2024 MacBook Setup for Software Development",
    subtitle:
      "Here’s an insight into my setup, workflow and tools to build software",
    UserName: "Anthony Gordon",
    time: "4 min read ",
    date: "Jun 14, 2023",
    claps: 0,
  },
  {
    id: 2,
    title: "Git + Bit: Code Meets Components",
    subtitle:
      "Keeping Git Branches and Bit lanes in sync for seamless development",
    UserName: "Ashan Fernando",
    time: "6 min read ",
    date: "Aug 29, 2024",
    claps: 0,
  },
  {
    id: 3,
    title: " Average Manaager Vs Great Manager",
    subtitle: "Explained in 10 sketches",
    UserName: "Ashan Fernando",
    time: "45 min read ",
    date: "Mai 19, 2024",
    claps: 0,
  },
  {
    id: 4,
    title: " Comment J'ai commencer l'entreprenariat",
    subtitle: "Je vendais les yaourt avec beignets.",
    UserName: "Ulrich Fonkwa",
    time: "45 min read ",
    date: "July 08, 2024",
    claps: 0,
  },
  {
    id: 5,
    title: " How I Gave My life to christ",
    subtitle: "the life changing experience",
    UserName: "Merveille Mbeupeu",
    time: "3 min read ",
    date: "Jan 11, 2024",
    claps: 0,
  },
];

// function useState(initialValue) {
//   const currentIndex = hooksPointer; // index courant
//   if (!hooks[currentIndex]) {
//     hooks[currentIndex] = initialValue;
//   }

//   const setState = (newState) => {
//     if (typeof newState === "function") {
//       const result = newState(hooks[currentIndex]);
//       hooks[currentIndex] = result;
//       // hooks[currentIndex] = newState(hooks[currentIndex]);
//     } else {
//       hooks[currentIndex] = newState;
//     }
//     render();
//   };

//   hooksPointer++;

//   return [hooks[currentIndex], setState];
// }

// Create App and Post
// lq fonction app permet d afficher un post;

function App() {
  return `<div class="container">
      ${data.map((item) => Post(item))}; 
   </div>`;
}

function NewApp() {
  const [page, setPage] = root1.useState(0);
  const handlerClick = () => {
    // setPage({ ...post, claps: post.claps + 1 });
    setPage((prevState) => {
      return prevState + 1 ;
    });
  };
   root1.registerEventHandler({
    id: "change-page",
    type:"click",
    handlerClick
   })


  return `<div class="container">
     <div class="title">this is the students of university of Dschang</div>
       <div class="subtitle">this training is one of my best opportunities at the University of Dschang</div>
         <button id="change-page"> this is the new day</button>
        <div>this is my new page ${page}</div>

       
  </div>
  `;
}

function Post(props) {
  const [post, setpost] = root.useState(props);
  const handlerClick = () => {
    setpost({ ...post, claps: post.claps + 1 });
    setpost((prevState) => {
      return { ...prevState, claps: prevState.claps + 1 };
    });
  };

  const events = {
    id: `clap-button-${props.id}`,
    type: "click",
    handlerClick,
  };
  root.registerEventHandler(events);

  return `
     
          <div class name="post-header">
              <div class name="title">${props.title}</div>
              <div class name="subtitle">${props.subtitle}</div>
              <div class name="author-card">
                  <div class name="avatar">
                      <img src="assets/images/profile-picture.jpg"  height="44px"  width="44px"  alt="" />
                  </div>
                  <div class name="column">
                     <div class name="row">
                         <div>${props.UserName}</div>
                         <div>.</div>
                         <div class name="follow-button " > Follow</div>
                     </div> 
  
                     <div class name="row secondary">
                         <div>${props.time}</div>
                         <div>.</div>
                         <div>${props.date}</div>
                     </div> 
                  
                  </div>
                  
              </div>
              <div class name="actions">
                  <div class name="claps">
                      <div class name="clap-button" id="clap-button-${props.id}" >
                          <img class name="avatar" src="assets/icons/hands-clapping-thin.svg" height="44px"  width="44px" alt="" />
                      </div>
                      <div class name="clap-counter" id="clap-counter-${props.id}">${post.claps}</div>
                      
                  </div>
              </div>
          </div>
      
    `;
}

function createRoot(container) {
  const rootContainer = container;
  let rootNode;

  const hooks = [];
  let hooksPointer = 0;
  let evenHandlers = [];

  function useState(initialValue) {
    const currentIndex = hooksPointer; // index courant
    if (!hooks[currentIndex]) {
      hooks[currentIndex] = initialValue;
    }

    const setState = (newState) => {
      if (typeof newState === "function") {
        const result = newState(hooks[currentIndex]);
        hooks[currentIndex] = result;
        // hooks[currentIndex] = newState(hooks[currentIndex]);
      } else {
        hooks[currentIndex] = newState;
      }
      render();
    };

    hooksPointer++;

    return [hooks[currentIndex], setState];
  }

  const registerEventHandler = (evenHandler) => {
    evenHandlers.push(evenHandler);
  };
  // modified render function to reset
  function render(node) {
    hooksPointer = 0;
    evenHandlers = [];
    if (!rootNode && node) {
      rootNode = node;
    }
    // en javascript on appel ca "conditional chaaining" (rootContainer.innerHTML = rootNote ?.(); )
    // rootContainer.innerHTML = rootNote ?.();
    rootContainer.innerHTML = rootNode();
    evenHandlers.forEach((item) => {
      document
        .getElementById(item.id)
        .addEventListener(item.type, item.handlerClick);
    });
  }
  
  return { useState, registerEventHandler, render };
}
const root1 =createRoot(document.getElementById("blog"));
root1.render(NewApp);
const root = createRoot(document.getElementById("app"));
root.render(App);

// Use map to print all posts of the Array using the render function.

// create A.state.property
// Change the add function thereby changing their Usage.
