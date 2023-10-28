fetch('http://localhost:3000/vip', {
  method: 'post',
  headers: {
    'host':'localhost:3000?a='
  },
  body: JSON.stringify({
    'code':'123'
    })
  })
.then((response) => response.json())
.then((response) => {
  console.log(response)
})
