import { utcToZonedTime, format } from 'date-fns-tz';

// Định dạng datetime đầy đủ
export const formatDateTime = (dateString) => {
  if (!dateString) return '';

  const timeZone = 'Asia/Ho_Chi_Minh'; // Múi giờ Việt Nam
  const zonedDate = utcToZonedTime(new Date(dateString), timeZone);

  return format(zonedDate, 'dd/MM/yyyy HH:mm:ss', { timeZone });
};


// Format datetime đầy đủ DD/MM/YYYY HH:mm:ss
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);

  // Chuyển múi giờ về Asia/Ho_Chi_Minh
  const offset = date.getTimezoneOffset() * 60000;
  const localTime = date.getTime() - offset + (7 * 3600000);
  
  const adjustedDate = new Date(localTime);

  return adjustedDate.toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};



// Format date cho input type="date"
export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

// Tính số ngày còn lại
export const calculateRemainingDays = (dateString) => {
  if (!dateString) return 0;
  
  const expireDate = new Date(dateString);
  const now = new Date();
  
  const remainingDays = Math.ceil((expireDate - now) / (1000 * 60 * 60 * 24));
  return remainingDays;
};