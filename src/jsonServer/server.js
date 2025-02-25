const express = require('express');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('db.json'); // Ruta al archivo db.json que es tu base de datos
const middlewares = jsonServer.defaults();

app.use(express.json());  // Middleware para procesar los datos en formato JSON
app.use(middlewares);

// Esta es la ruta personalizada para cambiar la contraseña
app.put('/usuarios/change-password', (req, res) => {
  const { userId, currentPassword, newPassword } = req.body;
  
  // Obtén la lista de usuarios desde la base de datos de jsonServer
  const users = router.db.get('usuarios').value();
  const user = users.find(u => u.id === userId);
  
  if (user && user.clave === currentPassword) {
    // Cambia la contraseña si la actual es correcta
    user.clave = newPassword;
    router.db.get('usuarios').find({ id: userId }).assign(user).write(); // Guardar el cambio en la base de datos
    res.status(200).send({ message: 'Contraseña cambiada exitosamente' });
  } else {
    res.status(400).send({ message: 'Contraseña actual incorrecta o usuario no encontrado' });
  }
});

// Rutas estándar de jsonServer
app.use('/api', router);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor Express con jsonServer corriendo en el puerto 3000');
});
