import { format, parseISO, addHours } from 'date-fns';
import { vi } from 'date-fns/locale';

// Format date chuẩn DD/MM/YYYY
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  // Parse ISO string và thêm 7 giờ cho múi giờ Việt Nam
  const date = addHours(parseISO(dateString), 7);
  return format(date, 'dd/MM/yyyy', { locale: vi });
};

// Format datetime đầy đủ DD/MM/YYYY HH:mm:ss
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  // Parse ISO string và thêm 7 giờ cho múi giờ Việt Nam
  const date = addHours(parseISO(dateString), 7);
  return format(date, 'dd/MM/yyyy HH:mm:ss', { locale: vi });
};

// Format date cho input type="date"
export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  
  // Parse ISO string và thêm 7 giờ cho múi giờ Việt Nam
  const date = addHours(parseISO(dateString), 7);
  return format(date, 'yyyy-MM-dd');
};

// Tính số ngày còn lại
export const calculateRemainingDays = (dateString) => {
  if (!dateString) return 0;
  
  const expireDate = addHours(parseISO(dateString), 7);
  const now = new Date();
  const vnNow = addHours(now, 7);
  
  const remainingDays = Math.ceil((expireDate - vnNow) / (1000 * 60 * 60 * 24));
  return remainingDays;
};