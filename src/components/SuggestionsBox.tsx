import { Button } from "@/components/ui/button"
import { Post } from "@/lib/utilis";

type suggestionBoxProps = {
  posts?: Post[]; 
  selectedPost?: Post;
  setSelectedPost?: (value: Post) => void;
};

export function SuggestionsBox({ posts = [], selectedPost, setSelectedPost }: suggestionBoxProps){
    return (
        <div className='bg-white rounded-md flex flex-col gap-2 p-4'>
            <h1 className="text-center">Suggestions</h1>
            <div>
                {posts.map((post, idx) => (
                    <Button key={post._id ?? idx} className="flex flex-row py-6 bg-gray-400" onClick={() => setSelectedPost?.(post)}>
                        <div className="flex flex-col">
                            <h1 className="text-base">{post.title ?? "Untitled"}</h1>
                            <p className="text-sm"> 5min ago</p>
                        </div>
                        <div className="flex flex-row gap-2 ml-4">
                            {post.tags?.slice(0,2).map((t, i) => (
                              <p key={i} className="bg-gray-600 p-1">{t}</p>
                            ))}
                        </div>
                    </Button>
                ))}
            </div>

            {/* example static fallback if you want */}
            {posts.length === 0 && (
              <div className="text-sm text-gray-600">No suggestions</div>
            )}
        </div>
    )
}