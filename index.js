document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".counters");

    contadores.forEach(contador => {
      
        const objetivo = Number(contador.dataset.count);
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        
        async function aumentar() {
          for (let i = 0; i <= objetivo; i++) {
            await sleep(30); 
            contador.textContent = i
          }
        }
        aumentar();
        
    });
});


