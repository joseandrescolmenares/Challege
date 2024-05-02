export const downloadImage = (imageUrl, imageName) => {
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
  
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = imageName;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error descargando la imagen:', error);
    });
};