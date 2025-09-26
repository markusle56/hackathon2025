import { Button } from "@/components/ui/button"


export function SuggestionsBox(){
    return (
        <div className='bg-white rounded-md flex flex-col gap-2 p-4'>
            <h1 className="text-center">Suggestions</h1>
            <Button className="flex flex-row py-6 bg-gray-400">
                <div className="flex flex-col">
                    <h1 className="text-base">James</h1>
                    <p className="text-sm"> 5min ago</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p className="bg-gray-600 p-1">maths</p>
                    <p className="bg-gray-600 p-1">cs</p>
                </div>
            </Button>
        </div>
    )
}