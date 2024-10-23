// Card
const cardData = [
  {
    heading: "Total Events",
    value: "100,000",
    increase: "+5.0%",
    icon: "up",
  },
  {
    heading: "Active Speakers",
    value: "25",
    increase: "-5.0%",
    icon: "down",
  },
  {
    heading: "Total Registrations",
    value: "300",
    increase: "+5.0%",
    icon: "up",
  },
  {
    heading: "Total Revenue",
    value: "$500,000",
    increase: "+5.0%",
    icon: "up",
  },
];

const eventsData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: ["Jane Doe", "Dave Chappele", "Trevor Noah"],
    attendees: 200,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: ["Dr. Peter Smith", "Dave Chappele", "Trevor Noah"],
    attendees: 100,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: ["Dr. Aisha Malik", "Dave Chappele", "Trevor Noah"],
    attendees: 300,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: ["John Lee", "Dave Chappele", "Trevor Noah"],
    attendees: 500,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: ["Rachel Moore", "Dave Chappele", "Trevor Noah"],
    attendees: 250,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: ["Prof. Alan Green", "Dave Chappele", "Trevor Noah"],
    attendees: 700,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: ["Kevin Adams", "Dave Chappele", "Trevor Noah"],
    attendees: 230,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: ["Emily Zhang", "Dave Chappele", "Trevor Noah"],
    attendees: 400,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: ["Dr. Maria Hernandez", "Dave Chappele", "Trevor Noah"],
    attendees: 200,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: ["Guest Panel"],
    attendees: 200,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: ["Jane Doe", "Dave Chappele", "Trevor Noah"],
    attendees: 200,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: ["Dr. Peter Smith", "Dave Chappele", "Trevor Noah"],
    attendees: 100,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: ["Dr. Aisha Malik", "Dave Chappele", "Trevor Noah"],
    attendees: 300,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: ["John Lee", "Dave Chappele", "Trevor Noah"],
    attendees: 500,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: ["Rachel Moore", "Dave Chappele", "Trevor Noah"],
    attendees: 250,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: ["Prof. Alan Green", "Dave Chappele", "Trevor Noah"],
    attendees: 700,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: ["Kevin Adams", "Dave Chappele", "Trevor Noah"],
    attendees: 230,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: ["Emily Zhang", "Dave Chappele", "Trevor Noah"],
    attendees: 400,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: ["Dr. Maria Hernandez", "Dave Chappele", "Trevor Noah"],
    attendees: 200,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: ["Guest Panel"],
    attendees: 200,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: ["Kevin Adams", "Dave Chappele", "Trevor Noah"],
    attendees: 230,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: ["Emily Zhang", "Dave Chappele", "Trevor Noah"],
    attendees: 400,
    status: "Completed",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: ["Dr. Maria Hernandez", "Dave Chappele", "Trevor Noah"],
    attendees: 200,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: ["Guest Panel"],
    attendees: 200,
    status: "In Progress",
    description: "Get ready to get your mind blown",
  },
];

// theme

let themeToggle = document.querySelector("#theme-toggle");
let themeIcon = document.querySelector("#theme-icon");
let themeMode = document.querySelector("#theme-mode");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark");
  sidebar.classList.toggle("dark");
  mainContent.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.classList.replace("bi-toggle-off", "bi-toggle-on");
    themeMode.innerHTML = "Light Mode";
  } else {
    themeIcon.classList.replace("bi-toggle-on", "bi-toggle-off");
    themeMode.innerHTML = "Dark Mode";
  }
};

// Sidebar

let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let close = document.querySelector("#close");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main-content");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
btn2.onclick = function () {
  sidebar.classList.toggle("active");
};

close.onclick = function () {
  sidebar.classList.toggle("active");
};

//card
const cardWrapper = document.getElementById("card-wrapper");

cardData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("cards");

  const cardTop = document.createElement("div");
  cardTop.classList.add("card-top");
  cardTop.innerHTML = `<span>${card.heading}</span> <i class="bi bi-info-circle"></i>`;

  const cardBottom = document.createElement("div");
  cardBottom.classList.add("card-bottom");

  const iconClass =
    card.icon === "up" ? "bi-arrow-up-right" : "bi-arrow-down-right";
  const iconColor = card.icon === "up" ? "green" : "red";

  cardBottom.innerHTML = `
    <span>${card.value}</span>
    <i  class="bi ${iconClass}" style="color: ${iconColor};"></i>
    <span style="color: ${iconColor};">${card.increase}</span>
  `;

  cardElement.appendChild(cardTop);
  cardElement.appendChild(cardBottom);

  cardWrapper.appendChild(cardElement);
});

// Chart

const chartData = {
  series: [
    {
      name: "Sales",
      data: [650, 950, 800, 400, 1000, 550, 850, 350, 850, 650, 950, 600],
    },
  ],
  chart: {
    type: "bar",
    height: 240,
    toolbar: {
      show: false, // Hide toolbar if not needed
    },
  },
  plotOptions: {
    bar: {
      horizontal: false, // Ensure vertical bars
      columnWidth: "90%", // Equivalent to bar thickness
      borderRadius: 1,
    },
  },
  dataLabels: {
    enabled: false, // Disable data labels on bars
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#6C5DD3"],
    // Border color
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    max: 1000,
    tickAmount: 5, // Equivalent to step size (1000 / 5 = 200)
  },
  fill: {
    colors: ["#6C5DD3"], // Bar fill color
  },
  tooltip: {
    enabled: true,
  },
};

