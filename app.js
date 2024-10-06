// Fetch JSON từ GitHub và render ra giao diện
async function fetchAppsData() {
    try {
        const response = await fetch('https://repo.ucerts.io');
        const data = await response.json();

        const apps = data.apps; // Lấy danh sách apps từ JSON
        const container = document.getElementById('appContainer');

        // Lặp qua từng app và tạo HTML
        apps.forEach(app => {
            const appBox = document.createElement('div');
            appBox.className = 'app-box';

            appBox.innerHTML = `
                <img src="${app.iconURL}" alt="${app.name} Icon">
                <h3>${app.name}</h3>
                <p><strong>Bundle ID:</strong> ${app.bundleID}</p>
                <p><strong>Version:</strong> ${app.version}</p>
                <p><strong>Version Date:</strong> ${app.versionDate}</p>
                <p><strong>Developer:</strong> ${app.developerName || 'N/A'}</p>
                <p><strong>Description:</strong> ${app.localizedDescription}</p>
                <a href="${app.downloadURL}" target="_blank">Tải về</a>
            `;

            container.appendChild(appBox);
        });
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
    }
}

// Gọi hàm để fetch và hiển thị dữ liệu
fetchAppsData();
