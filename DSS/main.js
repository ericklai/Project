window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
    //   document.getElementById("main-content").style.display = "block";
    }, 3000);
  });


  let completedEl = document.getElementById('completed');
let ongoingEl = document.getElementById('ongoing');
let progressEl = document.getElementById('progress');

document.querySelectorAll(".download-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.style.opacity = "0.5";
    button.disabled = true;

    let completed = parseInt(completedEl.textContent);
    let ongoing = parseInt(ongoingEl.textContent);

    completed += 1;
    ongoing = Math.max(ongoing - 1, 0); 
    let total = completed + ongoing;
    let progress = total === 0 ? 100 : Math.round((completed / total) * 100);

    completedEl.textContent = completed;
    ongoingEl.textContent = ongoing;
    progressEl.textContent = `${progress}%`;
  });
});

  
