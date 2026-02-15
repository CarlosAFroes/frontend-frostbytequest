export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">🔒 Admin</h1>
      <p className="text-gray-400 mb-12">
        This section will be protected with authentication.
        Access to home server management, dashboards, and personal tools.
      </p>

      <div className="p-8 rounded-xl border border-yellow-800 bg-yellow-950/20">
        <h3 className="font-semibold text-yellow-400 mb-2">⚠️ Not yet configured</h3>
        <p className="text-sm text-gray-400">
          Authentication will be added here (Azure AD / GitHub OAuth).
          Once set up, only you will be able to access this section.
        </p>
      </div>
    </div>
  )
}
