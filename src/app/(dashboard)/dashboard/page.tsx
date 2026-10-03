
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react";
import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {
  const session = await getUserSession();

  const userName = session?.user?.name || "User";

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-xl sm:p-8">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-2 text-sm font-medium text-slate-300">
              Welcome back 👋
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hello, {userName}!
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Here&apos;s what&apos;s happening with your account today.
              Manage your activity, explore your dashboard, and stay updated.
            </p>
          </div>

          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-slate-400" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Total Activity
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">24</h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <FileText className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-slate-400" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              My Posts
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">12</h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <MessageSquare className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-slate-400" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Comments
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">36</h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
                <Users className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-slate-400" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Connections
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">18</h2>
          </div>
        </section>

        {/* Main Content */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activity */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Activity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your latest activities at a glance.
                </p>
              </div>

              <button className="text-sm font-semibold text-slate-900 transition hover:text-blue-600">
                View all
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "You created a new post",
                  time: "2 hours ago",
                  icon: FileText,
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                },
                {
                  title: "You received a new comment",
                  time: "5 hours ago",
                  icon: MessageSquare,
                  bg: "bg-violet-50",
                  color: "text-violet-600",
                },
                {
                  title: "New connection added",
                  time: "Yesterday",
                  icon: Users,
                  bg: "bg-emerald-50",
                  color: "text-emerald-600",
                },
              ].map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activity.bg} ${activity.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-800">
                        {activity.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {activity.time}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Profile Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Your Profile
            </h2>

            <div className="mt-6 flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white ring-8 ring-slate-100">
                {userName.charAt(0).toUpperCase()}
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {userName}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {session?.user?.email || "No email available"}
              </p>

              <div className="mt-5 w-full rounded-xl bg-slate-50 p-4 text-left">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Account Status
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700">
                    Active
                  </span>
                </div>
              </div>

              <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                View Profile
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardHomePage;