
export const validateName = (name: string): boolean => {
    return /^.{3,80}$/.test(name.trim());
  };

  export const validateUniqueName = (name: string, products: { name: string }[]): boolean => {
    return !products.some((plant: { name: string }) => plant.name === name.trim());
  };
  
  export const validateSubtitle = (subtitle: string): boolean => {
    return /^.{3,80}$/.test(subtitle.trim().toLowerCase());
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
    return description.trim().length <= 250 && description.trim().length >= 10;
  };
  
  export const validateImageUrl = (imageUrl: string): boolean => {
    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(imageUrl);
  };

export const validateUserName = (userName: string): boolean => {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/.test(userName);
};

export const validateEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export const validatePassword = (password: string): boolean => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
    password,
  );
};
