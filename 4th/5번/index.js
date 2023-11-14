// 여기에 1번 문제의 답을 작성하세요.

async function products() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data);
}

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// 여기에 2번 문제의 답을 작성하세요.

const getPost = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        /* other product data */
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error", error);
  }
};

getPost();

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);
