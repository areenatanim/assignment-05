// for all item
// https://phi-lab-server.vercel.app/api/v1/lab/issues

const lodeData = () => {
        const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
        fetch(url)
                .then(rest => rest.json())
                .then(data => displayCard(data.data))

}
const displayCard = (cards) => {
        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = " ";
        cards.forEach(card => {
                const div = document.createElement("div");
                div.innerHTML = `
                            <div class="card bg-base-100  shadow-md border-t-[#2ba96e] border-t-[5px]">
               <div class="card-body">
                  <div class="flex justify-between items-center">
                     <img src="./assets/Open-Status.png " alt="">
                     <button class="btn btn-soft btn-error">HIGH</button>
                  </div>
                  <h2 class="card-title font-semibold">Card title!</h2>
                  <p class="text-[#65758b] font-normal text=[12px]">A card component has a figure, a body part, and
                     inside body there are title and actions parts</p>
                  <div class="card-actions ">
                     <button class="btn btn-soft border-[#fde68a]   border-[2px] btn-warning rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                        </svg>
                        Bug</button>
                     <button class="btn btn-soft border-[2px] border-[#fdcacb] btn-error rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        HELP WANTED</button>

                  </div>
               </div>
               <div class="divider "></div>
               <div class="px-4 py-2">
                  <p class="text-[#65758b] font-normal text=[12px]">
                     #1 by john_doe
                  </p>
                  <p class="text-[#65758b] font-normal text=[12px]">1/15/2024</p>
               </div>
            </div>
         </div>
                `
                cardContainer.appendChild(div)

        });
}
lodeData()