<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách Ứng dụng</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 80%;
            max-width: 600px;
        }

        .logo {
            width: 128px;
            height: 128px;
        }

        h1, h2, h3 {
            margin: 10px 0;
        }

        .buy-cert-button, .video-button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 5px;
            border-radius: 30px;
            text-decoration: none;
            color: white;
            background-color: black;
            transition: background-color 0.3s;
        }

        .video-button {
            border: 2px solid black;
            background-color: transparent;
            color: black;
        }

        .video-button:hover {
            background-color: black;
            color: white;
        }

        .app-container {
            margin-top: 20px;
            width: 100%;
        }

        .app-box {
            background: #eaeaea;
            border-radius: 5px;
            margin: 10px 0;
            padding: 15px;
            text-align: left;
        }

        .app-icon {
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }

        .search-input {
            width: 100%;
            padding: 10px;
            margin: 20px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Phần tiêu đề và ô tìm kiếm -->
        <div class="search-area">
            <img src="https://ucerts.io/public/icons/navbar_icon.png" alt="UCerts Logo" class="logo">
            <h1>Appstore by UCerts.io</h1>
            <h2>Giải pháp chứng chỉ Apple chuyên nghiệp</h2>
            <h3>Nhân bản ứng dụng trên iOS không cần Jailbreak</h3>
            <a href="https://ucerts.io/vi-VN" class="buy-cert-button">Mua chứng chỉ tại đây</a>
            <a target="_blank" class="video-button flex items-center gap-2" href="https://www.youtube.com/watch?v=6wTpBCrLcDM">
                <div class="size-6">
                    <svg stroke="currentColor" fill="#ff0909" stroke-width="0" viewBox="0 0 576 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305z"></path>
                        <path fill="#ffffff" d="M232.145 337.591V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                </div>
                <span>Xem video hướng dẫn</span>
            </a>
        </div>

        <!-- Phần tìm kiếm ứng dụng -->
        <input type="text" id="searchInput" placeholder="Tìm kiếm ứng dụng..." class="search-input">
        
        <!-- Phần hiển thị ứng dụng -->
        <div id="appContainer" class="app-container">
            <!-- Nội dung ứng dụng sẽ được thêm vào đây từ file JSON -->
        </div>
    </div>

    <script src="app.js"></script>
    <script>
        // Hiệu ứng chờ khi bấm nút mua chứng chỉ
        document.querySelector('.buy-cert-button').addEventListener('click', function() {
            const button = this;
            button.innerText = "Đang chuyển trang..."; // Thay đổi văn bản nút
            button.disabled = true; // Vô hiệu hóa nút
            setTimeout(function() {
                window.location.href = button.href; // Chuyển tới liên kết của nút
            }, 5000); // Chờ 5 giây
        });
    </script>
</body>
</html>
