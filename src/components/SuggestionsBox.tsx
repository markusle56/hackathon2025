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

    return (
        <div className='bg-white rounded-md md:flex md:flex-col gap-2 p-2 outline-1 outline-black max-h-1/2 hidden'>
            <h1 className="text-center text-xl font-bold">Suggestions</h1>
            {posts.length > 0 && (
                <div className="gap-y-1 flex flex-col overflow-y-auto h-50">
                {posts.map((post, idx) => (
                    <Button
                        key={post._id ?? idx}
                        className={`flex flex-row py-2 h-auto text-black border-1 border-gray-500 hover:bg-white hover:border-2 justify-between items-center ${selectedPost?._id === post._id ? 'bg-gray hover:bg-gray' : 'bg-white'}`}
                        onClick={() => handleClick(post)}
                    >
                        <div className="flex flex-col text-left w-1/2 truncate">
                            <h1 className="text-base">{post.title ?? "Untitled"}</h1>
                            <p className="text-sm">
                              {formatHourRange(post)}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 ml-4 w-1/4 truncate">
                            {post.tags?.slice(0,2).map((t, i) => (
                              <p key={i} className="bg-gray-300 p-1 p-x-4 rounded-lg truncate">{t.slice(0,1).toUpperCase()}{t.slice(1)}</p>
                            ))}
                        </div>
                        <div className="flex flex-col w-1/4 h-5">
                            <img src="/img/users-round.svg" className="p-0 h-full" alt="Icon"></img>
                            <p>{post.people}/{post.capacity}</p>
                        </div>
                    </Button>
                ))}
            </div>
            )}
            {posts.length === 0 && (
              <div className="text-sm text-gray-600 w-50 text-center">No suggestions</div>
            )}
        </div>
    )
}