// Format datetime đầy đủ DD/MM/YYYY HH:mm
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  // Tạo đối tượng Date từ chuỗi ISO
  const date = new Date(dateString);
  
  // Lấy các thành phần thời gian
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // Trả về định dạng DD/MM/YYYY HH:mm
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

// Format date chuẩn DD/MM/YYYY
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};