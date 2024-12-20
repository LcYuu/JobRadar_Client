// Hàm chuyển đổi UTC sang múi giờ Việt Nam
export const convertToVNTimezone = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return '';
  }

  // Chuyển đổi sang múi giờ Việt Nam
  return new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
};

// Format date chuẩn DD/MM/YYYY
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const vnDate = convertToVNTimezone(dateString);
  
  return vnDate.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

// Format datetime đầy đủ DD/MM/YYYY HH:mm:ss
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  const vnDate = convertToVNTimezone(dateString);
  
  return vnDate.toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

// Format date cho input type="date"
export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  
  const vnDate = convertToVNTimezone(dateString);
  return vnDate.toISOString().split('T')[0];
};

// Tính số ngày còn lại
export const calculateRemainingDays = (dateString) => {
  if (!dateString) return 0;
  
  const vnExpireDate = convertToVNTimezone(dateString);
  const vnNow = convertToVNTimezone(new Date());
  
  const remainingDays = Math.ceil((vnExpireDate - vnNow) / (1000 * 60 * 60 * 24));
  return remainingDays;
};