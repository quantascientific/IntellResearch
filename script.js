async function renderDashboard() {
    clearPageContent();
    unsubscribeListeners();
    pageContentDiv.innerHTML = `<h2 class="text-3xl font-semibold mb-6">Analytics & Reporting Dashboard</h2>`;

    const reportsSection = document.createElement('div');
    reportsSection.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    reportsSection.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800">Projects by Status</h3>
            <div id="project-status-chart" class="mt-4 h-40 flex items-center justify-center"></div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800">Grants by Status</h3>
            <div id="grant-status-chart" class="mt-4 h-40 flex items-center justify-center"></div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800">Recent Audit Log</h3>
            <div id="audit-log-list" class="mt-4 text-sm text-gray-600 space-y-2"></div>
        </div>
    `;
    pageContentDiv.appendChild(reportsSection);
    
    // Show spinner while fetching data
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) loadingSpinner.classList.remove('hidden');

    if (isAuthReady) {
        try {
            // Your existing data fetching logic...
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
            showMessage("Failed to load dashboard data. Please check permissions.", "error");
        } finally {
            // Hide spinner when done, whether successful or not
            if (loadingSpinner) loadingSpinner.classList.add('hidden');
        }
    }
}
