// src/layout/MainLayout.tsx
import React from 'react';

const MainLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">My App</h1>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <ul>
            <li className="mb-2 flex items-center">
              <span className="material-icons mr-2">dashboard</span> Dashboard
            </li>
            <li className="mb-2 flex items-center">
              <span className="material-icons mr-2">people</span> Users
            </li>
            <li className="mb-2 flex items-center">
              <span className="material-icons mr-2">settings</span> Settings
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
              <p className="text-sm text-gray-600">Overview of your application performance.</p>
            </div>
            <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span className="material-icons mr-2">add</span>
              New Report
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Users</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900">1,248</p>
              <p className="mt-2 text-sm text-green-600">+12.4% this month</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900">$38.6K</p>
              <p className="mt-2 text-sm text-green-600">+8.7% this month</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Tasks</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900">42</p>
              <p className="mt-2 text-sm text-yellow-600">5 tasks overdue</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Alerts</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900">7</p>
              <p className="mt-2 text-sm text-red-600">2 new issues</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            <section className="xl:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent activity</h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">Live</span>
              </div>
              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-medium text-gray-500">User</th>
                      <th className="px-4 py-3 font-medium text-gray-500">Action</th>
                      <th className="px-4 py-3 font-medium text-gray-500">Status</th>
                      <th className="px-4 py-3 font-medium text-gray-500">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-4 py-4">Alicia Keys</td>
                      <td className="px-4 py-4">Added a new project</td>
                      <td className="px-4 py-4 text-green-600">Completed</td>
                      <td className="px-4 py-4">May 6</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Marcus Lee</td>
                      <td className="px-4 py-4">Updated profile</td>
                      <td className="px-4 py-4 text-blue-600">In progress</td>
                      <td className="px-4 py-4">May 5</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Jenny Park</td>
                      <td className="px-4 py-4">New signup</td>
                      <td className="px-4 py-4 text-yellow-600">Pending</td>
                      <td className="px-4 py-4">May 4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Quick actions</h3>
              <div className="mt-5 space-y-3">
                <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-left text-white hover:bg-blue-700">
                  <span className="material-icons align-middle mr-2">upload_file</span>
                  Export report
                </button>
                <button className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-900 hover:bg-gray-50">
                  <span className="material-icons align-middle mr-2">person_add</span>
                  Invite team member
                </button>
                <button className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-900 hover:bg-gray-50">
                  <span className="material-icons align-middle mr-2">insights</span>
                  View analytics
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default MainLayout;