// src/pages/NotFound.tsx
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-gray-400">Page introuvable</p>
    </div>
  );
}

export { NotFound };