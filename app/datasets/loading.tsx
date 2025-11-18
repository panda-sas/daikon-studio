export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-64 h-screen bg-muted animate-pulse" />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-10 w-48 bg-muted animate-pulse rounded" />
                <div className="h-6 w-96 bg-muted animate-pulse rounded" />
              </div>
              <div className="h-10 w-32 bg-muted animate-pulse rounded" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-10 w-32 bg-muted animate-pulse rounded" />
                ))}
              </div>
              <div className="h-96 bg-muted animate-pulse rounded-lg" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
