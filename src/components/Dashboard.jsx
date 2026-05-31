import React from "react";
import { useEmployees } from "../context/EmployeesContext";

function Dashboard() {
  const { employeeList } = useEmployees();

  const totalSalary = employeeList.reduce((sum, employee) => sum + Number(employee.salary), 0);
  const averageSalary = employeeList.length ? Math.round(totalSalary / employeeList.length) : 0;

  return (
    <div className="space-y-8 pb-6">
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-slate-100 to-white p-8 shadow-xl shadow-slate-200/40">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-600">Team insights</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Workforce overview
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Track your team size, payroll, and the latest hires from a clean and modern employee dashboard.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
              {employeeList.length}
            </span>
            Active Employees
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Employees</p>
          <p className="mt-4 text-4xl font-semibold text-slate-900">{employeeList.length}</p>
          <p className="mt-2 text-sm text-slate-500">Current headcount across all departments.</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Payroll</p>
          <p className="mt-4 text-4xl font-semibold text-slate-900">₹{totalSalary.toLocaleString()}</p>
          <p className="mt-2 text-sm text-slate-500">Total monthly salary expense for your team.</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Average Salary</p>
          <p className="mt-4 text-4xl font-semibold text-slate-900">₹{averageSalary.toLocaleString()}</p>
          <p className="mt-2 text-sm text-slate-500">Average employee compensation across the roster.</p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Recent Employees</h2>
            <p className="text-sm text-slate-500">Latest team additions and their current role.</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-800">
            {employeeList.length} employees
          </span>
        </div>

        <div className="space-y-4">
          {employeeList.length ? (
            employeeList.map((employee) => (
              <div
                key={employee.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{employee.employeeName}</p>
                    <p className="text-sm text-slate-500">{employee.department} • {employee.position}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-base font-medium text-slate-900">₹{Number(employee.salary).toLocaleString()}</p>
                    <p className="text-sm text-slate-500">Joined {employee.date}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
              No team members found yet. Add your first employee to start tracking payroll and headcount.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
