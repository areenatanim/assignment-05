const API_URL = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

document.addEventListener('DOMContentLoaded', function () {
        // All button default active
        setActiveButton('all-btn');
        loadIssues();

        // Button events
        document.getElementById('all-btn').onclick = () => {
                setActiveButton('all-btn');
                loadIssues();
        };
        document.querySelector('#open-btn button').onclick = () => {
                setActiveButton('open-btn');
                loadIssues('open');
        };
        document.getElementById('close-btn').onclick = () => {
                setActiveButton('close-btn');
                loadIssues('close');
        };
});

async function loadIssues(statusFilter = null) {
        const spinner = document.getElementById('loadingSpinner');
        const container = document.getElementById('card-container');

        spinner.classList.remove('hidden');
        container.innerHTML = '';

        try {
                let url = API_URL;
                if (statusFilter) {
                        url += `?status=${statusFilter}`;
                }

                // console.log(' Loading:', url);
                const response = await fetch(url);

                if (!response.ok) {
                        throw new Error(`HTTP ${response.status}`);
                }

                const apiResponse = await response.json();
                const issues = apiResponse.data || apiResponse || [];

                spinner.classList.add('hidden');
                updateCounters(issues);
                renderCards(issues, statusFilter);

        } catch (error) {
                console.error(' Error:', error);
                spinner.classList.add('hidden');
                container.innerHTML = `
                    <div class="col-span-full text-center py-16">
                        <div class="text-6xl mb-4 text-red-300"><h2>code not found</h2></div>
                        <h3 class="text-2xl font-bold text-gray-600 mb-2">Failed to load issues</h3>
                        <p class="text-gray-500 mb-6">Please check your connection and try again</p>
                        <button class="btn btn-primary" onclick="loadIssues()">
                             Retry again later!!!
                        </button>
                    </div>
                `;
        }
}

function updateCounters(issues) {
        const total = issues.length;
        const openCount = issues.filter(issue =>
                !issue.status || issue.status.toLowerCase().includes('open')
        ).length;
        const closedCount = issues.filter(issue =>
                issue.status && issue.status.toLowerCase().includes('close')
        ).length;

        document.getElementById('total-issues').textContent = `${total} Issues`;
        document.getElementById('open-count').innerHTML =
                `<div class="bg-emerald-500 w-3 h-3 rounded-full"></div>Open <span class="font-bold text-xl">${openCount}</span>`;
        document.getElementById('close-count').innerHTML =
                `<div class="bg-purple-500 w-3 h-3 rounded-full"></div>Close <span class="font-bold text-xl">${closedCount}</span>`;
}

function renderCards(issues, statusFilter) {
        const container = document.getElementById('card-container');

        // Filter based on active button
        let filteredIssues = issues;
        if (statusFilter === 'open') {
                filteredIssues = issues.filter(issue =>
                        !issue.status || issue.status.toLowerCase().includes('open')
                );
        } else if (statusFilter === 'close') {
                filteredIssues = issues.filter(issue =>
                        issue.status && issue.status.toLowerCase().includes('close')
                );
        }

        if (filteredIssues.length === 0) {
                container.innerHTML = `
                    <div class="col-span-full text-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                        <div class="text-7xl mb-6 opacity-20">📋</div>
                        <h3 class="text-2xl font-bold text-gray-600 mb-3">No issues match this filter</h3>
                        <p class="text-gray-500 mb-8 max-w-md mx-auto">Try switching to "All Issues" or adjust your search criteria</p>
                        <button class="btn btn-outline btn-primary" onclick="loadIssues()">
                            👀 Show All Issues
                        </button>
                    </div>
                `;
                return;
        }

        container.innerHTML = filteredIssues.map(issue => createIssueCard(issue)).join('');
}

function createIssueCard(issue) {
        const isClosed = issue.status && issue.status.toLowerCase().includes('close');
        const borderColor = isClosed ? '#a855f7' : '#10b981';
        const statusIcon = isClosed ? `  <img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`;

        return `
                <div class="card bg-white shadow-lg hover:shadow-2xl border-t-8 cursor-pointer transition-all duration-200 hover:-translate-y-1" 
                     style="border-top-color: ${borderColor};" 
                     onclick="showIssueDetail(${issue.id || '0'})">
                    <div class="card-body p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">${statusIcon}</span>
                                <div class="badge badge-lg ${isClosed ? 'badge-purple' : 'badge-success'}">${issue.status || 'Open'}</div>
                            </div>
                            <button class="btn btn-sm btn-warning">${issue.priority || 'MEDIUM'}</button>
                        </div>
                        
                        <h3 class="card-title text-xl font-bold mb-3 line-clamp-2">${issue.title || 'Untitled Issue'}</h3>
                        
                        <p class="text-gray-600 mb-6 line-clamp-3">${issue.description || 'No description provided'}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-6">
                            <button class="btn btn-xs btn-warning rounded-full"> Bug</button>
                            <button class="btn btn-xs btn-error rounded-full">Help Wanted</button>
                        </div>
                        
                        <div class="divider"></div>
                        
                        <div class="flex justify-between items-center text-sm text-gray-500">
                            <span>Issue #${issue.id || '?'} by ${issue.assignee || 'Unassigned'}</span>
                            <span>${issue.createdAt ? new Date(issue.createdAt).toLocaleDateString() : 'Recent'}</span>
                        </div>
                    </div>
                </div>
            `;
}

async function showIssueDetail(id) {
        try {
                const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
                const result = await response.json();
                const issue = result.data || result;

                console.log(' Full Issue:', issue);
                alert(`Issue #${id}\n\n Title: ${issue.title}\n Status: ${issue.status}\n Description: ${issue.description}`);
        } catch (error) {
                console.error('Detail error:', error);
                alert(`Could not load issue #${id}`);
        }
}

function setActiveButton(btnId) {
        document.querySelectorAll('.btn').forEach(btn => {
                btn.classList.add('btn-outline');
                btn.classList.remove('btn-primary');
        });

        const activeBtn = document.getElementById(btnId);
        if (activeBtn) {
                activeBtn.classList.remove('btn-outline');
                activeBtn.classList.add('btn-primary');
        }
}