// Render chart
const chart = new ApexCharts(document.querySelector("#chart"), chartData);
chart.render();
// Carousel-slide
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let currentSlide = 0;
const indicators = document.querySelectorAll(".indicator");

const updateIndicators = () => {
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
};

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector(".carousel-wrapper").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
  updateIndicators();
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  document.querySelector(".carousel-wrapper").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
  updateIndicators();
});

// Automatically move to the next slide every 10 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector(".carousel-wrapper").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
  updateIndicators();
}, 10000);

// Initially set the first indicator to active
updateIndicators();

// table
let rowsPerPage = 10;
let currentPage = 1;
let filterCriteria = { name: "", date: "", status: "" }; // Store filter criteria

const modal = document.getElementById("modalEvent");
const filterModal = document.getElementById("filterModal");
const modalTitle = document.getElementById("modalTitle");
const modalInput = document.getElementById("modalInput");
const tableLength = document.getElementById("table_length");

// Function to filter data based on selected criteria
function filterData(data) {
  return data.filter((event) => {
    const nameMatch = event.name
      .toLowerCase()
      .includes(filterCriteria.name.toLowerCase());
    const dateMatch = event.date.includes(filterCriteria.date);
    const statusMatch = event.status
      .toLowerCase()
      .includes(filterCriteria.status.toLowerCase());
    return nameMatch && dateMatch && statusMatch;
  });
}

// Function to show modal for filters
function showFilterModal(filterType) {
  filterModal.style.display = "block";
  modalTitle.textContent = `Filter by ${
    filterType.charAt(0).toUpperCase() + filterType.slice(1)
  }`;
  modalInput.value = filterCriteria[filterType] || "";

  document.getElementById("applyFilter").onclick = function () {
    filterCriteria[filterType] = modalInput.value || "";
    currentPage = 1;
    renderTable(filterData(eventsData), currentPage);
    renderMiniTable(filterData(eventsData), currentPage);

    renderPaginationControls(eventsData);
    closeModal();
  };

  document.getElementById("closeFilter").onclick = closeModal;
}

function closeModal() {
  filterModal.style.display = "none";
}

// Function to show modal with event details
function showModal(eventData, position) {
  document.getElementById("event_name").textContent = eventData.name;
  document.getElementById("event_date").textContent = eventData.date;
  document.getElementById("desc").textContent = eventData.description;
  document.getElementById(
    "speakers"
  ).textContent = `${eventData.speaker.length} Guest Speakers: ${eventData.speaker}`;
  document.getElementById(
    "attendees"
  ).textContent = `${eventData.attendees} Attendees`;

  //   const modalWidth = modal.offsetWidth;
  //   const viewportWidth = window.innerWidth;
  //   const viewportHeight = window.innerHeight; // Get the height of the viewport
  //   let top = position.top + 250;
  //   let left = position.left + window.scrollX + 56;

  //   // Adjust the position based on screen size
  //   if (viewportWidth <= 900) {
  //     // For smaller screens (e.g., tablets and mobile)
  //     top = position.top + 900; // Adjust the top offset for smaller screens
  //     left = 20; // Position the modal towards the center horizontally
  //   } else {
  //     if (left + modalWidth > viewportWidth) {
  //       left = viewportWidth - modalWidth; // Ensure modal doesn't overflow on the right
  //     }
  //   }

  //   modal.style.top = `${top}px`;
  //   modal.style.left = `${left}px`;
  modal.classList.add("show");
}

function hideModal() {
  modal.classList.remove("show");
}

// Live search functionality
document.getElementById("search").addEventListener("input", function () {
  filterCriteria.name = this.value;
  currentPage = 1;
  renderTable(filterData(eventsData), currentPage);
  renderMiniTable(filterData(eventsData), currentPage);
  renderPaginationControls(eventsData);
});

// Add event listeners to filter elements
document
  .getElementById("name")
  .addEventListener("click", () => showFilterModal("name"));
document
  .getElementById("date")
  .addEventListener("click", () => showFilterModal("date"));
document
  .getElementById("status")
  .addEventListener("click", () => showFilterModal("status"));
