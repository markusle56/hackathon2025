import { Post } from "@/lib/utilis";

type SessionCardProps = {
  session: Post | null;
  id: string;
  setId: (id: string) => void;
};

export default function SessionCard({ session, id, setId }: SessionCardProps) {
  if (!session) return null;
  const icons = (session as any).icons ?? ["/img/users-round.svg", "/img/clock.svg"];

  const joinHandler = async () => {
    if (!session._id) {
      console.error("Missing session id");
      return;
    }

    try {
      const res = await fetch(`/api/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: session._id }),
      });

      const body = await res.json();

      if (!res.ok) {
        console.error("Failed to join:", body);
        return;
      }
      if (id) {
        try {
          // call the terminate route that expects ?id=...
          const termRes = await fetch(`/api/post/terminate?id=${encodeURIComponent(id)}`, {
            method: "GET",
          });

          const termBody = await termRes.json().catch(() => null);

          if (!termRes.ok) {
            console.warn("Terminate failed:", termRes.status, termBody);
          } else {
            // route returns { status: 200, ... } on success — clear parent route id
            if (termBody && termBody.status === 200) {
              setId("");
            } else {
              console.warn("Terminate response unexpected:", termBody);
            }
          }
        } catch (err) {
          console.warn("Failed to terminate route id:", err);
        }
      }
      window.location.reload()
    } catch (err) {
      console.error("joinHandler error:", err);
    }
  };

  const fmtTime = (t: string | Date) =>
    new Date(t).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="max-w-3xs rounded-lg overflow-hidden border border-black">
      <div className="px-4 py-3">
        <div className="font-bold text-xl mb-1">{session.title ?? "Untitled"}</div>
        <p className="text-gray-700 text-sm">{session.description ?? ""}</p>
      </div>

      <div className="px-4 pb-2 text-sm text-gray-700 flex items-center gap-4">
        <span className="flex items-center gap-1">
          <img src={icons[0]} alt="users" className="inline-block w-4 h-4" />
          <span>{session.people ?? 0}/{session.capacity ?? 0}</span>
        </span>

        <span className="flex items-center gap-1">
          <img src={icons[1]} alt="clock" className="inline-block w-4 h-4" />
          <span>{fmtTime(session.start_time)} - {fmtTime(session.end_time)}</span>
        </span>
      </div>

      <div className="px-4 pt-2 pb-3">
        {(session.tags ?? []).map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm text-gray-700 mr-2 mb-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="px-4 pb-4">
        <button
          onClick={joinHandler}
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md w-full"
          aria-label="Join this session"
        >
          Join this session
        </button>
      </div>
    </div>
  );
}