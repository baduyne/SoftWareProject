function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggleButton = document.querySelector('.toggle-button'); // Nút để bật/tắt menu
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
  
  // Gọi hàm để khởi tạo menu
 