let cancel = document.getElementById("cance");
// Function to render the table
function renderTable(data, page) {
  const tableBody = document.querySelector("#eventsTable tbody");
  tableBody.innerHTML = "";

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = page * rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach((event) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.date}</td>
      <td>${event.speaker[0]}</td>
      <td id='event'>
        <div class="status ${event.status.toLowerCase().replace(" ", "-")}">
          <span></span><span>${event.status}</span>
        </div>
      </td>
    `;
    const numberOfRows = tableBody.rows.length;
    tableLength.innerText = `Displaying ${numberOfRows + 1} result${
      numberOfRows < 0 ? "" : "s"
    }`;
    tableBody.appendChild(row);

    row.addEventListener("click", (e) => {
      const rect = row.getBoundingClientRect();
      showModal(event, rect);
    });

    cancel.addEventListener("click", hideModal);
  });

  const statusCells = document.querySelectorAll(".status");
  statusCells.forEach((cell) => {
    if (cell.textContent === "Completed") {
      cell.classList.add("completed");
    } else if (cell.textContent === "In Progress") {
      cell.classList.add("in-progress");
    }
  });
}

const miniTableBody = document.getElementById("miniTableBody");

function renderMiniTable(data, page) {
  miniTableBody.innerHTML = ""; // Clear the table body

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = page * rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach((event) => {
    // Create table rows for event name and status
    const row = document.createElement("tr");
    row.classList.add("rowww_container");
    row.style.cursor = "pointer";

    row.innerHTML = `
      <td>
        <i id="item" class="bi bi-chevron-right"></i> <!-- Clickable dropdown icon -->
        <span class="text">${event.name}</span>
      </td>
     <td id='event'>
        <div class="status ${event.status.toLowerCase().replace(" ", "-")}">
          <span></span><span>${event.status}</span>
        </div>
      </td>
        <td colspan="2">
        <div id="inner" class="hidden">
          <p>Speaker: ${event.speaker[0]}</p>
          <p>Date: ${event.date}</p>
        </div>
      </td>
    `;

    // Create a hidden row for additional event details
    const detailsRow = document.createElement("tr");
    detailsRow.classList.add("row_container");
    detailsRow.innerHTML = `
      <td class='col_span' colspan="2">
        <div id="inner" class="hidden_2">
          <p>${event.speaker[0]}</p>
          <p>${event.date}</p>
        </div>
      </td>
    `;

    // Append the rows to the table body
    miniTableBody.appendChild(row);
    miniTableBody.appendChild(detailsRow);

    // Add event listener for dropdown functionality
    const chevronIcon = row.querySelector("i.bi-chevron-right"); // Grab the icon
    // const inner = document.getElementById('inner')
    row.addEventListener("click", function () {
      const innerDiv = detailsRow.querySelector("#inner");

      if (innerDiv.classList.contains("hidden_2")) {
        innerDiv.classList.remove("hidden_2"); // Show the content
        row.classList.add("expanded");
        // row.addEventListener("click", showModal);
        detailsRow.classList.add("expanded");

        chevronIcon.classList.remove("bi-chevron-right"); // Change to chevron-down
        chevronIcon.classList.add("bi-chevron-down");
      } else {
        innerDiv.classList.add("hidden_2"); // Hide the content
        row.classList.remove("expanded");
        // row.addEventListener("click", null);
        chevronIcon.classList.remove("bi-chevron-down"); // Change back to chevron-right
        chevronIcon.classList.add("bi-chevron-right");
      }
    });

    row.addEventListener("click", (e) => {
      const rect = row.getBoundingClientRect();
      showModal(event, rect);
    });

    cancel.addEventListener("click", hideModal);
  });

  const statusCells = document.querySelectorAll(".status");
  statusCells.forEach((cell) => {
    if (cell.textContent === "Completed") {
      cell.classList.add("completed");
    } else if (cell.textContent === "In Progress") {
      cell.classList.add("in-progress");
    }
  });
}

// Call the function to render the table for smaller screens
// renderMiniTable(eventsData);

// Function to render pagination controls
function renderPaginationControls(data) {
  const paginationControls = document.getElementById("paginationControls");
  paginationControls.innerHTML = "";

  const pageCount = Math.ceil(data.length / rowsPerPage);

  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable(filterData(eventsData), currentPage);
      renderMiniTable(filterData(eventsData), currentPage);
      renderPaginationControls(eventsData);
    }
  });
  paginationControls.appendChild(prevButton);

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.toggle("active", i === currentPage);
    button.addEventListener("click", () => {
      currentPage = i;
      renderTable(filterData(eventsData), currentPage);
      renderMiniTable(filterData(eventsData), currentPage);
      renderPaginationControls(eventsData);
    });
    paginationControls.appendChild(button);
  }

  const nextButton = document.createElement("button");
  nextButton.innerHTML = '<i class="bi bi-chevron-right"></i>';
  nextButton.disabled = currentPage === pageCount;
  nextButton.addEventListener("click", () => {
    if (currentPage < pageCount) {
      currentPage++;
      renderTable(filterData(eventsData), currentPage);
      renderMiniTable(filterData(eventsData), currentPage);
      renderPaginationControls(eventsData);
    }
  });
  paginationControls.appendChild(nextButton);
}

document.getElementById("rowsPerPage").addEventListener("change", function () {
  rowsPerPage = parseInt(this.value);
  currentPage = 1;
  renderTable(filterData(eventsData), currentPage);
  renderMiniTable(filterData(eventsData), currentPage);
  renderPaginationControls(eventsData);
});

// Initial table render
renderTable(filterData(eventsData), currentPage);
renderMiniTable(filterData(eventsData), currentPage);
renderPaginationControls(eventsData);
