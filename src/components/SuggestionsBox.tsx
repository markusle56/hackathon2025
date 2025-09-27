import { Button } from "@/components/ui/button"
import { Post } from "@/lib/utilis";

type suggestionBoxProps = {
  posts?: Post[]; 
  selectedPost?: Post | null;
  setSelectedPost?: (value: Post | null) => void;
};

export function SuggestionsBox({ posts = [], selectedPost = null, setSelectedPost = () => {} }: suggestionBoxProps){
    const handleClick = (post: Post) => {
        setSelectedPost?.(post);
    }

    const toDate = (v: string | Date | undefined) => (v ? new Date(v) : new Date(0));
    const fmtTime = (d: Date) => d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

    const formatHourRange = (p: Post) => {
      const s = toDate(p.start_time);
      const e = toDate(p.end_time);
      return `${fmtTime(s)} - ${fmtTime(e)}`;
    };

    return (
        <div className="bg-white rounded-md shadow-md p-3 outline-1 outline-gray-200 md:w-80 w-11/12 max-h-[60vh] flex flex-col gap-3">
            <h2 className="text-center text-lg font-semibold">Suggestions</h2>

            {posts.length > 0 ? (
              <div className="flex flex-col gap-2 overflow-y-auto">
                {posts.map((post, idx) => {
                  const isSelected = Boolean(selectedPost?._id === post._id);
                  return (
                    <Button
                      key={post._id ?? idx}
                      onClick={() => handleClick(post)}
                      className={
                        `w-full text-left p-2 rounded-md flex flex-col md:flex-row items-start md:items-center gap-3
                         ${isSelected ? "bg-gray-100 border border-gray-300" : "bg-white hover:bg-gray-50"}
                        `
                      }
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{post.title ?? "Untitled"}</div>
                        <div className="text-xs text-gray-500">{formatHourRange(post)}</div>
                      </div>

                      <div className="flex items-center gap-2 md:flex-col md:items-end">
                        <div className="flex gap-2">
                          {(post.tags ?? []).slice(0,2).map((t, i) => (
                            <span key={i} className="bg-gray-200 text-xs text-gray-700 px-2 py-0.5 rounded-full truncate">
                              {String(t)}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center text-xs text-gray-700 ml-2 md:ml-0">
                          <img src="/img/users-round.svg" alt="people" className="w-4 h-4 mr-1" />
                          <span>{post.people ?? 0}/{post.capacity ?? 0}</span>
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm text-gray-600 text-center">No suggestions</div>
            )}
        </div>
    )
}