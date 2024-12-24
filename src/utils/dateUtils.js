import { format, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

// Format date chuẩn DD/MM/YYYY
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = parseISO(dateString);
  return format(date, 'dd/MM/yyyy', { locale: vi });
};

// Format datetime đầy đủ DD/MM/YYYY HH:mm:ss
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  const date = parseISO(dateString);
  return format(date, 'dd/MM/yyyy HH:mm:ss', { locale: vi });
};

// Format date cho input type="date"
export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
};

// Tính số ngày còn lại
export const calculateRemainingDays = (dateString) => {
  if (!dateString) return 0;
  
  const expireDate = parseISO(dateString);
  const now = new Date();
  
  const remainingDays = Math.ceil((expireDate - now) / (1000 * 60 * 60 * 24));
  return remainingDays;
};