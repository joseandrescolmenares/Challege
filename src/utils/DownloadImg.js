export const downloadImage = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = "pepe.jpg"; // Nombre de archivo deseado para la imagen

    document.body.appendChild(link);

    link.addEventListener('click', () => {
      document.body.removeChild(link);
      resolve();
    });

    link.addEventListener('error', (error) => {
      document.body.removeChild(link);
      reject(error);
    });

    link.click();
  });
};