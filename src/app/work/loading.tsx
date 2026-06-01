export default function WorkLoading() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <div className="h-4 w-16 rounded-full bg-border" />
      <div className="mt-3 h-10 w-3/4 rounded-2xl bg-border" />
      <div className="mt-4 h-5 w-1/2 rounded-2xl bg-border" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="card h-64 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
