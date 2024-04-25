let post = {
  userName: "vinay5025",
  pass: "VinayBatak",
  likes: 10001,
  tags: ["vinay", "niomi", "batak"],
};
console.log(post.userName);
console.log(post["pass"]);
console.log(post["likes"]);
console.log(post.tags);

delete post.pass;
console.log(post.pass);
