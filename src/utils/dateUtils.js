import { formatInTimeZone } from 'date-fns-tz';

// Format date chuẩn DD/MM/YYYY
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const timeZone = 'Asia/Ho_Chi_Minh'; // Múi giờ Việt Nam
  return formatInTimeZone(new Date(dateString), timeZone, 'dd/MM/yyyy');
};

// Format datetime đầy đủ DD/MM/YYYY HH:mm:ss
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  const timeZone = 'Asia/Ho_Chi_Minh'; // Múi giờ Việt Nam
  return formatInTimeZone(new Date(dateString), timeZone, 'dd/MM/yyyy HH:mm:ss');
};

// Format date cho input type="date"
export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  
  const timeZone = 'Asia/Ho_Chi_Minh';
  return formatInTimeZone(new Date(dateString), timeZone, 'yyyy-MM-dd');
};

// Tính số ngày còn lại
export const calculateRemainingDays = (dateString) => {
  if (!dateString) return 0;
  
  const timeZone = 'Asia/Ho_Chi_Minh';
  const expireDate = new Date(dateString);
  const now = new Date();
  
  const remainingDays = Math.ceil((expireDate - now) / (1000 * 60 * 60 * 24));
  return remainingDays;
};