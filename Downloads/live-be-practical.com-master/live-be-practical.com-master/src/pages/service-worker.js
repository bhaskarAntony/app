self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push received...', data);
    self.registration.showNotification(data.notification.title, {
      body: data.notification.body,
    });
  });
  