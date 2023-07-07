export const fileUpload = async (file) => {
  if (!file) throw new Error('No hay ningun archivo a subir');
  const cloudUrl = `https://api.cloudinary.com/v1_1/dbay0gvpv/upload`;

  const formData = new FormData();

  formData.append('upload_preset', 'react-journal-app');
  formData.append('file', file);

  try {
    const res = await fetch(cloudUrl, { method: 'POST', body: formData });

    if (!res.ok) throw new Error('No se pudo subir imagen');

    const cloudRes = await res.json();

    return cloudRes.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
