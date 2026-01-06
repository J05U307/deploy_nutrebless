export const whatsappLink = (message) => {
  const phone = "51984834787"; // tu número
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
