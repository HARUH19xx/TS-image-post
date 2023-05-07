const fetchHello = async () => {
  try {
    const response = await fetch('http://localhost:3000/');
    const message = await response.text();
    document.getElementById('message').textContent = message;
  } catch (error) {
    console.error('Error fetching Hello message:', error);
  }
};

fetchHello();
