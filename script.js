// Tải dữ liệu JSON từ file apps.json
fetch('apps.json')
    .then(response => response.json())
    .then(data => {
        const appList = document.getElementById('app-list');

        // Duyệt qua từng ứng dụng trong JSON và tạo card ứng dụng
        data.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'app-card';

            appCard.innerHTML = `
                <img src="${app.iconURL}" alt="${app.name} icon">
                <h2>${app.name}</h2>
                <p><strong>Version:</strong> ${app.version}</p>
                <p>${app.localizedDescription}</p>
                <a href="${app.downloadURL}">Tải xuống</a>
            `;

            appList.appendChild(appCard);
        });
    })
    .catch(error => console.error('Lỗi khi tải JSON:', error));
