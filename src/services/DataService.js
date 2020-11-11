export async function getAllCards() {
  const response = await fetch('/api/users');
  return response.json();
}

export async function createCreateCArd(data) {
  const response = await fetch('/api/createCard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: data }),
  });
  return response.json();
}
