import data from "./products.json";

// export default defineEventHandler(() => {
//   return {
//     data,
//   };
// });

export default defineEventHandler(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});
