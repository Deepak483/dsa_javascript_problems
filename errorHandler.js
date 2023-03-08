//try and catch
function errorHandler(x) {
  try {
    return getX(x);
  } catch (error) {
    return error;
  }
}
function getX(x) {
  if (x === 5) {
    return new Error("Error Occured");
  }
  return x;
}
