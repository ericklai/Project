window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
    //   document.getElementById("main-content").style.display = "block";
    }, 3000);
  });


let completedEl = document.querySelector('#completed');
let ongoingEl = document.querySelector('#ongoing');
let progressEl = document.querySelector('#progress');

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

  
let joinButtons = document.querySelectorAll(".join");

joinButtons.forEach(button => {
  button.addEventListener("click", () => {
    const jobCard = button.closest(".job");
    
    const jobTitle = jobCard.querySelector(".job-title").textContent;

    localStorage.setItem("joinedJob", jobTitle);

    button.textContent = "Joined";
    button.style.opacity = "0.5";
    button.disabled = true;
    button.style.cursor = "not-allowed";

    
    alert(" Congratulations! You joined: " + jobTitle);

     window.location.href = "profile.html";
  });
});


 const jobLevel = localStorage.getItem("joinedJob");
  if (jobLevel) {
    document.querySelector(".job-level").textContent = jobLevel;
  } else {
    document.querySelector("job-level").textContent = "None";
  }


