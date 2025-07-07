"use client";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-green-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
