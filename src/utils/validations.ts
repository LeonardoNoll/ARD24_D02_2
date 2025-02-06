export const validateName = (name: string): boolean => {
    return /^.{3,80}$/.test(name.trim());
  };
  
  export const validateSubtitle = (subtitle: string): boolean => {
    return /^.{3,80}$/.test(subtitle.trim());
  };
  
  export const validatePrice = (price: string): boolean => {
    return /^\$?\d+(\.\d{2})?$/.test(price) && parseFloat(price.replace(/[^\d.]/g, '')) > 0;
  };
  
  export const validateDiscount = (discount: string): boolean => {
    return /^%?\d+%?$/.test(discount) &&
      parseInt(discount.replace(/[^\d]/g, '')) >= 0 &&
      parseInt(discount.replace(/[^\d]/g, '')) <= 100;
  };
  
  export const validateDescription = (description: string): boolean => {
    return description.trim().length <= 250;
  };
  
  export const validateImageUrl = (imageUrl: string): boolean => {
    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(imageUrl);
  };