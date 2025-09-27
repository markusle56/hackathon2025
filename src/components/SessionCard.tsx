import React, { useState } from "react";
import { Post } from "@/lib/utilis";
import { JoinNotification } from "@/components/JoinNotification";

type SessionCardProps = {
  session: Post | null;
  mySession: string;
  setMySession: (mySession: string) =>void;
  handlePopupClose: () => void;
};

export default function SessionCard({ session, mySession, setMySession, handlePopupClose }: SessionCardProps) {
  const [notif, setNotif] = useState<string | null>(null);
  if (!session) return null;
  const icons = ["/img/users-round.svg", "/img/clock.svg"];
  
  const handleNoti = () => {
    setNotif(null)
    setMySession("")
    handlePopupClose()
  }
  const terminateSession = async () => {
    try {
      const termRes = await fetch(`/api/post/terminate?id=${encodeURIComponent(mySession)}`, {
        method: "GET",
      });

      const termBody = await termRes.json().catch(() => null);

      if (!termRes.ok) {
        console.warn("Terminate failed:", termRes.status, termBody);
      } else {
        if (termBody && termBody.status === 200) {
          setMySession("");
          handlePopupClose();
        } else {
          console.warn("Terminate response unexpected:", termBody);
        }
      }
    } catch (err) {
      console.warn("Failed to terminate route id:", err);
    }
  }
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

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        // show server message if present
        setNotif((body && body.error) || "Failed to join session");
        return;
      }

      if (mySession) {
        await terminateSession()
      }
      // success
      setNotif("Joined session");

    } catch (err) {
      console.error("joinHandler error:", err);
      setNotif("An error occurred");
    }
  };

  const fmtTime = (t: string | Date) =>
    new Date(t).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <>
      <div className="w-full rounded-lg overflow-hidden">
        {session.img && (
          <div className="px-2 py-1">
            <img src={session.img} alt="Illustration session spots" />
          </div>
        )}
        <div className="px-2 py-3">
          <div className="font-bold text-xl mb-1">{session.title ?? "Untitled"}</div>
          <p className="text-gray-700 text-sm">{session.description ?? ""}</p>
        </div>

        <div className="px-2 pb-2 text-10 text-gray-700 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <img src={icons[0]} alt="users" className="inline-block w-4 h-4" />
            <span>{session.people ?? 0}/{session.capacity ?? 0}</span>
          </span>

          <span className="flex items-center gap-1">
            <img src={icons[1]} alt="clock" className="inline-block w-4 h-4" />
            <span>{fmtTime(session.start_time)} - {fmtTime(session.end_time)}</span>
          </span>
        </div>

        <div className="px-2 pt-2 pb-3">
          {(session.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm text-gray-700 mr-2 mb-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="px-4 pb-4 flex">
          {mySession != session._id && (
          <button
            onClick={joinHandler}
            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md flex-1"
            aria-label="Join this session"
          >
            Join this session
          </button>)}
          {mySession === session._id && (
            <button
              onClick={terminateSession}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-full"
              aria-label="Terminate session"
              type="button"
            >
              Terminate
            </button>
          )}
        </div>
      </div>

      {/* notification */}
      {notif && <JoinNotification onClose={handleNoti} message={notif} />}
    </>
  );
}