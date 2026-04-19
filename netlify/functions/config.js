exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "aplv-2cc1e.firebaseapp.com",
      projectId: "aplv-2cc1e",
      storageBucket: "aplv-2cc1e.firebasestorage.app",
      messagingSenderId: "1034305039453",
      appId: "1:1034305039453:web:ccb90b41b00fde812171b4"
    })
  };
};
