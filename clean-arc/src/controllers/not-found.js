export default async function notFound() {
  return {
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      error: "Not found.",
      info: "Wellcom to Your Clean Architecture Application"
    },
    statusCode: 404
  };
}
