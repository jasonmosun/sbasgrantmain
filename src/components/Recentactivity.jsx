// components/RecentActivity.jsx
export default function RecentActivity({ activities = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white rounded shadow p-4">
        <h4 className="font-semibold">Recent Deposits</h4>
        <ul className="mt-2">
          {activities.filter(a => a.type === "deposit").map(a => (
            <li key={a._id} className="flex justify-between border-b py-2">
              <div>{a.name ?? "Anonymous"}</div>
              <div>${a.amount}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h4 className="font-semibold">Recent Withdrawals</h4>
        <ul className="mt-2">
          {activities.filter(a => a.type === "withdraw").map(a => (
            <li key={a._id} className="flex justify-between border-b py-2">
              <div>{a.name ?? "Anonymous"}</div>
              <div>${a.amount}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
