function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('expanded');
    const mainContent = document.querySelector('.main-content');

    if (sidebar.classList.contains('expanded')) {
        mainContent.style.marginLeft = '200px';
        mainContent.style.width = 'calc(100% - 200px)';
    } else {
        mainContent.style.marginLeft = '60px';
        mainContent.style.width = 'calc(100% - 60px)';
    }
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // document.querySelectorAll('.main-content section').forEach(section => {
        //     section.classList.add('hidden');
        // });

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // if (targetSection) {
        //     targetSection.classList.remove('hidden');
        // }

        if (targetId === 'services') {
            fetchRepairHistory();
        }

        if (targetId === 'logout') {
            logout();
        }
    });
});

// document.getElementById('book-technician-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     showModal('Appointment successfully booked with the technician.');
    // Here you can add the logic to handle the form submission (e.g., send data to the server)
// });

// function showModal(message) {
//     const modal = document.getElementById('modal');
//     const modalMessage = document.getElementById('modal-message');
//     modalMessage.textContent = message;
//     modal.classList.remove('hidden');
// }

// function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.classList.add('hidden');
// }

function fetchRepairHistory() {
    // Simulated data fetch; replace with actual API call
    const activeRepairs = [
        { id: 1, description: "Engine repair", status: "In Progress" }
    ];
    const completedRepairs = [
        { id: 2, description: "Brake replacement", status: "Completed" }
    ];
    const cancelledRepairs = [
        { id: 3, description: "Oil change", status: "Cancelled" }
    ];
 }

    const activeRepairsContainer = document.getElementById('active-repairs');
    const completedRepairsContainer = document.getElementById('completed-repairs');
    const cancelledRepairsContainer = document.getElementById('cancelled-repairs');