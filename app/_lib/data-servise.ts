export async function getPosts() {
  try {
    await new Promise((res) => setTimeout(res, 1000));
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getComments(postId: number) {
  try {
    await new Promise((res) => setTimeout(res, 1000));
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(postId: number) {
  try {
    await new Promise((res) => setTimeout(res, 1000));
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
