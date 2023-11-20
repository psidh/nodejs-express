function submit() {
  console.log('ABC');
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    body: JSON.stringify({
      name: 'PS',
      domain: '456',
      techStack: '123',
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
}

function hello() {
  console.log('ABC');
  fetch('http://localhost:3000/hello', {
    method: 'GET',
  })
    .then((res) => res.text())
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
}
