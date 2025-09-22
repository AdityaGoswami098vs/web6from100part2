const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if (bar) {
    bar.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
};

// Select all filter buttons and job items
const filterButtons = document.querySelectorAll(".job-id li");
const jobItems = document.querySelectorAll(".jList");

// Loop through each filter button
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Step 1: Remove "active" class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Step 2: Add "active" class to the clicked button
        this.classList.add("active");

        // Step 3: Get the category (data-target) of clicked button
        const category = this.getAttribute("data-target");

        // Step 4: Show/Hide job items based on category
        jobItems.forEach(function (job) {
            const itemCategory = job.getAttribute("data-item");

            // Hide all first
            job.classList.add("delete");

            // Show if matches or if "all" selected
            if (category === "all" || category === itemCategory) {
                job.classList.remove("delete");
            }
        });
    });
});

// Job Filter JS Code, Written Extremely well by Copilot/GPT-4o

// Select the search bar and job container
const searchBar = document.getElementById('searchBar');
const jobContainer = document.querySelector('.job-container');

// Add an event listener to the search bar
searchBar.addEventListener('input', function () {
    const searchValue = searchBar.value.toLowerCase(); // Get the input value and convert to lowercase
    const jobs = jobContainer.querySelectorAll('.jList'); // Select all job items

    // Loop through each job and filter based on the input
    jobs.forEach(job => {
        const jobText = job.textContent.toLowerCase(); // Get the job text and convert to lowercase
        if (jobText.includes(searchValue)) {
            job.style.display = ''; // Show the job if it matches
        } else {
            job.style.display = 'none'; // Hide the job if it doesn't match
        }
    });
});