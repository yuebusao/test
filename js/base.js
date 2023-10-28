fetch('http://localhost:3000/theme/../vip', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'code':'123'
    })
  })
.then((response) => response.json())
.then((response) => {
  console.log(response)
})
