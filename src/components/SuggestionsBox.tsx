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
        // do something later 
    }

    const formatHourRange = (p: Post) => {
      const s = new Date(p.start_time);
      const e = new Date(p.end_time);
      const fmt = (d: Date) =>
        d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); 
      return `${fmt(s)} - ${fmt(e)}`;
    };
    
    if (posts.length == 0) {
        return (<></>)
    }
    return (
        <div className='bg-white rounded-md flex flex-col gap-2 p-2 outline-1 outline-black max-h-1/2 h-50'>
            <h1 className="text-center text-xl font-bold">Suggestions</h1>
            <div className="gap-y-1 flex flex-col overflow-y-auto">
                {posts.map((post, idx) => (
                    <Button
                        key={post._id ?? idx}
                        className={`flex flex-row py-2 h-auto ${selectedPost?._id === post._id ? 'bg-black text-white' : 'bg-gray-400'}`}
                        onClick={() => handleClick(post)}
                    >
                        <div className="flex flex-col text-left">
                            <h1 className="text-base">{post.title ?? "Untitled"}</h1>
                            <p className="text-sm">
                              {formatHourRange(post)}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                            {post.tags?.slice(0,2).map((t, i) => (
                              <p key={i} className="bg-gray-600 p-1 rounded-lg">{t.slice(0,1).toUpperCase()}{t.slice(1)}</p>
                            ))}
                        </div>
                        <div>
                            {/* <img src="/NexusS_blue.svg" className="w-1/10"></img> */}
                        </div>
                    </Button>
                ))}
            </div>

            {posts.length === 0 && (
              <div className="text-sm text-gray-600">No suggestions</div>
            )}
        </div>
    )
}