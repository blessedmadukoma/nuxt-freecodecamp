export const useUtils = () => {
  const sayHello = (name: string) => {
    console.log(`Hello ${name}`);
  };

  // return ref()
  return {
    sayHello,
  };
};
