// a library to wrap and simplify api calls
import apisauce from 'apisauce'
// our "constructor"
const create = (baseURL = 'https://dummyjson.com/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      Accept: 'application/json',
    },
    // 10 second timeout...
    timeout: 10000
  })
  const monitor = (response) => {
    const { config: { method, url }, data, status } = response;
    console.info(response)
    console.group(`Requesting [${method.toUpperCase()}] ${url}:`);
    console.log('Response Success:', status);
    console.log('Response Data:', data);
    console.groupEnd();
  };
  api.addMonitor(monitor);
  api.addRequestTransform((request) => {
    console.info(request)
  });
  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getProduct = () =>
    api.get('products/1')

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getProduct,
  }
}

// let's return back our create method as the default.
export default {
  create
}