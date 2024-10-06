// Fetch JSON từ GitHub
async function fetchAppsData() {
  try {
    const response = await fetch('https://repo.ucerts.io'); // Đường dẫn đến JSON file của bạn
    const data = await response.json(); // Chuyển đổi dữ liệu thành JSON
    return data.apps; // Trả về danh sách ứng dụng
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Hiển thị các ứng dụng
function displayApps(apps) {
  const appContainer = document.getElementById('appContainer');
  appContainer.innerHTML = ''; // Xóa nội dung cũ

  apps.forEach(app => {
    const appCard = document.createElement('div');
    appCard.classList.add('app-card');

    appCard.innerHTML = `
      <img src="${app.iconURL}" alt="${app.name} Icon">
      <h2>${app.name}</h2>
      <p><strong>Version:</strong> ${app.version}</p>
      <p><strong>Developer:</strong> ${app.developerName || 'Unknown'}</p>
      <p><strong>Release Date:</strong> ${app.versionDate}</p>
      <a href="${app.downloadURL}" target="_blank">Download</a>
    `;

    appContainer.appendChild(appCard);
  });
}

// Tìm kiếm ứng dụng
function searchApps(apps) {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchTerm));
    displayApps(filteredApps);
  });
}

// Khởi động ứng dụng
async function init() {
  const apps = await fetchAppsData();
  displayApps(apps); // Hiển thị toàn bộ ứng dụng ban đầu
  searchApps(apps);  // Kích hoạt chức năng tìm kiếm
}

init();
